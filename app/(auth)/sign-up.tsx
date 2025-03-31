import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/customButton";
import { Link, router } from "expo-router";
import OAuth from "@/components/OAuth";
import { useSignUp } from "@clerk/clerk-expo";
import ReactNativeModal from "react-native-modal";


const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp()
  const [showSuccessModal, setShowSuccessModal] = useState(false);


  const [form, setForm] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  });

  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });

  const [error, setError] = useState("");

  const onSignUpPress = async () => {
    if (!isLoaded) return

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      })

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      setVerification({
        ...verification,

        state: 'pending'
      });
    } catch (err: any) {
      setError(err.errors[0].longMessage);
    }
  }

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      })

      if (signUpAttempt.status === 'complete') {
        //TODO: Create a database user!

        await setActive({ session: signUpAttempt.createdSessionId });
        setVerification({ ...verification, state: "success" });
      } else {
        setVerification({
          ...verification,
          error: "Verification failed.",
          state: "failed"
        });
      }
    } catch (err: any) {
      setVerification({
        ...verification,
        error: err.errors[0].longMessage,
        state: "failed"
      })
    }
  }


  return (
    <ScrollView className="flex-1 bg-white" contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 bg-white">
        {/* Header Image */}
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="w-full h-full" resizeMode="cover" />
          <Text className="text-2xl text-black font-JakartaBold absolute bottom-5 left-1/2 -translate-x-1/2">
            Create Your Account
          </Text>
        </View>

        {/* Input Fields */}
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
            containerStyle="mt-2"
          />

          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
            keyboardType="email-address"
            containerStyle="mt-4"
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
            secureTextEntry={true}
            containerStyle="mt-4"
          />

          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            className="w-11/12 h-[45px] mt-6"
          />

          <OAuth isSignUp={true} />

          <Link
            href="/(auth)/sign-in"
            className="text-lg text-center text-general-200 mt-3"
          >
            <Text className="font-JakartaBold">Already have an account? </Text>
            <Text className="text-primary-500 font-JakartaBold">Log in</Text>
          </Link>
        </View>

        {/* verification modal */}
        <ReactNativeModal
          isVisible={verification.state === "pending"}
          onModalHide = {() => {
            if (verification.state === 'success') setShowSuccessModal(true)
          }}
        >
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Text className="text-2xl font-JakartaExtraBold mb-2">
              Verification
            </Text>
            <Text className="font-JakartaBold mb-5">
              We've sent a verification code to {form.email}
            </Text>

            <InputField
              label="Code"
              icon={icons.lock}
              placeholder="12345"
              value={verification.code}
              keyboardType="numeric"
              onChangeText={(code) =>
                setVerification({
                  ...verification,
                  code
                })
              }
            />

            {verification.error && (
              <Text className="text-red-500 text-sm mt-1">
                {verification.error}
              </Text>
            )}

            <CustomButton
              title="Verify Email"
              onPress={onVerifyPress}
              className="w-11/12 h-[45px] mt-5 bg-success-500"
            />
          </View>
        </ReactNativeModal>

        <ReactNativeModal isVisible={showSuccessModal}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Image
              source={images.check}
              className="w-[110px] h-[110px] mx-auto my-5"
            />

            <Text className="text-3xl font-JakartaBold text-center">
              Verified
            </Text>

            <Text className="text-base text-gray-400 font-JakartaBold text-center mt-2">
              You have successfully verified your account.
            </Text>

            <CustomButton
              title="Browse Home"
              onPress={() => {
                setShowSuccessModal(false);
                router.push("/(root)/(tabs)/home")
              }}
              className="w-11/12 h-[45px] mt-5"
            />
          </View>
        </ReactNativeModal>

        {/*Error Modal*/}
        <ReactNativeModal isVisible={!!error} onBackdropPress={() => setError("")}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[200px] items-center">
            <Text className="text-2xl font-JakartaExtraBold text-center text-red-500">
              🚨 Error
            </Text>
            <Text className="text-lg font-JakartaMedium text-center mt-3 text-gray-700">
              {error}
            </Text>
            <CustomButton
              title="OK"
              onPress={() => setError("")}
              className="w-11/12 h-[45px] mt-5"
            />
          </View>
        </ReactNativeModal>
      </View>
    </ScrollView>
  );
};

export default SignUp;