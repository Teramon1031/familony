import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import {render} from 'react-dom';
import SegmentedControl from 'react-native-segmented-control';
import { ScrollView, Easing, Dimensions } from "react-native";
import Pie from "react-native-animated-pie";
import {
  LineChart,
  PieChart,
} from 'react-native-chart-kit';
import 'babel-polyfill'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    data: [ 20, 45, 28, 80, 99, 43, 40 ],
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
  }]
}

const chartConfig = {
  backgroundGradientFrom: '#fffafa',
  backgroundGradientTo: '#fffafa',
  color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
  strokeWidth: 2 // optional, default 3
}

const data2 = [
  { name: 'Michel', points: 1800, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Emillie', points: 2800, color: '#00ced1', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Elizabeth', points: 5200, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Mark', points: 8500, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Jhon', points: 11000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
]


class RecordsMonth extends React.Component {
  render(){
          return (
            <ScrollView>
             <Card>
              <CardTitle
                title="Your've earned 1800 points in this month!"
               />
             </Card>

              <LineChart
                data={data}
                height={220}
                width={Dimensions.get('window').width}
                chartConfig={chartConfig}
              />
             <PieChart
               data={data2}
               width={Dimensions.get('window').width}
               height={220}
               chartConfig={chartConfig}
               backgroundColor="transparent"
               paddingLeft="15"
               accessor="points"
               absolute
               />

            </ScrollView>
          );
        }}
    
export default RecordsMonth;