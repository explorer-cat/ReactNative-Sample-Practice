
import { LineChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

const IndexLineChart = ({chartData}) => {


    return (
        <LineChart
            style={{ height: 70 ,marginTop: 0 }}
            data={chartData}
            curve={shape.curveNatural}
            numberOfTicks = {0} //뒷배경 라인 개수
            animate = {true}
            svg={{ stroke: 'blue' }}
            contentInset={{ top: 20, bottom: 20 ,left:0,right:0}}
            showGrid = {false}
            chartInsets = {{top : 10,bottom:10,left:0,right:0}}
            overflow = {"hidden"}
        >
            <Grid />
        </LineChart>
    )
}

export default IndexLineChart;

// `
//
// const ContentView = styled.View`
//   flex-direction: column;
// `
//
// const ChartView = styled.View`
//
// `
//
// const IndexLineChart = () => {
//
//     const data = {
//         labels: ["January", "February", "March", "April", "May", "June"],
//         datasets: [
//             {
//                 data: [0.2, 0.1, 0.2, 0.2, 0.3, 0.1, 0.2],
//                 color: () => `red`, // optional
//                 strokeWidth: 2 // optional
//             }
//         ],
//         // legend: ["Rainy Days"] // optional
//     };
//
//     const screenWidth = Dimensions.get("window").width;
//
//
//     return (
//         <LineChart style={{marginTop: 6}}
//                    data={data}
//                    width={100}
//                    height={100}
//             // verticalLabelRotation={10}
//                    withDots={false}
//                    withShadow={false}
//                    withInnerLines={false}
//                    withVerticalLabels={false} //세로 라벨 지우기
//                    withHorizontalLabels={false} //가로 라벨 지우기
//                    withHorizontalLines={false}
//                    withVerticalLines={false}
//                    withOuterLines={false}
//                    withInnerLines={false}
//                    fromZero={false}
//                    horizontalLabelRotation = {33}
//                    verticalLabelRotation = {1}
//                    yLabelsOffset = {20}
//                    segments = {1}
//             // yAxisLabel = {"d"}
//             // yAxisSuffix  = {"d"}
//             // xAxisLabel = {"f"}
//             // yLabelsOffset = {0}
//                    chartConfig={{
//                        strokeWidth: 2, // optional, default 3
//                        // barPercentage: 0.5,
//                        useShadowColorFromDataset: false,
//                        // backgroundColor: "#EBE9E9",
//                        // backgroundGradientFrom: "#EBE9E9",
//                        // backgroundGradientTo: "#EBE9E9",
//                        // decimalPlaces: 2, // optional, defaults to 2dp
//                        color: () => `blue`, //투명
//                        // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//                        style: {
//
//                            // padding:10,
//                            // borderRadius: 12,
//                            // marginVertical: 8,
//                            // marginLeft: 10,
//                            // borderRadius: 16
//                        },
//                        // propsForDots: {
//                        //     r: "6",
//                        //     strokeWidth: "2",
//                        //     stroke: "#ffa726"
//                        // }
//                    }}
//                    bezier
//         />
//
//     )
//
// }
//
//
// export default IndexLineChart;
