import React, {useContext} from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { ThemeContext } from '../context/ThemeContext'
import { globalStylesDark } from '../styles/globalDark'
import { globalStylesLight } from '../styles/globalLight'

export default function Header(){
    const context = useContext(ThemeContext);
    const theme = context.theme.isLight ? globalStylesLight : globalStylesDark;

    return(
        <View style={theme.logoHeader}>
            <Image style={styles.logo}source={require('../assets/logomaybe.png')}/>  
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 60,
        width: 70,
        alignSelf: 'center'
    }
})