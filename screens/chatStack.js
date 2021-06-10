import React from 'react';
import Chats from './chats';
import Chat from './chat';

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default function ChatStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Chats" component={Chats} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}