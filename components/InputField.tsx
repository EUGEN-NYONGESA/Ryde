import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from "react-native";
import React from "react";
import { InputFieldProps } from "@/constants/types/type";

const InputField = ({
  label,
  labelStyle,
  icon,
  rightIcon,
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
                    <Text className={`text-lg font-JakartaBold mb-3 ${labelStyle}`}>
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
                            style={{ width: 16, height: 16, marginHorizontal: 8 }} // Explicit width & height
                            resizeMode="contain"
                        />
                    )}
                    <TextInput
                        className={`flex-1 font-JakartaBold text-base text-black ${inputStyle}`}
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