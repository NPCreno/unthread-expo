import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
export default function LoginPage() {
  return (
    <SafeAreaView className="flex-1 h-full w-full">
      <View className="h-full w-full flex items-center flex-col justify-between bg-[#262626]">
        <View className="w-full flex-grow flex-col items-center justify-center gap-6 pt-24">
          <Text className="text-white font-rancho text-5xl">Unthread</Text>
          <Text className="text-white font-poppins text-xs">
            a threads clone
          </Text>
        </View>
        <LinearGradient
          colors={["#5E5E5E", "black"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="min-h-[390px] w-full flex items-center pt-[50px] flex-col justify-start"
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          <View className="max-w-[270px]">
            <View className="flex items-center gap-6 w-full ">
              <TouchableOpacity className="min-w-full h-11 rounded-full flex items-center justify-center bg-[#1E1E1E]">
                <Text className="text-white font-poppins text-base font-bold">
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="min-w-full h-11 rounded-full flex items-center justify-center bg-white">
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
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}
