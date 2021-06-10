import React, {useState} from 'react';
import ThemeContextProvider from './context/ThemeContext';
import Main from './screens/main'
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSansJP_100Thin,
  NotoSansJP_300Light,
  NotoSansJP_400Regular,
  NotoSansJP_500Medium,
  NotoSansJP_700Bold,
  NotoSansJP_900Black,
} from '@expo-google-fonts/noto-sans-jp';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSansJP_100Thin,
    NotoSansJP_300Light,
    NotoSansJP_400Regular,
    NotoSansJP_500Medium,
    NotoSansJP_700Bold,
    NotoSansJP_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else{
    return(
      <ThemeContextProvider>
        <Main/>
      </ThemeContextProvider>
    );
  }  
}
