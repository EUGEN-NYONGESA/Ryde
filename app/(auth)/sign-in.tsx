import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/customButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = async () => {};

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View className="flex-1 bg-white">
        {/* Header Image */}
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="w-full h-full" resizeMode="cover" />
          <Text className="text-2xl text-black font-JakartaBold absolute bottom-5 left-1/2 -translate-x-1/2">
            Welcome 👋
          </Text>
        </View>

        {/* Form Fields */}
        <View className="p-5">
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

        {/* Sign In Button */}
        <CustomButton title="Sign In" onPress={onSignInPress} className="w-11/12 h-[45px] mt-6" />

        {/* OAuth Login */}
        <OAuth isSignUp={false} />

        {/* Sign Up Link */}
        <Link href="/(auth)/sign-up" asChild>
          <Text className="text-lg text-center text-general-200 mt-3">
            <Text className="font-JakartaBold">Need an account? </Text>
            <Text className="text-primary-500 font-JakartaBold">Sign Up</Text>
          </Text>
          </Link>
          </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;