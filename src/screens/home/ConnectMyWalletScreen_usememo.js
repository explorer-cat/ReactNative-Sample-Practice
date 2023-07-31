import React, {useState, useCallback, useEffect, useMemo} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, Switch, ScrollView} from "react-native";
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

// const [filterData, setFilterData] = useState([]);
// {/*   useMemo ->  {findKRWpair}*/}
//
// useEffect(() => {
//     // 뭔가 오래 걸리는 작업
//     // setFilterData(findKRWpair())
// }, [])

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


const ConnectMyWalletScreen = ({navigation: {navigate}}) => {
    const [number, setNumber] = useState(0);
    const upbitListing = useSelector(state => state.upbitListingCoin);
    const [filterData, setFilterData] = useState([]);

    const getUpbitAllPairsUseMemo = useMemo(() => {
        console.log("reload")
        let result = []
        for (const key in upbitListing.KRW_MARKET) {
                result.push(<View key={upbitListing.KRW_MARKET[key].korean_name.toString()}><Text>{upbitListing.KRW_MARKET[key].korean_name}</Text></View>)
        }
        return result;
    }, [filterData])



    return (
        <Container>
            <TouchableOpacity
                onPress={() => {
                    setNumber(number+1);
                }}
                style = {{height:50,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
                <Text>
                    number = {number}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    setFilterData([]);
                }}
                style = {{height:50,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
                <Text>
                   dfsdfdsf
                </Text>
            </TouchableOpacity>

            <ScrollView>
                <View>
                    {getUpbitAllPairsUseMemo}
                </View>
            </ScrollView>
        </Container>
    )
}


export default ConnectMyWalletScreen;

