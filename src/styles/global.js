import {StyleSheet} from "react-native";
import {Platform} from 'react-native';

export const darkTheme = {
    mainBgColor: '#212121',
    textColor: 'white',
    fonts: {
        regular: Platform.select({
            ios: 'Pretendard-Regular',
            android: 'Pretendard-Regular',
        }),
        medium: Platform.select({
            ios: 'Pretendard-Medium',
            android: 'Pretendard-Medium',
        }),
        bold: Platform.select({
            ios: 'Pretendard-Bold',
            android: 'Pretendard-Bold',
        }),
        semibold: Platform.select({
            ios: 'Pretendard-SemiBold',
            android: 'Pretendard-SemiBold',
        }),
        thin: Platform.select({
            ios: 'Pretendard-Thin',
            android: 'Pretendard-Thin',
        }),

    },
}

export const lightTheme = {
    mainBgColor: 'white',
    textColor: '#212121',
    subTextColor: '#878686',
    buttonBackground: '#F3F3F3',
    buttonBackgroundActive: '#D8D8D8',
    moreViewButton: '#ABA9A9',
    fonts: {
        regular: Platform.select({
            ios: 'Pretendard-Regular',
            android: 'Pretendard-Regular',
        }),
        medium: Platform.select({
            ios: 'Pretendard-Medium',
            android: 'Pretendard-Medium',
        }),
        bold: Platform.select({
            ios: 'Pretendard-Bold',
            android: 'Pretendard-Bold',
        }),
        semibold: Platform.select({
            ios: 'Pretendard-SemiBold',
            android: 'Pretendard-SemiBold',
        }),
        thin: Platform.select({
            ios: 'Pretendard-Thin',
            android: 'Pretendard-Thin',
        }),
    },
}


export const globalStyles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
    },
    titleText: {
        fontSize: 18,
        // color:'#333',
    },
    paragraph: {
        marginVerical: 8,
        lineHeight: 20,
    },
    fontRegular : {
        fontFamily:'Pretendard-Regular',
    },
    fontMedium : {
        fontFamily:'Pretendard-Medium',
    },
    fontSemiBold : {
        fontFamily:'Pretendard-SemiBold',
    },
    fontBold : {
        fontFamily:'Pretendard-Bold',
    }
});
