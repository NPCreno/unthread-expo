import { Text, TouchableOpacity, View } from "react-native";
import InputBox from "@/components/inputBox";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  const LoginSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
  });
  type LoginFormData = z.infer<typeof LoginSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<{ username: string; password: string }> = (
    data,
  ) => {
    if (data.username !== "admin") {
      setError("username", {
        type: "manual",
        message: "Invalid username",
      });
      setError("password", {
        type: "manual",
        message: "Invalid password",
      });
    }

    console.log(data);
  };

  return (
    <View className="h-full w-full flex flex-col items-start justify-start pt-7 px-8 gap-10">
      <View className="w-full flex flex-col gap-2 items-start ">
        <Text className="text-white justify-start text-3xl font-bold font-lato">
          Login
        </Text>
        <Text className="text-white justify-start text-base font-normal font-lato">
          Please sign in to continue
        </Text>
      </View>
      <View className="w-full flex flex-col gap-10 items-start ">
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, value } }) => (
            <InputBox
              label="Username"
              onChangeText={onChange}
              value={value}
              error={errors.username?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <InputBox
              label="Password"
              onChangeText={onChange}
              value={value}
              type="password"
              error={errors.password?.message}
            />
          )}
        />
      </View>

      <View className="flex flex-col items-center gap-3 w-full">
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-[#3F3F3F] rounded-full h-12 flex items-center justify-center w-full"
        >
          <Text className="text-white text-base font-bold">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-white rounded-full h-12 flex items-center justify-center w-full"
        >
          <Text className="text-black text-base font-normal">
            I forgot my Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
