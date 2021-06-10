import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Emergency from './emergency';
import Settings from './settings';
import HomeStack from './homeStack';
import ChatStack from './chatStack';

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Inicio') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Chats') {
            iconName = focused ? 'chatbubbles-sharp' : 'chatbubbles-outline';
          } else if (route.name === 'Emergencia') {
            iconName = focused ? 'alert-circle' : 'alert-circle-outline';
          }
          else if (route.name === 'Ajustes') {
            iconName = focused ? 'settings-sharp' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#3880FF',
        inactiveTintColor: 'gray',
      }}

      >
        <Tab.Screen name="Inicio" component={HomeStack} />
        <Tab.Screen name="Chats" component={ChatStack} />
        <Tab.Screen name="Emergencia" component={Emergency} />
        <Tab.Screen name="Ajustes" component={Settings} />

      </Tab.Navigator>
    );
  }