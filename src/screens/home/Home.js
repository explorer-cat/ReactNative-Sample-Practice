import react, {useRef, useState, useEffect} from "react";
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import {globalStyles} from "../../styles/global";
import styled from "styled-components";
import MyAssets from "../../components/home/MyAssets";
// import CoinList from "../../components/home/CoinInvenstList";
import My from "./My";
import DivLine from "../../components/public/DivLine";
import TabViewExample from "../../components/home/HomeTabBar";
import MainIndex from "../../components/home/MainIndex";
import IndexLineChart from "../../components/chart/IndexLineChart";
import React from "react";


const LoaderView = styled.View`
  flex: 1;
  flex-direction: column;
`

const MyAssetsContainer = styled.ScrollView`
  flex: 1;
  padding: 2px;
`


const Container = styled.ScrollView`

`


const Home = ({navigation}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 100)
    })



    return loading ? (
            <LoaderView>
                <Text>ㄹㅗ딩중</Text>
                {/*<ActivityIndicator/>*/}
            </LoaderView>
        ) :
        <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>

                <View style={{flex: 1}}>
                    <MyAssets/>
                </View>
                <DivLine height = {8}/>
                <View style={{height:1000}}>
                    <TabViewExample />
                </View>
            </ScrollView>
        </View>


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


