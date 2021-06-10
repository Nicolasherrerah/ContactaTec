import React, {useState, useContext} from 'react';
import { Text, View, StyleSheet, Linking, Alert, Pressable, ScrollView } from 'react-native';
import { ThemeContext } from '../context/ThemeContext'
import { globalStylesDark } from '../styles/globalDark'
import { globalStylesLight } from '../styles/globalLight'
import Header from './header';


export default function Emergency() {
  const context = useContext(ThemeContext);
  const theme = context.theme.isLight ? globalStylesLight : globalStylesDark;
  return (
    <View style={theme.container}>
      <Header/>
      <ScrollView>
        <View>
          <View>
            <Text style={theme.locationTitle}>Ubicación actual: Gelsenkirchen, Alemania</Text>
            <Pressable onPress={() => {Linking.openURL('tel:110')}} style={theme.contactItem}>
              <Text style={theme.contactItemText}>Contactar policia: 110</Text>
            </Pressable>
            <Pressable onPress={() => {Linking.openURL('tel:112')}} style={theme.contactItem}>
              <Text style={theme.contactItemText}>Contactar servicios medicos/bomberos: 112</Text>
            </Pressable>
            <Pressable onPress={() => {Linking.openURL('tel:+491709757763')}} style={theme.contactItem}>
              <Text style={theme.contactItemText}>Contactar embajada mexicana: +49 170 975 77 63</Text>
            </Pressable>
            <Pressable onPress={() => {Linking.openURL('tel:+52709757763')}} style={theme.contactItem}>
              <Text style={theme.contactItemText}>Llamar contacto de emergencia</Text>
            </Pressable>
          </View>
          <Pressable style={theme.panicBtn} onPress={() => Alert.alert('Botón de panico activado', 'Su contacto de emergencia y la entidad local han sido notificados.')}>
            <Text style={globalStylesDark.panicBtnText}> SOS </Text>  
          </Pressable>
          <Text style={theme.buttonDisclaimer}>
            Al presionar este botón se contactara al organismo de seguridad local, PI y el contacto de emergencia proporcionado.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});