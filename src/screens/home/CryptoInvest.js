import react from "react";
import {View, Text,TouchableOpacity} from "react-native";

const CryptoInvest = ({navigation: {navigate}}) => {
    return(
        <View style ={{flex : 1, justifyContent : "center",alignItems:"center"}}>
           <TouchableOpacity onPress = { ()=> navigate("BottomTab", {screen : "InvestmentTab"})}>
               <Text>해당 코인 정보</Text>
           </TouchableOpacity>
        </View>
    )
}

export default CryptoInvest;

