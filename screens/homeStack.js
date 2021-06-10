import React from 'react';
import Home from './home';


import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default function HomeStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component={Home} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}