import * as React from 'react';
import {View, useWindowDimensions, Text, StyleSheet, useColorScheme, TouchableOpacity} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import styled from "styled-components";
import CryptoList from "./CrpytoList";
import StockList from "./StockList";
import {LIGHT_BACKGROUND, DARK_BACKGROUND} from "../../theme/palette";
import DivLine from "../public/DivLine";

const TabText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
  //background-color: blue;
`


const TitleView = styled.View`
  height: 50px;
`

const renderScene = SceneMap({
    first: CryptoList,
    second: StockList,
    third: CryptoList,
    favorite: StockList,
});

export default function CexCategoryTabView() {

    const layout = useWindowDimensions();
    const isDark = useColorScheme() === "dark";
    const renderTabBar = props => (
        <TabBar
            {...props}
            onTabPress={({route, preventDefault}) => {
                if (route.key === 'first') {
                    // alert('dd')
                }
            }}
            pressOpacity={1}
            bounces={true}
            pressColor={'blue'}
            indicatorStyle={{backgroundColor: isDark ? LIGHT_BACKGROUND : DARK_BACKGROUND, height: 0}}
            // style={styles.tabBar}
            style={{marginTop: 30, width: 310, backgroundColor: isDark ? DARK_BACKGROUND : LIGHT_BACKGROUND}}
            renderLabel={({route, focused, color}) => {
                return (
                    // <TouchableOpacity
                    //     style={styles.tabItem}>
                    //     <View>
                    //         <TabText>ddd</TabText>
                    //     </View>
                    //     // onPress={() => this.setState({ index: i })}>
                    //     // {/*<Animated.Text style={{ opacity : 1 }}>{route.title}</Animated.Text>*/}
                    // </TouchableOpacity>
                    // <View>
                    <>
                        <TabText style={{
                            textAlign: 'center',
                            padding: 8,
                            marginTop: -20,
                            marginLeft: -35,
                            marginRight: -34,
                            marginBottom: -24,
                            fontSize: 12,
                            borderWidth: 1,
                            borderColor: '#C9C9C9',
                            // borderRadius: 6
                        }}>
                            {/*<TabText style = {{fontSize:12 , borderWidth : 1,borderColor : 'red',padding : 4 ,borderRadius:6}}>*/}
                            {route.title}
                        </TabText>
                    </>
                )
            }}
        />
    );

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: '업비트'},
        {key: 'second', title: '빗썸'},
        {key: 'third', title: '코인원'},
        {key: 'favorite', title: '즐겨찾기'},
    ]);

    return (
        <>
            {/*<TitleView>*/}
            {/*    <Text style={{fontSize: 20,fontWeight : 'bold'}}>🔥 인기 종목</Text>*/}
            {/*</TitleView>*/}
            <TabView
                // 화면에 대해 느린 렌더링을 사용하도록 설정하면 초점이 맞춰질 때 렌더링하는 데 일반적으로 약간의 시간이 걸립니다.사용할 수 있습니다.renderLazyPlaceholder사용자가 이 짧은 기간 동안 볼 수 있는 내용을 사용자 지정할 수 있습니다.
                // lazy={({ route }) => route.name === 'first'} //first 불러올때 약간에 레이지로딩을 해줌.
                animationEnabled={false} //움직이는 슬라이더
                navigationState={{index, routes}}
                renderTabBar={renderTabBar}
                renderScene={renderScene}
                onIndexChange={setIndex}
                // initialLayout={{width: layout.width,height:layout.height}}
            />
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
        width: 300,
        paddingTop: 20,
    },
    tabItem: {
        flex: 1,
        width: 30,
        alignItems: 'center',
        // backgroundColor : 'red',
        borderWidth: 1,
        padding: 16,
    },
});

