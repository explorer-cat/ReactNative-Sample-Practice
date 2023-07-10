import {Text, View, Image, StyleSheet, TouchableOpacity, TouchableHighlight, ScrollView,Animated} from "react-native";
import React, {useEffect, useState,useRef} from "react";
import styled from "styled-components";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import {lightTheme} from "../../../styles/global";
import {getAllUpbitCryptoList} from "../../../exchangeAPI/upbit"
import {useSelector} from "react-redux";

const TableContainer = styled.View`
  //flex:1;
    //background-color: red;
  //height: 1000px;

`

const TableHeaderContainer = styled.View`
  flex-direction: row;
  height: 40px;
  //background-color: yellow;
  padding: 0px 24px;
  align-items: center;
  // background-color: ${(props) => props.theme.buttonBackground};
  //border: 0.3px solid #C9C9C9;
  //border-top:1px solid red;
  
`

const TableSearchContainer = styled.View`
  //background-color: aliceblue;
  height: 40px;
  padding: 0px 24px;
`
// onPress = {handleGoInventDetailScreen}

const TableContentContainer = styled.View`
    //flex-direction: row;
  height: 78px;
  align-items: center;
  //alignItems:'center',height:52,

`

const TableRowContainer = styled.TouchableOpacity`
  flex-direction: row;
  height:60px;
  align-items: center;
  padding:8px 24px;
`

const TableHeaderText = styled.Text`
  font-family: ${(props)=>props.theme.fonts.regular};
  font-size: 13px;
`
const UpbitTable = () => {
    const navigation = useNavigation();
    const upbitListing = useSelector(state => state.upbitListingCoin);
    const [list,setList] = useState([1,2,3,4,5,1,1,1,1,11,1,1,1,2,23,3,1,23,4,1,2,2,1,3,4,2,1,3,2,3]);

    //업비트 전체 자산 정보 가져오기

    const handleGoInventDetailScreen = () => {
        console.log("navigation",navigation)
        navigation.navigate("MainStack", {screen: "CryptoInvestScreen"});
    }

    useEffect(() => {
        console.log(upbitListing)
    },[])


    return (
        <TableContainer>
                <TableHeaderContainer style = {{borderBottomWidth:0.3,borderBottomColor:'#E8E8E8'}}>
                    <View style = {{flex:2}}>
                        <TableHeaderText>가상자산명</TableHeaderText>
                    </View>
                    <View style = {{flex:2,alignItems:'flex-end'}}>
                        <TableHeaderText>현재가</TableHeaderText>
                    </View>
                    <View style = {{flex:2,alignItems:'flex-end'}}>
                        <TableHeaderText>김프</TableHeaderText>
                    </View>
                    <View style = {{flex:2,alignItems:'flex-end'}}>
                        <TableHeaderText>등락률</TableHeaderText>
                    </View>
                    <View style = {{flex:2,alignItems:'flex-end'}}>
                        <TableHeaderText>거래대금</TableHeaderText>
                    </View>
                </TableHeaderContainer>
                <TableContentContainer>
                    {list.map((v,i,a)=>{
                        return(
                            <TableRowContainer activeOpacity = {1}  onPress = {handleGoInventDetailScreen} style = {{borderBottomWidth:0.4,borderBottomColor:'#E8E8E8'}}>
                                <View style = {{height:36, flex:2}}>
                                    <Text style = {{fontSize:12,marginBottom:2,fontFamily:lightTheme.fonts.semibold}}>비트코인</Text>
                                    <Text style = {{fontSize:10,marginTop:2}}>BTC/KRW</Text>
                                </View>
                                <View style = {{flex:2,alignItems:'flex-end',height:36}}>
                                    <Text style = {{fontSize:12,marginBottom:2,fontFamily:lightTheme.fonts.semibold,color:'red'}}>40,200,100</Text>
                                </View>
                                <View style = {{flex:2,alignItems:'flex-end',height:36}}>
                                    <Text style = {{fontSize:12,marginBottom:2,fontFamily:lightTheme.fonts.regular,color:'red'}}>2.72%</Text>
                                </View>
                                <View style = {{flex:2,alignItems:'flex-end',height:36}}>
                                    <Text style = {{fontSize:12,marginBottom:2,fontFamily:lightTheme.fonts.regular,color:'red'}}>1.74%</Text>
                                    <Text style = {{fontSize:12,marginBottom:2,fontFamily:lightTheme.fonts.regular,color:'red'}}>512,200</Text>
                                </View>
                                <View style = {{flex:2,height:36,flexDirection:'row',justifyContent:'flex-end'}}>
                                    <Text style = {{fontSize:13,fontFamily:lightTheme.fonts.regular}}>42</Text>
                                    <Text style = {{fontSize:12,marginLeft:2,marginTop:2,color:'#919191'}}>억</Text>
                                </View>
                            </TableRowContainer>
                        )
                    })}
                </TableContentContainer>
        </TableContainer>
    )

}

export default UpbitTable;
