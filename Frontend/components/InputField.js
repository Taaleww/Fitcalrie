import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

export default function InputField({
  label,
  value,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  onChangeText,
  onBlur,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          labelStyle={{
            fontFamily: 'NotoSansThai-Regular',
          }}
          placeholder={label}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          keyboardType={keyboardType}
          style={{
            flex: 1,
            paddingVertical: 0,
            fontFamily: 'NotoSansThai-Regular',
            fontSize: 12,
          }}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          placeholder={label}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          keyboardType={keyboardType}
          style={{
            flex: 1,
            paddingVertical: 0,
            fontFamily: 'NotoSansThai-Regular',
            fontSize: 12,
          }}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text
          style={{
            color: '#AD40AF',
            fontWeight: '700',
            fontFamily: 'NotoSansThai-Regular',
          }}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
