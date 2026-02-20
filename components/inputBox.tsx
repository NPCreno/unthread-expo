import { TextInput, View, Text } from "react-native";

interface InputBoxProps {
  label?: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  value: string;
  secureTextEntry?: boolean;
  classname?: string;
  error?: string;
}

export default function InputBox({
  label,
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
  classname,
  error,
}: InputBoxProps) {
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
        secureTextEntry={secureTextEntry}
      />
      {error && <Text className="text-red-500">{error}</Text>}
    </View>
  );
}
