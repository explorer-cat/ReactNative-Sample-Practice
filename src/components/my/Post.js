import {Text, View, ScrollView, TouchableOpacity} from "react-native";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {lightTheme} from "../../styles/global";
import {useRoute} from '@react-navigation/native';
import DivLine from "../public/DivLine";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.mainBgColor};
`

const TitleContainer = styled.View`
  margin-bottom: 8px;
  padding: 8px 20px;
`

const TitleText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
`

const CreatedText = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.subTextColor}
`

const ContentContainer = styled.ScrollView`
  flex: 1;
  padding: 0px 20px;
  margin-top: 24px;

`
const Post = ({navigation, route}) => {
    const data = route.params.noticeData;

    return (
        <Container>
            <TitleContainer>
                <TitleText>
                    {data.title}
                </TitleText>
                <CreatedText>
                    {data.created}
                </CreatedText>
            </TitleContainer>

            <DivLine height={2}/>

            <ContentContainer>
                <Text>
                    {data.content}
                </Text>
            </ContentContainer>
        </Container>
    )
}

export default Post
