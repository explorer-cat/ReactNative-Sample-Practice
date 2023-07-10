import {View, StyleSheet, Button, Alert} from 'react-native';


function createOneButtonAlert({ title, message, buttonText, callback }) {
    const defaultButton = { text: buttonText, onPress: () => console.log('OK Pressed') };

    let buttons = [defaultButton];

    if (typeof callback === 'function') {
        const onPressCallback = callback();

        if (typeof onPressCallback === 'function') {
            defaultButton.text = buttonText;
            defaultButton.onPress = onPressCallback;
        }
    }

    Alert.alert(title, message, buttons);
}

DnAlert = ({title, message,}) =>
    Alert.alert(title, message, [
        {
            text: '',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        {
            text: 'OK',
            onPress: () => console.log('OK Pressed')
        },
    ]);

const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
        {
            text: 'Ask me later',
            onPress: () => console.log('Ask me later pressed'),
        },
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

export {createOneButtonAlert};
