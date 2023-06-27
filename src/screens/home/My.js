import react, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, TouchableHighlight, Image} from "react-native";
import styled from "styled-components";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {
    DARK_ACTIVE,
    DARK_INACTIVE,
    LIGHT_ACTIVE,
    LIGHT_BUTTON,
    LIGHT_BUTTON_ACTIVE,
    LIGHT_INACTIVE
} from "../../theme/palette";
import DivLine from "../../components/public/DivLine";
import {darkTheme, lightTheme} from "../../styles/global";

const Container = styled.ScrollView`
  flex: 1;
  //justify-content: center;
  //align-items: center;
    //background-color: ${(props) => props.theme.mainBgColor};
`

const HeaderTitle = styled.View`
  height: 50px;
  //background-color: red;

`

const LoginContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 52px;
  padding: 0 24px;
  //align-content: center;
  align-items: center;
  margin-bottom: 24px;
`

const UserProfileImage = styled.Image`
  width: 42px;
  height: 42px;
  margin-right: 12px;
`

const ProfileContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-content: center;
  align-items: center;

`

const ProfileDetailImageContainer = styled.View`
  ${Platform.OS === 'android' && 'margin-top: 6px;'}
`

const ConntentStatusAPIBtn = styled.TouchableHighlight`
  height: 40px;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.buttonBackground};;
`
const ConnectStatusAPIBtn = styled.View`
  //height: 40px;
  //justify-content: center;
  //padding: 8px;
  //border-radius: 8px;
    // background-color: ${(props) => props.theme.buttonBackground};
`


const MyFunctionListConatiner = styled.ScrollView`
  //background-color: red;
  margin-top: 18px;
  padding: 14px;
`

const FunctionBtnView = styled.View`
  height: 45px;
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  //background-color: red;

`

const NoticeSummaryContainer = styled.View`
  flex-direction: column;
  //margin-top: 2px;

`

const NoticeSummanryTitleContainer = styled.View`
  flex-direction: row;
  padding: 20px 20px 0px 20px;
  justify-content: space-between;

`

const NoticeSummaryContent = styled.View`
  padding: 12px 20px;

`

const AppOptionContainer = styled.View`
  // background-color: ${ (props) => props.theme.buttonBackground};
  border-radius: 6px;
  height: 40px;
  margin: 20px;
  //padding: 20px;
  flex-direction: row;
`

