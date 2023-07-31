import React, { useRef, useEffect } from 'react';
import {View, useWindowDimensions, Text, StyleSheet, useColorScheme,Animated,ScrollView} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import styled from "styled-components";
import CryptoList from "./CrpytoList";
import StockList from "./StockList";
import {LIGHT_BACKGROUND, DARK_BACKGROUND, LIGHT_INACTIVE} from "../../theme/palette";
import {DarkTheme} from "@react-navigation/native";
import {darkTheme, lightTheme} from "../../styles/global";
import UpbitTable from "./crpytoTable/UpbitTable";
import Home from "../../screens/home/Home";
import {Tabs, MaterialTabBar} from 'react-native-collapsible-tab-view'

const test = ()=> {
    return (<View>

    </View>)
}

const renderScene = SceneMap({
    first: UpbitTable,
    second: test,
    third: test,
    four: test,
    five: test,
});


const CryptoListTabBar = () => {
    const layout = useWindowDimensions();
    const isDark = useColorScheme() === "dark";


    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: '급상승'},
        {key: 'second', title: '업비트'},
        {key: 'third', title: '빗썸'},
        {key: 'four', title: '해외'},
        {key: 'five', title: '관심'},
    ]);

    const renderTabBar = props => {

        return (
            // <View style={styles.tabBar}>
                <TabBar
                    {...props}


                    inactiveColor={LIGHT_INACTIVE}
                    activeColor={'#48BAFB'}
                    pressOpacity={1}
                    onTabPress={({route, preventDefault}) => {
                        if (route.key === 'home') {
                            preventDefault();
                        }
                    }}
                    labelStyle={{
                        fontFamily: lightTheme.fonts.semibold,
                        fontSize: 14
                    }}
                    tabStyle ={{width: 'auto'}}
                    bounces = {true}
                    indicatorStyle={{
                        height: 2,
                        backgroundColor: 'white ',
                    }}
                    style={{paddingLeft:12,backgroundColor: isDark ? DARK_BACKGROUND : LIGHT_BACKGROUND}}
                />
            // </View>

        );
    }

    return (
            <TabView
                style={styles.tabView}
                swipeEnabled = {true}
                animationEnabled={true}
                renderTabBar={renderTabBar}
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{width: layout.width}}
            />
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height:2000,
    },
    tabBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 50, // 이 높이는 원하는대로 조절해주세요.
        backgroundColor: 'white', // 탭 바의 배경색을 원하는 색상으로 변경하세요.
        flexDirection: 'row', // 탭을 가로로 정렬합니다.
        justifyContent: 'space-around', // 탭들을 좌우로 균등하게 분할합니다.
        alignItems: 'center', // 탭들을 수직으로 중앙에 정렬합니다.
        elevation: 8, // Android의 경우 탭 바에 그림자 효과를 추가합니다.
    },
    tabView: {
        flex: 1,
        height:2000,
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
});
export default CryptoListTabBar;
