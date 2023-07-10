import React, { useRef, useEffect } from 'react';
import {View, useWindowDimensions, Text, StyleSheet, useColorScheme,Animated} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import styled from "styled-components";
import CryptoList from "./CrpytoList";
import StockList from "./StockList";
import {LIGHT_BACKGROUND, DARK_BACKGROUND, LIGHT_INACTIVE} from "../../theme/palette";
import {DarkTheme} from "@react-navigation/native";
import {darkTheme, lightTheme} from "../../styles/global";
import UpbitTable from "./crpytoTable/UpbitTable";


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


export default function CryptoListTabBar() {
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
