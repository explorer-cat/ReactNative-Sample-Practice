import {StyleSheet, Text, View} from "react-native";

import styled from "styled-components";

const Container = styled.View`
  flex:1;
  background-color: ${(props) => props.theme.mainBgColor};
`
const StockList = () => (
    <Container>
        <View style={{flex: 1}}>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </View>
    </Container>
);

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});


export default StockList;
