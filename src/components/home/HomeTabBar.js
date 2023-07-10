import React, { useRef, useEffect } from 'react';
import {View, useWindowDimensions, Text, StyleSheet, useColorScheme, ScrollView,Animated} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import styled from "styled-components";
import CryptoList from "./CrpytoList";
import StockList from "./StockList";
import {LIGHT_BACKGROUND, DARK_BACKGROUND, LIGHT_INACTIVE} from "../../theme/palette";
import {DarkTheme} from "@react-navigation/native";
import {darkTheme, lightTheme} from "../../styles/global";



const SecondRoute = () => (
    <View style={styles.sceneContainer}>
        <Text>두 번째 탭</Text>
    </View>
);

const ThirdRoute = () => (
    <View style={styles.sceneContainer}>
        <Text>세 번째 탭</Text>
    </View>
);

const renderScene = SceneMap({
    first: CryptoList,
    second: SecondRoute,
    third: ThirdRoute,
});


export default function HomeTabView() {
    const layout = useWindowDimensions();
    const isDark = useColorScheme() === "dark";


    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: '가상자산'},
        {key: 'second', title: '국내주식'},
        {key: 'third', title: '해외주식'},
    ]);



    const renderTabBar = props => (
        <TabBar
            {...props}
            inactiveColor={LIGHT_INACTIVE}
            activeColor={DARK_BACKGROUND}
            pressOpacity={1}
            labelStyle={{fontFamily: lightTheme.fonts.semibold, fontSize: 16}}
            indicatorStyle={{
                // 현재 디바이스 width를 구해서 탭 3개를 나눈다음 좌우 여백 10씩 총 20을 뺀 width로 영역을 잡아주고
                width: (layout.width / 3) - 40,
                // 조절해줌.
                left: 20,
                height: 2,
                backgroundColor: isDark ? LIGHT_BACKGROUND : DARK_BACKGROUND,
            }}
            style={{backgroundColor: isDark ? DARK_BACKGROUND : LIGHT_BACKGROUND}}
        />
    );

    return (
        <View style={styles.container}>
            <TabView
                style={styles.tabView}
                swipeEnabled={false}
                animationEnabled={false}
                renderTabBar={renderTabBar}
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{width: layout.width}}
            />
         </View>

    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:6000
    },
    tabView: {
        flex: 1,
    },
    tabViewContent: {
        flex: 1,
    },
    tabContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    sceneContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
