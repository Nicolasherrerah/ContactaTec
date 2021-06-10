import React, {useState, useContext} from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Text, StyleSheet, SafeAreaView, Pressable, SectionList, View, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/ThemeContext'
import { globalStylesDark } from '../styles/globalDark'
import { globalStylesLight } from '../styles/globalLight'

const DATA = [
  {
    title: "Cuenta",
    data: ["Perfil", "Notificaciones", "Cerrar sesión"]   
  },
  {
    title: "Avisos",
    data: ["Politicas de uso", "Aviso legal", "Aviso de privacidad"]
  },

]

export default function Settings({navigation}) {
  
  const Item = ({ title, onPress }) => (
    <Pressable style={styles.item} onPress={onPress}>
        <Text style={theme.itemText}>{title}</Text>
    </Pressable>
  );
  const context = useContext(ThemeContext);
  const theme = context.theme.isLight ? globalStylesLight : globalStylesDark;
  const icon = context.theme.isLight ? {logo: 'sunny-sharp', color: '#4285f4'} : {logo: 'moon-sharp', color: 'white'};
  const [selectedItem, setSelectedItem] = useState(null);
  const renderItem = ({ item }) => {
    if (item === selectedItem && item === "Aviso legal") {
      WebBrowser.openBrowserAsync('https://tec.mx/es/aviso-legal');
    }
    if (item === selectedItem && item === "Aviso de privacidad") {
      WebBrowser.openBrowserAsync('https://tec.mx/es/avisos-de-privacidad');
    }
    if (item === selectedItem && item === "Cerrar sesión") {
      navigation.popToTop();
    }
    return(
      <Item title={item} onPress={() => setSelectedItem(item)}/>
    );
  };
  return (
    <SafeAreaView style={theme.container}>
      <View style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={theme.title}>{title}</Text>
          )}
          ListHeaderComponent={<Text style={theme.header}>Ajustes</Text>}
          />
          <Text style={theme.title}>
            Personalizar
          </Text>
          <Pressable style={styles.item} onPress={context.toggleTheme}>
            <Text style={theme.itemText}>Cambiar tema</Text>
            <Ionicons name={icon.logo} color={icon.color} size={20} style={styles.logo}/>
          </Pressable>
        <Text style={theme.copyright}>&copy; 2021 Tecnológico de Monterrey</Text>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 10
    },
    item: {
      paddingVertical: 10,
      paddingLeft: 10,
      borderBottomWidth: 1,
      borderColor: "#a3a3a3", 
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    logo: {
      marginRight: 20
    },

});