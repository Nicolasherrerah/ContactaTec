import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Button, StyleSheet, Text, View, TextInput, Pressable, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import { ThemeContext } from '../context/ThemeContext'
import { globalStylesDark } from '../styles/globalDark'
import { globalStylesLight } from '../styles/globalLight'

export default function LogIn({navigation}) {

  const handleHelp = () => {
    WebBrowser.openBrowserAsync('https://itesm.custhelp.com/app/chat/login_faqs');
  }

  const context = useContext(ThemeContext);
  const theme = context.theme.isLight ? globalStylesLight : globalStylesDark;

  return (
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
    }}>
      <View style={styles.parentContainer}>
        <View style={styles.container}>
          <Image
            style={styles.logoTec}
            source={require('../assets/logotec.png')}
          />
          <Image
            style={styles.logoApp}
            source={require('../assets/logomaybe.png')}
          />
          <TextInput style={styles.input} placeholder='Usuario'/>
          <TextInput style={styles.input} placeholder='Constraseña'/>
          <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('Main')} style={styles.buttonContainer}>
            <Text style={styles.Btn}>
              INGRESAR
            </Text>
          </Pressable>
          <Pressable style={styles.help} onPress={handleHelp}>
            <Text style={styles.helpText}>
              ¿Necesitas ayuda? Contáctanos
            </Text>
          </Pressable>
          <StatusBar style="auto" />
          <View>
            <Text style={styles.copyright}>
            &copy; 2021 Tecnológico de Monterrey
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  parentContainer:{
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    
  },
  buttonContainer: {
    margin: 10,
    backgroundColor: '#a3a3a3',
    borderRadius: 10,
    backgroundColor: '#2196f3'
  },
  Btn: {
    fontFamily: 'NotoSansJP_500Medium',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',

  },
  input:{
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#a3a3a3',
    padding: 8,
    margin: 15,
    width: 200,
    fontFamily: 'NotoSansJP_300Light',

  },
  help: {
    margin: 20,
  },
  helpText:{
    fontFamily: 'NotoSansJP_400Regular',
  },
  copyright: {
    marginTop: 100,
    fontFamily: 'NotoSansJP_900Black',
  }, 
  logoTec: {
    width: 200,
    height: 52,
    marginBottom: 40,
  },
  logoApp: {
    width: 110,
    height: 90,
  }
});
