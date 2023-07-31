import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions,StyleSheet } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    withSpring,
    runOnJS,
    withTiming,
    withDecay,
    withDelay,
    withSequence,
} from 'react-native-reanimated';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const ConnectMyWalletScreen = () => {
    const [selected, setSelected] = useState('');

    const screenHeight = Dimensions.get('screen').height;
    const screenWidth = Dimensions.get('screen').width;
    const [open, setOpen] = useState(false);
    //플러스 버튼 클릭시 열리는 백그라운드 뷰
    const animation = useSharedValue(200); // Default height when closed
    const openGestureY = 200;
    const minHeight = 400; // Set the maximum height the view can expand to
    const maxHeight = 700; // Set the maximum height the view can expand to
    const gestureHeight = -100; //얼만큼 손을 올려야지 올라갈건지


    useEffect(() => {
        if (open) {
            animation.value = withSpring(maxHeight, { damping: 100 });
        } else {
            animation.value = withSpring(minHeight, { damping: 100});
        }
    }, [open]);

    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startHeight = animation.value;
        },
        onActive: (event, ctx) => {
            let newHeight = ctx.startHeight - event.translationY;
            if (newHeight > maxHeight) {
                newHeight = maxHeight;
            }
            if (newHeight < minHeight) {
                newHeight = minHeight;
            }
            animation.value = newHeight;
        },
        onEnd: (event) => {
            if (event.translationY < gestureHeight || animation.value > screenHeight - openGestureY) {
                animation.value = withTiming(maxHeight, { duration: 300 });
                runOnJS(setOpen)(true);
            } else {
                runOnJS(setOpen)(false);
                if (animation.value !== maxHeight && animation.value !== openGestureY) {
                    animation.value = withTiming(minHeight, { duration: 300 });
                }
            }
        },
    });

    const boxStyle = useAnimatedStyle(() => {
        return {
            height: animation.value,
        };
    });



    return (
        <>
            <View style={{ flex: 1}}>
                <Calendar
                    onDayPress={day => {
                        setSelected(day.dateString);
                    }}
                    markedDates={{
                        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                    }}
                />
            </View>
            <View style={{ position: 'absolute', zIndex: 99, bottom: 0, backgroundColor: 'white' ,borderTopWidth:1,borderColor:'#C9C9C9'}}>
                <PanGestureHandler onGestureEvent={onGestureEvent}>
                    <Animated.View style={[boxStyle, styles.mySummaryModal, { width: screenWidth}]}>
                        <View style = {{padding:12,alignItems:'center'}}>
                            <View style = {{width:50,height:5,backgroundColor:'#C9C9C9',borderRadius:8}}>

                            </View>
                        </View>
                        <View style={{ padding: 20 }}>
                            <Text></Text>
                        </View>
                    </Animated.View>
                </PanGestureHandler>
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    summaryBox : {
        flex:1,
        backgroundColor:'red'


    },
    mySummaryModal : {

    }
});


export default ConnectMyWalletScreen;

