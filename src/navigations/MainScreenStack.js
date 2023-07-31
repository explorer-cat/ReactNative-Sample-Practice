// import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Button, Image, useColorScheme} from "react-native";
import {
    DARK_ACTIVE,
    DARK_BACKGROUND,
    DARK_INACTIVE,
    LIGHT_ACTIVE,
    LIGHT_BACKGROUND,
    LIGHT_INACTIVE
} from "../theme/palette";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import HomeHeader from "../components/header/HomeHeader";
import Setting from "../screens/home/Setting";
import Home from "../screens/home/Home";
import Movies from "../screens/home/Movies";
import CryptoInvest from "../screens/home/CryptoInvest";
import BackBtn from "../components/BackBtn";
import {darkTheme, lightTheme} from "../styles/global";
import styled from "styled-components";
import IndexListScreen from "../screens/home/IndexListScreen";
import ConnectMyWalletScreen from "../screens/home/ConnectMyWalletScreen";
import TestScreen from "../screens/home/TestScreen";
// import { createStackNavigator } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

function MainScreenStack({navigation: {navigate}}) {
    const isDark = useColorScheme() === "dark";

    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerMode: 'screen',
                headerShadowVisible : false, //헤더 border
            }}>
            {/*코인 투자 및 정보 관련 제공*/}
            <Stack.Screen name="CryptoInvestScreen"
                          options={({navigation}) => ({
                              title: '비트코인',
                              headerLeft : () => {
                                  return (<BackBtn navigation={navigation}/>)
                              }
                          })}
                          component={CryptoInvest}/>
            <Stack.Screen name = "IndexListScreen"
                          options={({route, navigation, back}) => ({
                              title: '주요 지수',
                              headerBackTitle: '주요 지수',
                              headerLeft : () => {
                                  return (<BackBtn navigation={navigation}/>)
                              }
                          })}
                          component={IndexListScreen}/>
            <Stack.Screen name = "ConnectMyWalletScreen"
                          options={({route, navigation, back}) => ({
                              title: '샘플',
                              headerBackTitle: '샘플',
                              headerLeft : () => {
                                  return (<BackBtn navigation={navigation}/>)
                              }
                          })}
                          component={ConnectMyWalletScreen}/>
            <Stack.Screen name="SettingScreen"
                          options={({route, navigation, back}) => ({
                              title: '설정',
                              headerBackTitle: '설정',
                              headerLeft : () => {
                                  return (<BackBtn navigation={navigation}/>)
                              }
                          })}
                          component={Setting}/>
        </Stack.Navigator>

    );
}


export default MainScreenStack;
