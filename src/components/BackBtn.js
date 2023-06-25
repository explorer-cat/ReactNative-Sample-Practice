import {MaterialCommunityIcons} from '@expo/vector-icons';
import {View, Text, TouchableOpacity, SafeAreaView} from "react-native";
import styled from "styled-components";


const BackHeaderContainer = styled.View`
  justify-content: center;
  //height: 40px;
  padding: 0px 20px;
  background-color: ${(props) => props.theme.mainBgColor};
`

function BackBtn({navigation}) {

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        // <SafeAreaView>
        //      <BackHeaderContainer>
                <MaterialCommunityIcons onPress={handleGoBack} name="arrow-left" size={28}/>
        //      </BackHeaderContainer>
        // </SafeAreaView>
    );
}

export default BackBtn
