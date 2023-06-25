import {Text, View} from "react-native";
import styled from "styled-components";


const DivLineContainer = styled.View`
  background-color: #F5F5F5;
`
const DivLine = ({height}) => {

    return(
        <DivLineContainer style = {{height : height}}>

        </DivLineContainer>
    )
}

export default DivLine;
