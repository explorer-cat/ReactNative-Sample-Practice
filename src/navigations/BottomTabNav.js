import Movies from "../screens/home/Movies"
import Home from "../screens/home/Home";
import CryptoInvest from "../screens/home/CryptoInvest";
import {useColorScheme} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import {
    DARK_ACTIVE,
    DARK_BACKGROUND,
    DARK_INACTIVE,
    LIGHT_ACTIVE,
    LIGHT_BACKGROUND,
    LIGHT_INACTIVE
} from "../theme/palette";
import Setting from "../screens/home/Setting";
import MainScreenStack from "./MainScreenStack";
import HomeHeader from "../components/header/HomeHeader";
import My from "../screens/home/My";

const BottomTabNav = createBottomTabNavigator();

const Tabs = () => {
    const isDark = useColorScheme() === "dark";
    //바텀 바 클릭시 아이콘 뒤에 배경이 생기는거 제거.
    // theme.colors.secondaryContainer = "transperent"

    //다크모드 화이트모드 구분 변수

    return (
        <BottomTabNav.Navigator
            sceneContainerStyle={{
                backgroundColor : isDark ? DARK_BACKGROUND : LIGHT_BACKGROUND
            }}
            screenOptions={{
                headerShown: true, //헤더 보이기
                tabBarStyle: {
                    backgroundColor: isDark ? DARK_BACKGROUND : LIGHT_BACKGROUND,
                },

                tabBarActiveTintColor: isDark ? DARK_ACTIVE : LIGHT_ACTIVE,
                tabBarInactiveTintColor: isDark ? DARK_INACTIVE : LIGHT_INACTIVE,
                headerStyle: {
                    /*바텀 헤더 아래 border 영역 투명 처리 */
                    borderBottomColor: "transparent",
                    shadowColor: 'transparent',
                    borderBottomWidth: 0,
                    elevation: 0,
                    backgroundColor: isDark ? DARK_BACKGROUND : LIGHT_BACKGROUND
                },
                headerTitleStyle: {
                    color: isDark ? DARK_BACKGROUND : LIGHT_BACKGROUND
                },
                tabBarLabelStyle: {
                    marginTop: -5,
                    fontSize: 12,
                }
            }}
        >
            <BottomTabNav.Screen
                name="HomeTab"
                component={Home}
                options={({route, navigation}) => ({
                    tabBarLabel: '홈',
                    header: (focused) => {
                        return <HomeHeader isDark = {isDark} navigation={navigation}/>
                    },
                    tabBarIcon: ({focused, color}) => (
                        <MaterialCommunityIcons name={focused ? "home-variant-outline" : "home-variant"} color={color}
                                                size={20}/>
                    ),
                })}
            />
            <BottomTabNav.Screen
                name="InvestmentTab"
                component={CryptoInvest}
                options={{
                    tabBarLabel: '예치',
                    tabBarIcon: ({focused, color, size}) => {
                        return (
                            <MaterialCommunityIcons name={focused ? "chart-box-plus-outline" : "chart-box-outline"}
                                                    color={color} size={20}/>
                        )
                    },
                }}
            />
            <BottomTabNav.Screen
                name="NewsTab"
                component={CryptoInvest}
                options={{
                    tabBarLabel: '뉴스',
                    tabBarBadge: '30',
                    tabBarIcon: ({focused, color}) => (
                        <MaterialCommunityIcons name={focused ? "bell-ring-outline" : "bell-outline"} color={color}
                                                size={20}/>
                    ),
                }}
            />

            <BottomTabNav.Screen
                name="MyTab"
                component={My}
                options={{
                    tabBarLabel: '내 정보',
                    tabBarIcon: ({focused, color}) => (
                        <MaterialCommunityIcons name={focused ? "home-variant-outline" : "home-variant"} color={color}
                                                size={20}/>
                    ),

                }}
            />

        </BottomTabNav.Navigator>
    );
}


export default Tabs;
