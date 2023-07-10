import {Text, View, Image, TouchableHighlight} from "react-native";
import styled from "styled-components";
import {lightTheme} from "../../styles/global";
import MainIndex from "./MainIndex";
import HomeTabView from "./HomeTabBar";
import {useNavigation} from "@react-navigation/native";

//  background-color: ${(props) => props.theme.mainBgColor};
const Container = styled.View`
  padding: 24px;
  border-radius: 6px;
`

const MyKRWBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid red;
`

const TitleView = styled.View`
  margin-top: 12px;
  height: 50px;

`

const ConnectWalletContainer = styled.View`
  background-color: #F3F3F3;
  height: 180px;
  border-radius: 12px;
  flex-direction: column;
  align-items: center;
  padding: 18px;
`

const GoCreateMyDateButtonView = styled.View`
  //margin-top:24px;
  //width: 120px;
  //height: 40px;
  //border: 1px solid red;
  //align-items: center;
  //justify-content: center;
  //justify-items: c;
  //justify-content: center;
  //border-radius: 8px;
  //background-color: #48BAFB;
`
const MyAssets = () => {

    const navigation = useNavigation();

    return (
        <Container>
            <TitleView>
                <Text style={{fontSize: 20, fontFamily: lightTheme.fonts.bold}}>큐비트</Text>
            </TitleView>
            <ConnectWalletContainer>
                <View>
                    <Image style={{width: 42, height: 42}} source={require('../../../assets/free-wallet.png')}></Image>
                </View>
                <View style={{marginTop: 18}}>
                    <Text style={{fontSize: 16, fontFamily: lightTheme.fonts.semibold}}>나의 금융자산을 등록</Text>
                </View>

                <View style={{marginTop: 24}}>
                    <TouchableHighlight
                        underlayColor="#1B97DF"
                        activeOpacity={1}
                        style={{
                            backgroundColor: '#48BAFB',
                            height: 42,
                            width: 120,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius:8,
                        }}
                        onPress={() =>  navigation.navigate("MainStack", {screen: "ConnectMyWalletScreen"})}
                    >
                        <GoCreateMyDateButtonView>
                            <Text style={{color: 'white', fontFamily: lightTheme.fonts.bold}}>등록 하러가기</Text>
                        </GoCreateMyDateButtonView>
                    </TouchableHighlight>
                </View>
            </ConnectWalletContainer>
            {/*<HomeTabView />*/}
        </Container>
    )
}

export default MyAssets
