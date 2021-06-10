import React, {useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext'
import LogIn from './logIn';
import AppStack from './appStack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

export default function Main() {
  const context = useContext(ThemeContext);
  const theme = context.theme.isLight ? DefaultTheme : DarkTheme;
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator>
                <Stack.Screen name="LogIn" component={LogIn} options={{headerShown: false}} />
                <Stack.Screen name="Main" component={AppStack} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer> 
    );
}