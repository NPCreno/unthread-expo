import { TextInput, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

interface InputBoxProps {
  label?: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  value: string;
  classname?: string;
  error?: string;
  type?: "text" | "password";
}

export default function InputBox({
  label,
  onChangeText,
  value,
  placeholder,
  classname,
  error,
  type,
}: InputBoxProps) {
  const [isSecure, setIsSecure] = useState(type === "password");

  return (
    <View className="w-full">
      {label && (
        <Text className={`${error ? "text-red-500" : "text-white "}`}>
          {label}
        </Text>
      )}
      <TextInput
        className={`border-b ${error ? "border-red-500" : "border-white"} text-white w-full text-base ${classname}`}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="white"
        secureTextEntry={isSecure}
      />
      {type === "password" && (
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
          <Ionicons
            name={isSecure ? "eye" : "eye-off"}
            size={24}
            color="white"
            className="absolute right-2 top-[-30px]"
            zIndex={20}
          />
        </TouchableOpacity>
      )}
      {error && <Text className="text-red-500">{error}</Text>}
    </View>
  );
}
