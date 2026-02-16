import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginPage() {
  return (
    <SafeAreaView className="flex-1 h-full w-full">
      <View className="h-full w-full flex items-center flex-col justify-center bg-[#262626]">
        <Text className="text-white font-rancho text-5xl">Test</Text>
      </View>
    </SafeAreaView>
  );
}
