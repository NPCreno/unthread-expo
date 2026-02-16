import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";
import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import "../global.css";
import { useFonts } from "expo-font";
import { Rancho_400Regular } from "@expo-google-fonts/rancho";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Rancho_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
