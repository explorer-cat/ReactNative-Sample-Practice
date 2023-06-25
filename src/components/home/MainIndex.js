import {Text, View, Image, StyleSheet, TouchableOpacity, Button, Platform} from "react-native";
import React, {useState} from "react";
import styled from "styled-components";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import IndexChart from "./IndexChart";
import {DARK_INACTIVE, LIGHT_ACTIVE, LIGHT_BACKGROUND, LIGHT_INACTIVE} from "../../theme/palette";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 20px 0px 20px 24px;
`

const TitleView = styled.View`
  //display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 16px;
`

const AllIndexBtn = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  margin-right: 15px;
`

const AllIndexBtnImg = styled.View`
  ${Platform.OS === 'android' && 'margin-top: 4px;'}
`

const IndexContainer = styled.ScrollView`
  flex-direction: row;
`
const MainIndex = () => {

    const navigation = useNavigation();
    const [indexList, setIndexList] = useState([
        {name : '코스피',point : 2444.42, rate : -0.11, data: [30,25,33,21,46,23,24,22,24,26,27,21,35,25,32,25,24,20,24,22,24,26,27,21,22,24]},
        {name : '코스닥',point : 782.42, rate : -2.52, data: [3,5,3,1,6,5,2,5,4,10,4,2,4,6,7,1,2,4,3,5,5,2,5,4,10,4,2,4,6,7,1,2,4]},
        {name : '환율',point : 1283.42, rate : -0.22, data: [4,5,3,1,4,5,6,3,2,3,4,3,5,3,1,4,2,5,6,3,5,3,3,6,3,5]},
        {name : '나스닥',point : 14520.42, rate : -0.84, data: [2,5,3,4,2,3,5,3,2,4,1,6,2,2,5,6,3,5,3,2,4,1,6,2,2]},
        {name : 'S&P500',point : 4022.42, rate : -0.12, data: [1,4,5,3,1,4,5,5,3,3,4,1,6,2,2,5,4]},
        ]
    )

    return (
        <Container>
            <TitleView>
                <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>주요 지수</Text>
                </View>
                <View>
                    <AllIndexBtn onPress = {() => {navigation.navigate("MainStack", {screen : "IndexListScreen"})}}>
                        <View>
                            <Text style={{fontSize: 15, color:DARK_INACTIVE , marginRight : 4}}>전체 보기</Text>
                        </View>
                        <AllIndexBtnImg>
                            <MaterialCommunityIcons
                                // style = {{${Platform.OS === 'android' && 'margin-top: 4px'}}}
                                name = "chevron-right"
                                size = {20}
                                color = {DARK_INACTIVE}/>
                        </AllIndexBtnImg>
                    </AllIndexBtn>
                </View>
            </TitleView>
            <IndexContainer horizontal={true} //가로 세로 여부
                            showsHorizontalScrollIndicator={false} //수평 표시기 보여줌여부
                            onMomentumScrollEnd={
                                () => {
                                    console.log('스크롤 끝까지 됐음. 여기서 더 보여 주고싶은경우 처리하셈')
                                }
                            }>
                {indexList.map((value, index, array) => {
                    return (
                        <IndexChart key = {index} indexData = {value}/>
                    )
                })}
            </IndexContainer>

        </Container>
    )

}


export default MainIndex;
