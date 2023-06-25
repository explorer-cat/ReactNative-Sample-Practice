import react from "react";
import {View, Text,StyleSheet} from "react-native";
import styled from "styled-components";

const Container  = styled.View`
  flex:  1;
  justify-content: center;
  align-items: center;
  //background-color: ${(props) => props.theme.mainBgColor};
`


const IndexListScreen = ({navigation: {navigate}}) => {
    return(
        <Container>
            <Text>Setting</Text>
        </Container>
    )
}

// const styles = StyleSheet.create({
//     view : {
//         backgroundColor : "white", flex : 1, justifyContent : "center",alignItems:"center"
//     }
// })

export default IndexListScreen;

