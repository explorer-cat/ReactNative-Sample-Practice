import React, {useState,useEffect} from 'react';
import {Image, Text, View, SafeAreaView, useColorScheme} from 'react-native';
import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import MainRootNav from "./src/navigations/MainRootNav";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./src/styles/global";
import * as Font from "expo-font";
import {loadUpbitListingInfo} from "./src/exchangeAPI/upbit";
import {createTwoButtonAlert,createOneButtonAlert} from "./src/components/alert/PublicAlert";
import {Provider, useDispatch, useSelector} from 'react-redux'
import store from './src/modules/store/store';

export default function App() {

    const isDark = useColorScheme() === "dark";
    const [loading,setLoading] = useState(false);
    const fetchFonts = () => {
        return new Promise((resolve,reject) => {
            const font = Font.loadAsync({
                // Pretendard: require("./assets/fonts/PretendardVariable.ttf"),
                "Pretendard-Light": require("./assets/fonts/Pretendard-Light.otf"),
                "Pretendard-Black": require("./assets/fonts/Pretendard-Black.otf"),
                "Pretendard-Bold": require("./assets/fonts/Pretendard-Bold.otf"),
                "Pretendard-ExtraBold": require("./assets/fonts/Pretendard-ExtraBold.otf"),
                "Pretendard-Thin": require("./assets/fonts/Pretendard-Thin.otf"),
                "Pretendard-ExtraLight": require("./assets/fonts/Pretendard-ExtraLight.otf"),
                "Pretendard-SemiBold": require("./assets/fonts/Pretendard-SemiBold.otf"),
                "Pretendard-Regular": require("./assets/fonts/Pretendard-Regular.otf"),
                "Pretendard-Medium": require("./assets/fonts/Pretendard-Medium.otf"),
            })
            if(font) {
                resolve(true)
            }
        })
    };

    const connectUpbitSocketAPI = () => {
        return new Promise((resolve) => {
            resolve(true)
        })
    }

    const connectBithumbSocketAPI = () => {
        return new Promise((resolve) => {
            resolve(true)
        })
    }


    // 앱 실행시 한 번 만 불러옵니다.
    // preload 가 완료되면 스플래시 화면이 꺼지도록 설정
    useEffect(()=> {
        fetchFonts().then((result)=> {
            setLoading(true)
        })
    }, []);


    if(loading) {
        return (
            <Provider store={store}>
                <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                    <NavigationContainer >
                            <MainRootNav />
                    </NavigationContainer>
                </ThemeProvider>
            </Provider>
           )
    } else {
        return (
            <View></View>
        )
    }


}

