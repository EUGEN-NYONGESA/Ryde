import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/customButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {}

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
      </View>
    </ScrollView>
  );
};

export default SignUp;