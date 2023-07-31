/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlexWidget, TextWidget } from 'react-native-android-widget';


export function HelloWidget({ count = 0 ,daysInThisMonth}) {

    console.log("daysInThisMonth : " + daysInThisMonth)

    return (
        <FlexWidget
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                height: 'match_parent',
                width: 'match_parent',
                borderRadius: 32,
                flex: 1,
                flexDirection: 'row',
                flexGap: 48,
            }}
        >
            {daysInThisMonth.map((v,i)=> {
                // const a = v;
                <TextWidget style={{ fontSize: 48 }} text = {`${v[0]}`} />
            })}
            {/*{test}*/}
            {/*<FlexWidget*/}
            {/*    style={{*/}
            {/*        height: 'wrap_content',*/}
            {/*        width: 48,*/}
            {/*        alignItems: 'center',*/}
            {/*        justifyContent: 'center',*/}
            {/*    }}*/}
            {/*    clickAction="DECREMENT"*/}
            {/*    clickActionData={{ value: count }}*/}
            {/*>*/}
            {/*    <TextWidget style={{ fontSize: 48 }} text="-" />*/}
            {/*</FlexWidget>*/}
            {/*<TextWidget style={{ fontSize: 48 }} text={`${count}`} />*/}
            {/*<FlexWidget*/}
            {/*    style={{*/}
            {/*        height: 'wrap_content',*/}
            {/*        width: 48,*/}
            {/*        alignItems: 'center',*/}
            {/*        justifyContent: 'center',*/}
            {/*    }}*/}
            {/*    clickAction="INCREMENT"*/}
            {/*    clickActionData={{ value: count }}*/}
            {/*>*/}
            {/*    <TextWidget style={{ fontSize: 48 }} text="+" />*/}
            {/*</FlexWidget>*/}
        </FlexWidget>
    );
}
