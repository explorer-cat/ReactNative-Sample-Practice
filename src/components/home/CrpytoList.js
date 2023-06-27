import {Text, View, Image, StyleSheet, TouchableHighlight} from "react-native";
import React, {useState} from "react";
import styled from "styled-components";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import {LIGHT_BUTTON_ACTIVE, LIGHT_INACTIVE} from "../../theme/palette";
import DivLine from "../public/DivLine";
import CexCategoryTabView from "./CexCategoryTabView";
import MainIndex from "./MainIndex";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.mainBgColor};
  flex-direction: column;
  padding:20px;
`

const SubContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 8px 0px;
`

const CrpytoLogo = styled.Image`
  width: 20px;
  height: 20px;
`

const ProductItemContainer = styled.View`
  flex: 4;
  flex-direction: row;
  height: 48px;
  align-items: center;
`

const ProdcutTextContainer = styled.View`
  margin-left: 12px;
  flex: 2;
`

const RateTextContainer = styled.View`
  flex-direction: row;
  margin-top: 4px;
  font-size: 12px;
`

const TableColumeView = styled.View`
  height: 36px;
  //flex: 2;
`

const CexCategoryContainer = styled.View`
  flex-direction: row;
`

const CexCategoryButton = styled.View`

`
const CryptoList = () => {

    const navigation = useNavigation();


    const [productList, setProectList] = useState([
        {
            name: '비트코인',
            price: 32210000,
            prevPrice: 223000,
            updown: 'up',
            symbol: 'BTC',
            percent: 7.5,
            volume: 2030,
            logo: 'https://static.upbit.com/logos/BTC.png'
        },
        {
            name: '이더리움',
            price: 2468000,
            prevPrice: 2400,
            updown: 'up',
            symbol: 'ETH',
            percent: 10.3,
            volume: 421,
            logo: 'https://static.upbit.com/logos/ETH.png'
        },
        {
            name: '리플',
            price: 652,
            updown: 'down',
            prevPrice: 23,
            symbol: 'XRP',
            percent: 10.4,
            volume: 390,
            logo: 'https://static.upbit.com/logos/XRP.png'
        },
        {
            name: '솔라나',
            price: 22300,
            prevPrice: 4500,
            updown: 'down',
            symbol: 'SOL',
            percent: 12.9,
            volume: 289,
            logo: 'https://static.upbit.com/logos/SOL.png'
        },
        {
            name: '비트코인 캐시',
            price: 29200,
            prevPrice: 1400,
            updown: 'up',
            symbol: 'BCH',
            percent: 4.5,
            volume: 4290,
            logo: 'https://static.upbit.com/logos/BCH.png'
        },
    ]);


    const handleGoInventDetailScreen = () => {
        navigation.navigate("MainStack", {screen: "CryptoInvestScreen"});
    }
    return (
        // <View>
        //     <Text>dd</Text>
        // </View>
        <Container>
            <View>
                <MainIndex />
            </View>
            <View>
                <Text style = {{fontSize:16,fontWeight:'bold',marginBottom:24}}>실시간 차트</Text>
            {
                productList.map((value, index, array) => {
                    return (
                        <>
                            <TouchableHighlight key={index}
                                                activeOpacity={1}
                                                underlayColor="#FFFFFF"
                                                onPress={handleGoInventDetailScreen}>
                                <SubContainer>
                                    <ProductItemContainer>

                                        <View style={{justifyContent: 'center'}}>
                                            <CrpytoLogo source={{uri: value.logo}} resizeMode={'cover'}/>
                                        </View>

                                        <ProdcutTextContainer>
                                            <View>
                                                <Text style={{
                                                    fontWeight: "bold",
                                                    fontSize: 14,
                                                    marginBottom: 2
                                                }}>{value.name}</Text>
                                            </View>
                                            <RateTextContainer>
                                                <View>
                                                    <Text style={{color: '#737373', fontSize: 14}}>{value.symbol}</Text>
                                                </View>
                                            </RateTextContainer>
                                        </ProdcutTextContainer>

                                        <TableColumeView>
                                            <Text style={{
                                                textAlign: 'right',
                                                fontSize: 14,
                                                color: value.updown === 'up' ? 'red' : 'blue'
                                            }}>{value.price.toLocaleString()}</Text>
                                        </TableColumeView>

                                        <TableColumeView>
                                            <Text style={{
                                                textAlign: 'right',
                                                fontSize: 14,
                                                color: value.updown === 'up' ? 'red' : 'blue'
                                            }}>{value.percent}%</Text>
                                            <Text style={{
                                                textAlign: 'right',
                                                fontSize: 12,
                                                color: value.updown === 'up' ? 'red' : 'blue',
                                                marginTop: 4
                                            }}>{value.prevPrice.toLocaleString()}</Text>
                                        </TableColumeView>
                                        <TableColumeView>
                                            <Text style={{
                                                fontSize: 13,
                                                textAlign: 'right'
                                            }}>{value.volume.toLocaleString()}억</Text>
                                        </TableColumeView>

                                    </ProductItemContainer>
                                </SubContainer>
                            </TouchableHighlight>
                            <DivLine height={1}/>
                        </>
                    )
                })}
            </View>
        </Container>
    )

}

export default CryptoList;


