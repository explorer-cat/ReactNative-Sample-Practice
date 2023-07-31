import react, {useRef, useState, useEffect, useCallback} from "react";
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, useColorScheme} from "react-native";
import styled from "styled-components";
import MyAssets from "../../components/home/MyAssets";
import DivLine from "../../components/public/DivLine";
import React from "react";
import {loadUpbitListingInfo} from "../../exchangeAPI/upbit";
import {Provider, useDispatch, useSelector} from 'react-redux'
import {updateUpbitListing} from '../../modules/actions/actions'
import {Tabs, MaterialTabBar} from 'react-native-collapsible-tab-view'
import HomeTabView from "../../components/home/HomeTabBar";
import CryptoList from "../../components/home/CrpytoList";
import {globalStyles} from "../../styles/global";
import {Dimensions} from 'react-native';
import My from "./My";
import {Container} from "react-native-collapsible-tab-view/src/Container";
import CryptoListTabBar from "../../components/home/CryptoListTabBar";

const LoaderView = styled.View`
  flex: 1;
  flex-direction: column;
`

// const HEADER_HEIGHT = 250


const Home = ({navigation}) => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const upbitListing = useSelector(state => state.upbitListingCoin);
    const isDark = useColorScheme() === "dark";


    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


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
    useEffect(() => {
        Promise.all([loadUpbitListingInfo(), connectUpbitSocketAPI(), connectBithumbSocketAPI]).then((values) => {
            let loadComplete = true;

            //업비트 리스팅 정보 store에 저장
            dispatch(updateUpbitListing(values[0]))

            setLoading(false)

        })
    }, []);

    const DATA = [0, 1, 2, 3, 4]
    const identity = (v) => v + ''


    const renderItem = React.useCallback(({index}) => {
        return (
            <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]}/>
        )
    }, [])

    const [navigationState, setNavigationState] = useState([]);

    return loading ? (
            <LoaderView>
                <Text>로딩중1</Text>
            </LoaderView>
        ) :
        <Tabs.Container
            renderHeader={MyAssets}
            headerHeight={50} // optional
        >
            <Tabs.Tab name="A">
                <Tabs.ScrollView>
                    <CryptoListTabBar/>
                </Tabs.ScrollView>
            </Tabs.Tab>
            <Tabs.Tab name="B">
                <Tabs.ScrollView>
                    <View style={[styles.box, styles.boxA]}/>
                    <View style={[styles.box, styles.boxB]}/>
                </Tabs.ScrollView>
            </Tabs.Tab>
        </Tabs.Container>
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
    box: {
        height: 250,
        width: '100%',
    },
    boxA: {
        backgroundColor: 'white',
    },
    boxB: {
        backgroundColor: '#D8D8D8',
    },
    header: {
        // height: HEADER_HEIGHT,
        width: '100%',
        backgroundColor: '#2196f3',
    },
    topContainer: {
        position: 'absolute',
        zIndex: 100,
        width: '100%',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
});


export default Home;


