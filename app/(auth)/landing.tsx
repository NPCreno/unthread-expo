import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { useState, useEffect, useRef } from "react";
import { Animated } from "react-native";
import Login from "./login";
import SignUp from "./signUp";
import Feather from "@expo/vector-icons/Feather";

export default function LandingPage() {
  const [screen, setScreen] = useState<authScreen>("default");

  const handleBackButton = () => {
    setScreen("default");
  };

  return (
    <SafeAreaView className="flex-1 h-full w-full bg-[#262626]">
      <View className="flex-grow w-full flex items-center flex-col justify-between ">
        <View className="w-full flex items-start justify-center">
          {screen !== "default" && (
            <TouchableOpacity
              onPress={handleBackButton}
              className="absolute top-6 left-6"
            >
              <Feather name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
          )}
        </View>
        <View className="w-full flex-grow flex-col items-center justify-center gap-6 pt-24">
          <Text className="text-white font-rancho text-5xl">Unthread</Text>
          <Text className="text-white font-poppins text-xs">
            a threads clone
          </Text>
        </View>
      </View>
      <AuthPanel
        screen={screen}
        onScreenChange={(screen) => setScreen(screen)}
      />
    </SafeAreaView>
  );
}

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

type authScreen = "default" | "login" | "signup";

function AuthPanel({
  screen,
  onScreenChange,
}: {
  screen: authScreen;
  onScreenChange: (screen: authScreen) => void;
}) {
  const animatedHeight = useRef(new Animated.Value(390)).current;

  useEffect(() => {
    const targetHeight =
      screen === "default" ? 390 : screen === "login" ? 500 : 600;

    Animated.timing(animatedHeight, {
      toValue: targetHeight,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [screen]);

  return (
    <AnimatedLinearGradient
      colors={
        screen === "default" ? ["#5E5E5E", "black"] : ["#5E5E5E", "#171717"]
      }
      start={screen === "default" ? { x: 0, y: 0 } : { x: 0, y: 0 }}
      end={screen === "default" ? { x: 1, y: 1 } : { x: 0, y: 1 }}
      className={`w-full flex items-center flex-col justify-start`}
      style={{
        height: animatedHeight,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      }}
    >
      {screen === "default" ? (
        <View className="w-full flex items-center">
          <View className="max-w-[270px]">
            <View className="flex items-center gap-6 w-full pt-[50px]">
              <TouchableOpacity
                className="min-w-full h-11 rounded-full flex items-center justify-center bg-[#1E1E1E]"
                onPress={() => onScreenChange("login")}
              >
                <Text className="text-white font-poppins text-base font-bold">
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="min-w-full h-11 rounded-full flex items-center justify-center bg-white"
                onPress={() => onScreenChange("signup")}
              >
                <Text className="text-black font-poppins text-base font-bold">
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex items-center gap-6">
              <View className="flex flex-row items-center justify-between w-full gap-2 mt-14">
                <View className="flex-1 h-[1px] bg-white" />
                <Text className="text-white font-poppins text-sm px-2">
                  Or sign in with
                </Text>
                <View className="flex-1 h-[1px] bg-white" />
              </View>
              <View className="flex flex-row items-center justify-between min-w-[200px]">
                <TouchableOpacity className="min-w-12 min-h-12 rounded-full flex items-center justify-center bg-white">
                  <Image
                    className="min-w-12 min-h-12"
                    source={require("../../assets/images/fbIcon.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity className="min-w-12 min-h-12 rounded-full flex items-center justify-center bg-white">
                  <Image
                    className="min-w-8 min-h-8"
                    source={require("../../assets/images/googleIcon.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity className="min-w-12 min-h-12 rounded-full flex items-center justify-center bg-white">
                  <Image
                    className="min-w-5 min-h-5"
                    source={require("../../assets/images/appleIcon.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ) : screen === "login" ? (
        <Login />
      ) : (
        <SignUp />
      )}
    </AnimatedLinearGradient>
  );
}
