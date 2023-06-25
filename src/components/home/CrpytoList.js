import {Text, View, Image,StyleSheet,TouchableOpacity} from "react-native";
import React , {useState} from "react";
import styled from "styled-components";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
  padding: 24px 0px;
  background-color: ${(props) => props.theme.mainBgColor};
`

const SubContainer = styled.TouchableOpacity`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 8px 0px;
`

const CrpytoLogo = styled.Image`
  width: 28px;
  height: 28px;
`

const ProductItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding:8px 0px;
`

const ProdcutTextContainer = styled.View`
    margin-left: 12px;
`

const RateTextContainer = styled.View`
    flex-direction: row;
  font-size: 12px;

`
const CryptoList = () => {

    const navigation = useNavigation();


    const [productList, setProectList] = useState([
        {name : '비트코인', symbol :'BTC', minProfit : 7.5 , maxProfit : 12.5, logo : 'https://static.upbit.com/logos/BTC.png'},
        {name : '이더리움', symbol :'ETH' , minProfit : 10.3 , maxProfit : 14.1, logo : 'https://static.upbit.com/logos/ETH.png'},
        {name : '리플', symbol :'XRP' , minProfit : 10.4 , maxProfit : 16.3, logo : 'https://static.upbit.com/logos/XRP.png'},
        {name : '솔라나', symbol :'SOL' , minProfit : 12.9 , maxProfit : 16.5, logo : 'https://static.upbit.com/logos/SOL.png'},
        {name : '비트코인 캐시', symbol :'BCH' , minProfit : 4.5 , maxProfit : 8.5, logo : 'https://static.upbit.com/logos/BCH.png'},
    ]);


    const handleGoInventDetailScreen = () => {
        navigation.navigate("MainStack",{screen:"CryptoInvestScreen"});
    }
    return (
        // <View>
        //     <Text>dd</Text>
        // </View>
        <Container>
            {productList.map((value, index, array) => {
                return(
                    <SubContainer key={index} activeOpacity={0.8} onPress = {handleGoInventDetailScreen}>
                        <ProductItemContainer>
                            <CrpytoLogo source={{uri: value.logo}} resizeMode={'cover'} />
                            <ProdcutTextContainer>
                                <View>
                                    <Text style = {{fontWeight: "bold" ,fontSize : 15, marginBottom:2}} >{value.name}</Text>
                                </View>
                                <RateTextContainer>
                                    <View>
                                        <Text style = {{color : '#737373',fontSize:12}}>예상 수익률</Text>
                                    </View>
                                    <View style = {{marginLeft: 4,flexDirection: 'row'}}>
                                        <Text style = {{color:'#CD2929',fontSize:12}}>{value.minProfit}% ~ </Text>
                                        <Text style = {{color:'#CD2929',fontSize:12}}>{value.maxProfit}%</Text>
                                    </View>
                                </RateTextContainer>
                            </ProdcutTextContainer>
                        </ProductItemContainer>
                        <View>
                            <MaterialCommunityIcons name = "chevron-right" size = {24}/>
                        </View>
                    </SubContainer>
                )
            })}
        </Container>
    )

}

export default CryptoList;
