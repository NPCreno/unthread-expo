import { Redirect, Stack } from "expo-router";
import { useAuthStore } from "@/context/authStore";

export default function AuthLayout() {
  const { user } = useAuthStore();
  if (user) {
    return <Redirect href="/(authenticated)/dashboard" />;
  }

  // Auth stack: sign-in and sign-up
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="landing" />
      <Stack.Screen name="login" />
      <Stack.Screen name="signUp" />
    </Stack>
  );
}
