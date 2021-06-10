import React, {useContext} from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { ThemeContext } from '../context/ThemeContext'
import { globalStylesDark } from '../styles/globalDark'
import { globalStylesLight } from '../styles/globalLight'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './header';

const PEOPLE = [
  { name: "Programas Internacionales",
    id: 1
  },
  { name: "Apoyo TI",
    id: 2
  },
  { name: "Alumno ejemplo",
    id: 3
  },
]
export default function Chats( {navigation} ) {
  const context = useContext(ThemeContext);
  const theme = context.theme.isLight ? globalStylesLight : globalStylesDark;
  const iconColor = context.theme.isLight ? '#000':  '#fff';

  return (
    <View style={theme.container}>
      <Header/>
      <View style={styles.container}>
          {
            PEOPLE.map((item) =>(
              <Pressable style={theme.chatItem} key={item.id} onPress={() => navigation.navigate('Chat', {title: item.name})}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={theme.postTitle}>
                      {item.name}
                    </Text>
                    <Ionicons name='ellipsis-vertical' size={30} color={iconColor}/>
                  </View>
              </Pressable>
            ))
          }
      </View>
      <View style={{alignItems: 'flex-end', marginTop:20, marginRight: 5}}>
          <Ionicons name="add-circle" size={50} color={iconColor}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    
});