import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Day from './Day';
import Week from './Week'
import Month from './Month'

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};


export default class DWMTab extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'day', title: 'Day' },
      { key: 'week', title: 'Week' },
      { key: 'month', title: 'Month' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          day: Day,
          week: Week,
          month: Month
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        indicatorStyle={{ backgroundColor: 'peachpuff' }}
        style={{ backgroundColor: 'peachpuff' }}

      />
    );
  }}