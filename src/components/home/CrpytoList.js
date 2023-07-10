import {Text, View, Animated, Image, StyleSheet, TouchableHighlight, ScrollView} from "react-native";
import React, {useState,useRef} from "react";
import styled from "styled-components";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import {LIGHT_BUTTON_ACTIVE, LIGHT_INACTIVE} from "../../theme/palette";
import DivLine from "../public/DivLine";
import MainIndex from "./MainIndex";
import {lightTheme} from "../../styles/global";
import TabViewExample from "./HomeTabBar";
import CryptoListTabBar from "./CryptoListTabBar";
import MyAssets from "./MyAssets";
import HomeTabView from "./HomeTabBar";

const Container = styled.View`
  height: 1000px;
  //background-color: red;
  background-color: ${(props) => props.theme.mainBgColor};
  flex-direction: column;
`
const CryptoList = () => {

    return (
        <Container>
            <View style = {{padding:25}}>
                <MainIndex />
            </View>
            <DivLine height={8} />
            <View style={{ flex: 1 }}>
                <CryptoListTabBar />
                {/*<Example />*/}
            </View>
        </Container>
        // </View>
    )

}

export default CryptoList;


