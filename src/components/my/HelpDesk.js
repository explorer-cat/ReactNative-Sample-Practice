import {Text, View} from "react-native";
import styled from "styled-components";

//  background-color: ${(props) => props.theme.mainBgColor};
const Container = styled.View`
  flex:1;
  padding:24px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.mainBgColor};
`

const MyKRWBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const TitleView = styled.View`
  height: 50px;
`

const HelpDesk = () => {
    return (
        <Container>
            <TitleView>
                <Text style={{fontSize: 20,fontWeight : 'bold'}}>고객센터</Text>
            </TitleView>
        </Container>
    )
}

export default HelpDesk
