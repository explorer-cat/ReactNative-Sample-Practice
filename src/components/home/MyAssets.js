import {Text, View} from "react-native";
import styled from "styled-components";

//  background-color: ${(props) => props.theme.mainBgColor};
const Container = styled.View`
  padding:24px;
  border-radius: 6px;
`

const MyKRWBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const TitleView = styled.View`
  height: 50px;
`

const MyAssets = () => {
    return (
        <Container>
            <TitleView>
                <Text style={{fontSize: 20,fontWeight : 'bold'}}>총 자산</Text>
            </TitleView>
            <MyKRWBox>
                <View>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>142,890,210</Text>
                </View>
                <View style={{marginLeft: 4}}>
                    <Text style={{fontSize: 14, fontWeight: '500', marginTop: 2}}>원</Text>
                </View>
            </MyKRWBox>
            <View style ={{marginTop : 8}}>
                <Text>어제보다 <Text style = {{color : 'red',fontWeight : '700', fontSize : 15}}>3%</Text> 증가했어요</Text>
            </View>
        </Container>
    )
}

export default MyAssets
