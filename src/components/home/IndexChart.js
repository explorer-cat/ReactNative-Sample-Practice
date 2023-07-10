import {Text, View, Image, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import React, {useState} from "react";
import styled from "styled-components";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import IndexLineChart from "../chart/IndexLineChart";
import {lightTheme} from "../../styles/global";

const Container = styled.View`
  width: 130px;
  height: 140px;
  background-color: ${(props) => props.theme.buttonBackground};
  margin: 0px 5px;
  padding: 16px;
  border-radius: 12px;
`

const ContentView = styled.View`
  flex-direction: column;
`

const ChartView = styled.View`
  
`

const IndexChart = ({indexData}) => {

    return (
        <Container>
            <ContentView>
                <View style={{marginBottom: 4}}>
                    <Text style={{fontSize: 12, fontFamily : lightTheme.fonts.semibold}}>{indexData.name}</Text>
                </View>
                <View style={{marginBottom: 2}}>
                    <Text style={{fontSize: 15,fontFamily : lightTheme.fonts.semibold}}>{indexData.point}</Text>
                </View>
                <View>
                    <Text style={{fontSize: 12, fontFamily : lightTheme.fonts.semibold, color: 'blue'}}>-21.92 ({indexData.rate})</Text>
                </View>
                <ChartView>
                    <IndexLineChart chartData = {indexData.data} />
                </ChartView>
            </ContentView>
        </Container>
    )

}


export default IndexChart;
