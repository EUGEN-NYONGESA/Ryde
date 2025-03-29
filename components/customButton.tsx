import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ButtonProps } from '@/constants/types/type';

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
    switch (variant) {
        case "secondary":
            return "bg-gray-500";
        case "danger":
            return "bg-red-500";
        case "success":
            return "bg-green-500";
        case "outline":
            return "bg-transparent border border-gray-400";
        default:
            return "bg-[#0286FF]";
    }
};

const CustomButton = ({
    onPress,
    title,
    bgVariant = "primary",
    textVariant = "default",
    IconLeft,
    IconRight,
    className = "",
    forceWhiteText = false, // New prop to force white text
    ...props
}: ButtonProps & { forceWhiteText?: boolean }) => {
    const bgClass = getBgVariantStyle(bgVariant);
    const textClass = forceWhiteText
        ? "text-white"
        : bgVariant === "outline"
            ? "text-gray-800"
            : "text-white";

    return (
        <TouchableOpacity
            style={{
                borderWidth: bgVariant === "outline" ? 1 : 0,
                borderColor: bgVariant === "outline" ? "#9CA3AF" : "transparent", // Gray-400 equivalent
            }}
            onPress={onPress}
            className={`w-full h-[45px] rounded-full p-3 flex-row justify-center items-center
                py-4 shadow-md shadow-neutral-400/70 ${bgClass} ${className}`}
            activeOpacity={0.8}
            {...props}
        >
            {IconLeft && <IconLeft className="mr-2" />}
            <Text className={`font-JakartaBold text-lg ${textClass}`}>
                {title}
            </Text>
            {IconRight && <IconRight className="ml-2" />}
        </TouchableOpacity>
    );
};

export default CustomButton;