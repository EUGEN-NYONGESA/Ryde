import { icons } from "@/constants";
import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";

const TabIcon = ({ source, focused }: { source: ImageSourcePropType; focused: boolean }) => (
  <View className={`flex justify-center mt-8 items-center rounded-full ${focused ? "bg-general-300" : ""}`}>
    <View className={`rounded-full w-14 h-14 items-center justify-center ${focused ? "bg-general-400" : ""}`}>
      <Image source={source} tintColor="white" resizeMode="contain" className="w-8 h-8" />
    </View>
  </View>
);

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // ✅ Hide tab labels
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          paddingBottom: 0,
          paddingVertical: 10, // ✅ Centers icons vertically
          alignItems: "center", // ✅ Ensures icons are properly aligned
          overflow: "hidden",
          marginHorizontal: 15,
          marginBottom: 15,
          height: 70,
          display: "flex",
          justifyContent: "space-between",
          position: "absolute"
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.home} />,
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.list} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.chat} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.profile} />,
        }}
      />
    </Tabs>
  );
}