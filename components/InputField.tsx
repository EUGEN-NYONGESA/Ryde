import { View, Text, TextInput, TouchableWithoutFeedback, Image, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import React from "react";
import { InputFieldProps } from "@/constants/types/type";

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) => (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className={`my-2 w-full ${className}`}>
                {label && (
                    <Text className={`text-lg font-JakartaExtraBold mb-3 ${labelStyle}`}>
                        {label}
                    </Text>
                )}
                <View
                    className={`flex flex-row items-center rounded-full border border-neutral-100 bg-primary-500 px-4 py-4 ${containerStyle}`}
                    style={{ borderWidth: 1, borderColor: "#D1D5DB", backgroundColor: "#F3F4F6" }} // Explicit styles
                >
                {icon && (
                    <Image
                        source={icon}
                        className={`w-4 h-4 mx-2 ${iconStyle}`} // Increased size for better visibility
                        resizeMode="contain"
                    />
                )}
                <TextInput
                    className={`flex-1 font-JakartaMedium text-base text-black ${inputStyle}`}
                    style={{ paddingVertical: 10, color: "#000" }} // Ensure text is visible
                    secureTextEntry={secureTextEntry}
                    placeholderTextColor="#9CA3AF"
                    {...props}
                />
                </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
);

export default InputField;
