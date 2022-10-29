import React from "react";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";
import tailwind from "tailwind-rn";

interface InputGroupProps {
  label?: string;
  placeholder?: string;
  value?: string;
  password?: boolean;
  type?: KeyboardTypeOptions;
  onChangeText?: (value: string) => void;
  onBlur?: () => void;
}

export const InputComp: React.FunctionComponent<InputGroupProps> = ({
  label,
  placeholder,
  value,
  password,
  type = "default",
  onChangeText,
  onBlur,
}) => {
  return (
    <View style={{paddingVertical:10}}>
      {!!label && (
        <Text style={{marginBottom:2,fontSize:18,color:"gray"}}>{label}</Text>
      )}
      <TextInput
        style={{fontSize:24,borderColor:"gray",borderRadius:5,paddingHorizontal:3,paddingVertical:10}}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={password}
        keyboardType={type}
      />
    </View>
  );
};