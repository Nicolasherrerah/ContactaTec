import React, {useContext, useState} from 'react';
import { Text, View, StyleSheet, Pressable, Modal, TextInput } from 'react-native';
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
  const [modalVisible, setModalVisible] = useState(false);
  const context = useContext(ThemeContext);
  const theme = context.theme.isLight ? globalStylesLight : globalStylesDark;
  const iconColor = context.theme.isLight ? '#000':  '#fff';

  return (
    <View style={theme.container}>
      <Header/>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
        <View style={theme.modal}>
          <Text style={theme.title}>Elegir contacto</Text>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingVertical: 5}}>
            <Text style={theme.text}>Nombre: </Text>
            <TextInput placeholder='Busca un contacto'/>
          </View>
          <View style={{flexDirection: 'row', justifyContent:'space-evenly', marginTop: 20}}>
            <Pressable style={theme.closeBtn} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={globalStylesDark.text}>Cancelar</Text>
            </Pressable>
            <Pressable style={theme.openBtn} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={globalStylesDark.text}>Crear chat</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
        <Pressable onPress={() => setModalVisible(true)}>
          <Ionicons name="add-circle" size={50} color={iconColor}/>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    
});