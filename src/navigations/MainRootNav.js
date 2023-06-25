import React from "react";
import Tabs from "./BottomTabNav";
import MainScreenStack from "./MainScreenStack";
import { createStackNavigator } from '@react-navigation/stack';
import MyScreenStack from "./MyScreenStack";

const Nav = createStackNavigator();

//메인 화면의 같은 레벨의 네이게이터들을 관리함.
const MainRootNav = () => {
    return (
        <Nav.Navigator
            screenOptions = {{
                headerShown: false
            }}>
            <Nav.Screen name="BottomTab" component={Tabs} />
            <Nav.Screen name="MainStack" component={MainScreenStack} />
            <Nav.Screen name="MyStack" component={MyScreenStack} />
        </Nav.Navigator>
    )
}

export default MainRootNav;
