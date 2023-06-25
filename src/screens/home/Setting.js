import react,{useState} from "react";
import {View, Text,StyleSheet} from "react-native";
import styled from "styled-components";

const Container  = styled.View`
  flex:  1;
  padding:0 24px;
  background-color: ${(props) => props.theme.mainBgColor};
`

const HeaderTitle = styled.View`
    height: 50px;
  //background-color: red;

`

const LoginContainer = styled.View`
    flex:1;
    flex-direction: row;
    justify-content: space-between;
`


const Setting = ({navigation: {navigate}}) => {
    //사용자 로그인 여부 확인.
    const [isLoggiend, setIsLoggiend] = useState(false);

    return(
        <Container>

        </Container>
    )
}

// const styles = StyleSheet.create({
//     view : {
//         backgroundColor : "white", flex : 1, justifyContent : "center",alignItems:"center"
//     }
// })

export default Setting;

