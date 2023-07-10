import react, {useRef, useState, useEffect} from "react";
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, useColorScheme} from "react-native";
import styled from "styled-components";
import MyAssets from "../../components/home/MyAssets";
import DivLine from "../../components/public/DivLine";
import React from "react";
import {loadUpbitListingInfo} from "../../exchangeAPI/upbit";
import {Provider, useDispatch, useSelector} from 'react-redux'
import {updateUpbitListing} from '../../modules/actions/actions'
import HomeTabView from "../../components/home/HomeTabBar";

const LoaderView = styled.View`
  flex: 1;
  flex-direction: column;
`


const Home = ({navigation}) => {
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const upbitListing = useSelector(state => state.upbitListingCoin);

    const isDark = useColorScheme() === "dark";


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


    return loading ? (
            <LoaderView>
                <Text>로딩중1</Text>
            </LoaderView>
        ) :
        <ScrollView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <MyAssets/>
            </View>
            <DivLine height={8}/>
            <View style={{flex: 1}}>
                <HomeTabView/>
            </View>
        </ScrollView>


}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});


export default Home;


