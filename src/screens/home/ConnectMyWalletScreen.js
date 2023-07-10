import React, {useState, useCallback, useEffect, useMemo} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, Switch} from "react-native";
import styled from "styled-components";
import axios from 'axios';
import {useSelector} from "react-redux";

const Container = styled.View`
  //padding : 20px;
  //justify-content: center;
  flex: 1;
  background-color: white;
  //flex-direction: column;
  //align-items: center;
    //background-color: ${(props) => props.theme.mainBgColor};
`


function calculate() {
    return 10;
}


const ConnectMyWalletScreen = ({navigation: {navigate}}) => {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);
    const upbitListing = useSelector(state => state.upbitListingCoin);
    const [filterData, setFilterData] = useState([]);

    // const findKRWpair = useMemo(() => {
    //     let result = []
    //     console.log("findKRWpair()")
    //     for (const key in upbitListing.KRW_MARKET) {
    //         if (upbitListing.KRW_MARKET[key].korean_name.includes('체')) {
    //             result.push(key)
    //         }
    //     }
    //     return result;
    // },[filterData])


    //그냥 함수
    const findKRWpair = () => {
        console.log("findKRWpair()")
        let result = []
        for (const key in upbitListing.KRW_MARKET) {
            if (upbitListing.KRW_MARKET[key].korean_name.includes('이')) {
                result.push(<View key = {upbitListing.KRW_MARKET[key].korean_name.toString()}><Text>{upbitListing.KRW_MARKET[key].korean_name}</Text></View>)
            }
        }
        return result;
    }

    //useMemo를 사용해서 최적화
    // const findKRWpair = useMemo(() => {
    //     console.log("findKRWpair()")
    //     let result = []
    //     for (const key in upbitListing.KRW_MARKET) {
    //         if (upbitListing.KRW_MARKET[key].korean_name.includes('체')) {
    //             result.push(<View key = {upbitListing.KRW_MARKET[key].korean_name.toString()}><Text>{upbitListing.KRW_MARKET[key].korean_name}</Text></View>)
    //         }
    //     }
    //     return result;
    // },[filterData])

    useEffect(() => {
        // 뭔가 오래 걸리는 작업
        // setFilterData(findKRWpair())
    }, [])




    return (
        <Container>
            <View style={{flexDirection: 'row'}}>
                {/*   function ->  {findKRWpair()}*/}
                {findKRWpair()}
            {/*   useMemo ->  {findKRWpair}*/}
            </View>
            <View>
                <TouchableOpacity onPress={() => {
                    setNumber(number + 1)
                }}>
                    <Text>{number}</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}


export default ConnectMyWalletScreen;

