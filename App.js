import React, {useState} from 'react';
import {Image, Text, View, SafeAreaView, useColorScheme} from 'react-native';
import Tab from "./src/navigations/BottomTabNav";
import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import MainScreenStack from "./src/navigations/MainScreenStack";
import MainRootNav from "./src/navigations/MainRootNav";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./src/styles/global";


export default function App() {

  const isDark = useColorScheme() === "dark";

  return (

      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <NavigationContainer >
                <MainRootNav />
        </NavigationContainer>
       </ThemeProvider>

  )
}

