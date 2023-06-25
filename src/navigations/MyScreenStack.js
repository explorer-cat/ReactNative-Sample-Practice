// import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Button, Image, useColorScheme} from "react-native";
import {
    DARK_ACTIVE,
    DARK_BACKGROUND,
    DARK_INACTIVE,
    LIGHT_ACTIVE,
    LIGHT_BACKGROUND,
    LIGHT_INACTIVE
} from "../theme/palette";
import BackBtn from "../components/BackBtn";
import HelpDesk from "../components/my/HelpDesk";
import {darkTheme} from "../styles/global";
import BoardList from "../components/my/BoardList";
import Post from "../components/my/Post";

const Stack = createNativeStackNavigator();

function MyScreenStack({navigation: {navigate}}) {
    const isDark = useColorScheme() === "dark";

    return (
        <Stack.Navigator
            initialRouteName="My"
            screenOptions={{
                headerMode: 'screen',
                headerShadowVisible : false,
            }}
        >
            {/*코인 투자 및 정보 관련 제공*/}
            <Stack.Screen name="NoticeScreen"
                          options={({route, navigation, back}) => ({
                              title: '공지사항',
                              headerLeft: () => {
                                  return (<BackBtn navigation={navigation}/>)
                              }
                          })}
                          component={BoardList}/>
            <Stack.Screen name="NoticeDetailScreen"
                          options={({route, navigation, back}) => ({
                              title: '공지사항 상세',
                              headerLeft: () => {
                                  return (<BackBtn navigation={navigation}/>)
                              }
                          })}
                          component={Post}/>
            <Stack.Screen name="EventScreen"
                          options={({route, navigation, back}) => ({
                              title: '이벤트',
                              headerLeft: () => {
                                  return (<BackBtn navigation={navigation}/>)
                              }
                          })}
                          component={BoardList}/>
            <Stack.Screen name="HelpScreen"
                          options={({route, navigation, back}) => ({
                              title: '고객센터',
                              headerLeft: () => {
                                  return (<BackBtn navigation={navigation}/>)
                              }
                          })}
                          component={HelpDesk}/>
        </Stack.Navigator>

    );
}


export default MyScreenStack;
