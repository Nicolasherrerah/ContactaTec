import React, { useContext } from 'react';
import { Text, View, TextInput, StatusBar, Pressable } from 'react-native';
import { ThemeContext } from '../context/ThemeContext'
import { globalStylesDark } from '../styles/globalDark'
import { globalStylesLight } from '../styles/globalLight'
import Ionicons from 'react-native-vector-icons/Ionicons';




export default function Chat() {
  const context = useContext(ThemeContext);
  const theme = context.theme.isLight ? globalStylesLight : globalStylesDark;
  const statusColor = context.theme.isLight ? '#4285f4' : '#000';
  const iconColor = context.theme.isLight ? '#000':  '#fff';
  const placeholderColor = context.theme.isLight ? 'grey':  '#a3a3a3';

  return (
    <View style={theme.container}>
      <StatusBar backgroundColor={statusColor}/>
      <View style={theme.chatSpace}></View>
      <View style={theme.chatBox}>
        <Pressable>
          <Ionicons name="happy-outline" size={20} color={iconColor}/>
        </Pressable>
        <TextInput placeholder='Escribe un mensaje' style={theme.chatInput} multiline={true} placeholderTextColor={placeholderColor}/>
        <Pressable>
          <Ionicons name="return-down-back-sharp" size={20} color={iconColor}/>
        </Pressable>
      </View>
    </View>
  );
}
