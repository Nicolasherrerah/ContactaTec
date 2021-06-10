import React, { useContext } from 'react';
import { Text, View, StatusBar, TextInput, Pressable, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/ThemeContext'
import { globalStylesDark } from '../styles/globalDark'
import { globalStylesLight } from '../styles/globalLight'



export default function Post({route}) {
  const context = useContext(ThemeContext);
  const theme = context.theme.isLight ? globalStylesLight : globalStylesDark;
  const statusColor = context.theme.isLight ? '#4285f4' : '#000';
  const iconColor = context.theme.isLight ? '#000':  '#fff';
  const placeholderColor = context.theme.isLight ? 'grey':  '#a3a3a3';
  const { content, comments } = route.params;
  return (
    <ScrollView>
      <View style={theme.container}>
        <StatusBar backgroundColor={statusColor}/>
        <View style={theme.postContent}>
          <Text style={theme.text}>{content}</Text>
        </View>
        <View style={theme.chatBox}>
          <Pressable>
            <Ionicons name="happy-outline" size={20} color={iconColor}/>
          </Pressable>
          <TextInput placeholder='Escribe un comentario' style={theme.chatInput} multiline={true} placeholderTextColor={placeholderColor}/>
          <Pressable>
            <Ionicons name="return-down-back-sharp" size={20} color={iconColor}/>
          </Pressable>
        </View>
        <Text style={theme.commentText}>
          Comentarios {comments}
        </Text>
      </View>
    </ScrollView>
  );
}
