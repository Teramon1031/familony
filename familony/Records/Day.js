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


class RecordsDay extends React.Component {
  render(){
          return (
            <ScrollView>
             <Card>
              <CardTitle
                subtitle="7:10"
               />
              <CardContent text="Michel finished Laundry" />
             </Card>
               <Card>
    <CardTitle
      subtitle="8:10"
    />
    <CardContent text="Jeoungyeoung finished throw away trash" />
  </Card>
   <Card>
    <CardTitle
      subtitle="17:10"
    />
    <CardContent text="Jhon finised pick up children" />
  </Card>
   <Card>
    <CardTitle
      subtitle="18:00"
    />
    <CardContent text="Michel finished make dinner" />
  </Card>
            </ScrollView>
          );
        }}

export default RecordsDay;