const AppOptionButton = styled.TouchableOpacity`
  flex:1;
  height: 100%;
  //background-color: black;
  justify-content: center;
  //background-color: beige;
  align-items: center;
  margin: 0px 20px;
  border-radius: 6px;
`
const My = ({navigation}) => {
    // const [isLoggiend, setIsLoggiend] = useState(null);
    const [isLoggiend, setIsLoggiend] = useState({
        name: "최성우",
        // uuid : 12345443,
    })

    //공지,이벤트 요약 리스트
    const [boardSummaryList, setBoardSummaryList] = useState(
        {
            notice: [
                {title: '신규 예치 상품 추가 안내 : BCH (비트코인 캐시)'},
                {title: 'BTC 6개월 예치 상품 출시 안내'},
                {title: '2023년 6월 21일 정기 점검 안내 (완료)'},
            ],
            event: [
                {title: '신규가입 회원 수수료 우대 이벤트 안내'},
                {title: '이더리움(ETH) 예치 회원 대상 에어드랍 이벤트 안내'},
            ],
        }
    )


    const [functionList, setFunctionList] = useState([
        // {title: '공지사항', component: 'NoticeScreen'},
        // {title: '이벤트', component: 'EventScreen'},
        {title: '고객센터', component: 'HelpScreen'},
        {title: '약관 및 정책', component: 'test1'},
        {title: '개인정보 취급방침', component: 'test2'},
        {title: '개인정보 취급방침', component: 'test2'},
        {title: '앱버전', component: 'version'},
        {title: '로그아웃', component: 'logout'},
    ])

    const handleClickProfile = () => {
        //로그인 여부를 확인하고 로그인 창으로 보낼지, 프로필 변경창으로 보낼지 결정함
        if (isLoggiend) {
            alert("로그인이 되어잇으므로 프로필 수정 페이지로 이동")
        } else {
            alert("비 로그인 상태이므로 로그인 페이지로 이동")
        }
    }
    return (
        <Container>
            <LoginContainer>
                <ProfileContainer activeOpacity={1} onPress={handleClickProfile}>
                    <UserProfileImage source={require('../../../assets/default_user_profile.png')}></UserProfileImage>
                    {

                        isLoggiend === null ?
                            <Text style={{fontSize: 22, fontWeight: 'bold'}}>지금 로그인 하기</Text>
                            : <Text style={{fontSize: 24, fontWeight: 'bold'}}>{isLoggiend.name} 님</Text>
                    }

                    <ProfileDetailImageContainer>
                        <MaterialCommunityIcons
                            // style = {{${Platform.OS === 'android' && 'margin-top: 4px'}}}
                            name="chevron-right"
                            size={30}
                            color={DARK_INACTIVE}/>
                    </ProfileDetailImageContainer>
                </ProfileContainer>
                {
                    isLoggiend === null ? <></> :
                        <ConntentStatusAPIBtn
                            activeOpacity={1}
                            underlayColor={LIGHT_BUTTON_ACTIVE}
                            // style = {{backgroundColor:LIGHT_BUTTON,borderRadius:6}}
                            onPress={() => alert("dd")}
                        >
                            <ConnectStatusAPIBtn>
                                <Text>API 연결 정보</Text>
                            </ConnectStatusAPIBtn>
                        </ConntentStatusAPIBtn>
                }
            </LoginContainer>
            <DivLine height={4}/>

            <AppOptionContainer>

                {/*<TouchableHighlight*/}
                {/*                    activeOpacity={1}*/}
                {/*                    underlayColor="#EBE9E9"*/}
                {/*                    style={{borderRadius: 6, marginBottom: 14}}*/}
                {/*                    }>*/}
                <AppOptionButton activeOpacity = {1}  onPress = {()=> alert("알림 설정")}>
                    <Image source = {require("../../../assets/alert.png")}  style = {{marginBottom:8}}/>
                    <Text>알림 설정</Text>
                </AppOptionButton >
                {/*</TouchableHighlight>*/}
                <AppOptionButton activeOpacity={1}  onPress = {()=> alert("화면 설정")}>
                    <Image source = {require("../../../assets/screen.png")}  style = {{marginBottom:8}}/>
                    <Text>화면 설정</Text>
                </AppOptionButton>
                <AppOptionButton activeOpacity = {1} onPress = {()=> alert("인증 보안")}>
                    <Image source = {require("../../../assets/lock.png")}  style = {{marginBottom:8}}/>
                    <Text>인증보안</Text>
                </AppOptionButton>
            </AppOptionContainer>
            <DivLine height={4}/>
            {/*설정 리스트*/}


            <NoticeSummaryContainer>

                <NoticeSummanryTitleContainer>
                    <View>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>공지사항</Text>
                    </View>

                    <TouchableOpacity activeOpacity={1} style={{flexDirection: 'row', alignItems: 'center'}} onPress={
                        () => navigation.navigate("MyStack", {screen: "NoticeScreen"})
                    }>
                        <Text style={{fontSize: 14 ,color : lightTheme.moreViewButton}}>더보기</Text>
                        <MaterialCommunityIcons
                            // style = {{${Platform.OS === 'android' && 'margin-top: 4px'}}}
                            name="chevron-right"
                            size={20}
                            color={lightTheme.moreViewButton}/>
                    </TouchableOpacity>
                </NoticeSummanryTitleContainer>

                <NoticeSummaryContent>
                    {boardSummaryList.notice.map((value, index) => {
                        return (
                            <View key = {index} style={{height: 32, justifyContent: 'center'}}>
                                <Text style={{fontSize: 15}}>{value.title}</Text>
                            </View>
                        )
                    })}
                </NoticeSummaryContent>

            </NoticeSummaryContainer>

            <DivLine height={1}/>

            <NoticeSummaryContainer>
                <NoticeSummanryTitleContainer>
                    <View>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>이벤트</Text>
                    </View>

                    <TouchableOpacity activeOpacity={1} style={{flexDirection: 'row', alignItems: 'center'}} onPress={
                        () => navigation.navigate("MyStack", {screen: "EventScreen"})
                    }>
                        <Text style={{fontSize: 14,color : lightTheme.moreViewButton}}>더보기</Text>
                        <MaterialCommunityIcons
                            // style = {{${Platform.OS === 'android' && 'margin-top: 4px'}}}
                            name="chevron-right"
                            size={20}
                            color={lightTheme.moreViewButton}/>
                    </TouchableOpacity>
                </NoticeSummanryTitleContainer>

                <NoticeSummaryContent>
                    {boardSummaryList.event.map((value, index) => {
                        return (
                            <View key = {index} style={{height: 32, justifyContent: 'center'}}>
                                <Text style={{fontSize: 15}}>{value.title}</Text>
                            </View>
                        )
                    })}
                </NoticeSummaryContent>

            </NoticeSummaryContainer>

            <DivLine height={4}/>
            <MyFunctionListConatiner>
                {functionList.map((value, index) => {
                    return (
                        <TouchableHighlight key={index}
                                            activeOpacity={1}
                                            underlayColor="#EBE9E9"
                                            style={{borderRadius: 6, marginBottom: 14}}
                                            onPress={() => navigation.navigate("MyStack", {screen: value.component}
                                            )}>
                            <FunctionBtnView>
                                <View>
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: value.component === 'logout' ? LIGHT_INACTIVE : LIGHT_ACTIVE
                                    }}>{value.title}</Text>
                                </View>
                                <MaterialCommunityIcons
                                    // style = {{${Platform.OS === 'android' && 'margin-top: 4px'}}}
                                    name="chevron-right"
                                    size={20}
                                    color={DARK_INACTIVE}/>
                            </FunctionBtnView>
                        </TouchableHighlight>
                    )

                })}
            </MyFunctionListConatiner>
        </Container>
    )
}

export default My;

