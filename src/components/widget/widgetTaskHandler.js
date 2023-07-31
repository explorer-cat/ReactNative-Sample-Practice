import React,{useState} from 'react';
// import { pro } from 'react-native-android-widget';
import { HelloWidget } from './HelloWidget';
import He from "styled-components/dist/styled-components.browser.esm";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import  { WidgetTaskHandlerProps } from 'react-native-android-widget';
import {Calendar, LocaleConfig} from 'react-native-calendars';
const nameToWidget = {
    // Hello will be the **name** with which we will reference our widget.
    Hello: HelloWidget,
};

const COUNTER_STORAGE_KEY = 'HelloWidget:count';

function getDaysInMonth(year, month) {
    // month는 0부터 시작하므로 1을 빼줍니다.
    const date = new Date(year, month - 1, 1);
    const daysInMonth = [];

    // 해당 월의 마지막 날짜를 구합니다.
    while (date.getMonth() === month - 1) {
        daysInMonth.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }

    return daysInMonth;
}



function test() {
    return(
        <Calendar
            // onDayPress={day => {
            //     setSelected(day.dateString);
            // }}
            // markedDates={{
            //     [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
            // }}
        />
    )
}

export async function widgetTaskHandler(props) {
    const widgetInfo = props.widgetInfo;
    const Widget = nameToWidget[widgetInfo.widgetName];

    // 현재 연도와 월을 가져옵니다.
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    // 이번 달의 일수 리스트를 얻습니다.
    const daysInThisMonth = getDaysInMonth(currentYear, currentMonth);
    console.log("daysInThisMonth",daysInThisMonth)

    switch (props.widgetAction) {
        case 'WIDGET_ADDED':
            if (widgetInfo.widgetName === 'Hello') {
                // const count = +((await AsyncStorage.getItem(COUNTER_STORAGE_KEY)) ?? 0);
                // props.renderWidget(<HelloWidget count={count}  daysInThisMonth = {daysInThisMonth}/>);
            }
            break;

        case 'WIDGET_UPDATE':
            if (widgetInfo.widgetName === 'Counter') {
                // const count = +((await AsyncStorage.getItem(COUNTER_STORAGE_KEY)) ?? 0);
                // props.renderWidget(<HelloWidget count={count}/>);
            }
            break;
        case 'WIDGET_RESIZED':
            if (widgetInfo.widgetName === 'Hello') {
                // const count = +((await AsyncStorage.getItem(COUNTER_STORAGE_KEY)) ?? 0);
                // props.renderWidget(<HelloWidget count={count} />);
            } else {
                // props.renderWidget(<Widget {...widgetInfo} />);
            }
            break;
        case 'WIDGET_DELETED':
            // Not needed for now
            break;
        case 'WIDGET_CLICK':
            if (props.clickAction === 'MY_ACTION') {
                alert("zz")
                // Do stuff when primitive with `clickAction="MY_ACTION"` is clicked
                // props.clickActionData === { id: 0 }
            }
            if (widgetInfo.widgetName === 'Hello') {
                // const count = (props.clickActionData?.value) + (props.clickAction === 'INCREMENT' ? 1 : -1);
                // props.renderWidget(<HelloWidget count={count} />);

                // AsyncStorage.setItem(COUNTER_STORAGE_KEY, `${count}`);
            }
            break;

        default:
            break;
    }
}
