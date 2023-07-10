import {Text, View, ScrollView, TouchableOpacity} from "react-native";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {lightTheme} from "../../styles/global";

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.mainBgColor};
`

const PostContainer = styled.TouchableOpacity`
  flex-direction: row;
  height: 80px;
  padding: 10px 20px 10px 20px;
  justify-content: space-between;
  margin-bottom: 4px;
  align-items: center;
`

const PostTitleContainer = styled.View`
  width: 90%;
`

const PostTitleText = styled.Text`
  font-size: 14px;
  margin: 4px;
  font-family: ${(props) => props.theme.fonts.regular};
`

const PostDateText = styled.Text`
  font-size: 12px;
  margin: 4px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.moreViewButton};

`
const BoardList = ({navigation}) => {
    const [postList, setPostList] = useState([]);
    //현재 게시판의 카테고리가 무엇인지, 이벤트 인지 공지사항인지.

    const getCurrentScreenName = () => {
        const {routes, index} = navigation.getState();
        const currentRoute = routes[index];
        return currentRoute.name;
    };


    const screenName = getCurrentScreenName();


    useEffect(() => {
        if (screenName === "NoticeScreen") {
            setPostList([
                {
                    title: '[점검] 2023년 6월 24일 정기 점검 안내',
                    content: '정기 점검을 실시합니다. 감사합니다.',
                    created: '2023.06.24'
                },
                {
                    title: '[점검] 2023년 6월 14일 정기 점검 안내 (완료)',
                    content: '정기 점검을 실시합니다. 감사합니다.',
                    created: '2023.06.14'
                },
                {
                    title: '[점검] 2023년 6월 3일 정기 점검 안내 (완료)',
                    content: '정기 점검을 실시합니다. 감사합니다.',
                    created: '2023.06.3'
                },
                {
                    title: '[점검] 2023년 5월 20일 정기 점검 안내 길어지면 어떻게 될까용(완료)',
                    content: '정기 점검을 실시합니다. 감사합니다. 정기 점검을 실시합니다. 감사합니다. 정기 점검을 실시합니다. 감사합니다.',
                    created: '2023.05.20'
                },
                {
                    title: '[점검] 2023년 5월 10일 정기 점검 안내 (완료)',
                    content: '정기 점검을 실시합니다. 감사합니다.',
                    created: '2023.05.10'
                }
            ])
        } else if (screenName === "EventScreen") {
            setPostList([
                {
                    title: '이벤트 진행합니다. 1번 이벤트에요',
                    content: '땡큐땡큐 이벤트',
                    created: '2023.06.23'
                },
                {
                    title: '이벤트 진행합니다. 2번 이벤트에요',
                    content: '땡큐땡큐 이벤트  2',
                    created: '2023.06.23'
                }
            ])
        }

    }, [])


    return (
        <Container>
            {postList.map((value, index, array) => {
                return (
                    <PostContainer key={index} activeOpacity={1} onPress={() => navigation.navigate("MyStack", {
                        screen: 'NoticeDetailScreen',
                        params: {
                            noticeData: {
                                title : value.title,
                                content : value.content,
                                created : value.created
                            }
                        }
                    })}>
                        <PostTitleContainer>
                            <PostTitleText numberOfLines={2}>{value.title}</PostTitleText>
                            <PostDateText>{value.created}</PostDateText>
                        </PostTitleContainer>
                        <View>
                            <MaterialCommunityIcons
                                name="chevron-right"
                                size={24}
                                color={lightTheme.moreViewButton}/>
                        </View>
                    </PostContainer>
                )
            })}
        </Container>
    )
}

export default BoardList
