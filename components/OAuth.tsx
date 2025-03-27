import { Image, Text, View } from "react-native";
import CustomButton from "./customButton";
import { icons } from "@/constants";

const OAuth = ({ isSignUp }) => {
  const handleGoogleSignIn = async () => {};

  return (
    <View style={{ width: "100%", paddingHorizontal: 20, marginVertical: 20 }}>
      {/* Divider with "Or" */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#D1D5DB" }} />
        <Text
          style={{
            marginHorizontal: 10,
            fontSize: 16,
            fontFamily: "JakartaBold",
            color: "#6B7280",
          }}
        >
          Or
        </Text>
        <View style={{ flex: 1, height: 1, backgroundColor: "#D1D5DB" }} />
      </View>

      {/* Google Auth Button */}
      <CustomButton
        title={isSignUp ? "Sign Up with Google" : "Log in with Google"}
        className="w-11/12 h-[45px] mt-5 shadow-none flex flex-row items-center justify-center"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: 10, marginTop: 4 }}
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;
