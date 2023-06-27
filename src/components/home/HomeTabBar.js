import * as React from 'react';
import {View, useWindowDimensions, Text, StyleSheet, useColorScheme} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import styled from "styled-components";
import CryptoList from "./CrpytoList";
import StockList from "./StockList";
import {LIGHT_BACKGROUND, DARK_BACKGROUND} from "../../theme/palette";
import CexCategoryTabView from "./CexCategoryTabView";

const TabText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
`


const TitleView = styled.View`
  height: 60px;
  justify-content: center;
  padding: 0px 20px;
  //background-color: red;
`

const renderScene = SceneMap({
    first: CryptoList,
    second: CryptoList,
    third: CryptoList,
});

export default function TabViewExample() {
    const layout = useWindowDimensions();
    const isDark = useColorScheme() === "dark";


    const TAB_MARGIN = 20;
    const renderTabBar = props => (
        <TabBar
            {...props}
            onTabPress={({route, preventDefault}) => {
                if (route.key === 'first') {
                    // alert('dd')
                }
            }}
            // gap={6}
            activeColor={'green'}
            inactiveColor={'blue'}
            pressOpacity={1}
            bounces={true}
            contentContainerStyle={{
                justifyContent: 'center',
            }}
            tabStyle={{
                flex:1,
            }}
            indicatorStyle={{
                // 현재 디바이스 width를 구해서 탭 3개를 나눈다음 좌우 여백 10씩 총 20을 뺀 width로 영역을 잡아주고
                width:(layout.width / 3) - 20,
                // 조절해줌.
                left: 10,
                backgroundColor: isDark ? LIGHT_BACKGROUND : DARK_BACKGROUND,
            }}
            style={{backgroundColor: isDark ? DARK_BACKGROUND : LIGHT_BACKGROUND}}
            renderLabel={({route, focused, color}) => {
                return (
                    <TabText>
                        {route.title}
                    </TabText>
                )
            }}
        />
    );

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: '가상자산'},
        {key: 'second', title: '국내주식'},
        {key: 'third', title: '미국주식'},
    ]);

    return (
        <>
            <TitleView>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>인기 종목</Text>
            </TitleView>
            <TabView
                // 화면에 대해 느린 렌더링을 사용하도록 설정하면 초점이 맞춰질 때 렌더링하는 데 일반적으로 약간의 시간이 걸립니다.사용할 수 있습니다.renderLazyPlaceholder사용자가 이 짧은 기간 동안 볼 수 있는 내용을 사용자 지정할 수 있습니다.
                // lazy={({ route }) => route.name === 'first'} //first 불러올때 약간에 레이지로딩을 해줌.
                animationEnabled={true} //움직이는 슬라이더
                swipeEnabled={false}
                navigationState={{index, routes}}
                renderTabBar={renderTabBar}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{width: layout.width, height: layout.height}}
            />
        </>
    );
}
