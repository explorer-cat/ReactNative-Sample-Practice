import {MaterialCommunityIcons} from '@expo/vector-icons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Image, SafeAreaView, Text} from "react-native";
import {DARK_INACTIVE, LIGHT_ACTIVE} from "../../theme/palette";

import styled from "styled-components";

const HeaderContainer = styled.View`
  //flex-direction: row;
  justify-content: space-between;
  padding: 0px 12px 0px 12px;
  background-color : white;
  hegiht: 100px;
`

const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const LogoContainer = styled.View`
  flex-direction: row;
  align-content: center;
  justify-content: center;
`
const LogoImage = styled.Image`
  width: 52px;
  height: 52px;
`

function HomeHeader({isDark, focused, color, navigation}) {
    let imagePath = require('../../../assets/Logo.png');

    return (
        <HeaderContainer>
            <SafeAreaView>
                <HeaderView>
                    <LogoContainer>
                        <LogoImage
                            // style
                            source={require('../../../assets/Logo.png')}
                        />
                    </LogoContainer>
                    <View>
                        <MaterialCommunityIcons
                            style={{marginTop: 8, marginRight: 4}}
                            onPress={() => {
                                navigation.navigate("MainStack", {screen: "SettingScreen"})
                                // navigation.navigate("SettingScreen");
                            }}
                            name="cog-outline" color={isDark ? DARK_INACTIVE : LIGHT_ACTIVE} size={28}
                        />
                    </View>
                </HeaderView>
            </SafeAreaView>
        </HeaderContainer>
    );
}

export default HomeHeader
