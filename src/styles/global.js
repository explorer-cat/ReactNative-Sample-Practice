import { StyleSheet } from "react-native";

export const darkTheme = {
    mainBgColor : '#212121',
    textColor: 'white',


}

export const lightTheme = {
    mainBgColor: 'white',
    textColor : '#212121',
    subTextColor : '#878686',
    buttonBackground : '#EBE9E9',
    buttonBackgroundActive : '#D8D8D8',
    moreViewButton : '#ABA9A9'
}





export const globalStyles = StyleSheet.create({

    container: {
        padding:24,
        flex:1,
    },
    titleText:{
        fontSize:18,
        // color:'#333',
    },
    paragraph:{
        marginVerical:8,
        lineHeight:20,
    }

});
