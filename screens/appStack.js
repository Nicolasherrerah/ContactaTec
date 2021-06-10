import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNav from './tabNav'
import Chat from './chat';
import Post from './post';


const Stack = createStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={TabNav} options={{headerShown: false}} />
          <Stack.Screen name="Post" component={Post} options={({ route }) => ({ title: route.params.title })}/>
          <Stack.Screen name="Chat" component={Chat}  options={({ route }) => ({ title: route.params.title })}/>
        </Stack.Navigator>
    );
  }