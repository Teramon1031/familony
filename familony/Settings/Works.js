import * as React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Text, Button } from 'react-native-elements';
import {render} from 'react-dom';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsList from 'react-native-settings-list';

class SettingsWorks extends React.Component {
  render(){
    const {navigate} = this.props.navigation;
    return (
        <View style={{flex:1, backgroundColor: '#ffdab9'}}>
       <View style={{backgroundColor:'#ffdab9',flex:1}}>
          <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
             <SettingsList.Header headerStyle={{marginTop:5}}/>
            <SettingsList.Item
              title='Clean Dining Room'
              onPress={() => navigate('CleanDiningRoom')}
            />
            <SettingsList.Header headerStyle={{marginTop:5}}/>
            <SettingsList.Item
              title='MakeBreakfast'
              onPress={() => navigate('MakeBreakfast')}
            />
             <SettingsList.Header headerStyle={{marginTop:5}}/>
            <SettingsList.Item            
              title='MakeLunch'
              onPress={() => navigate('MakeLunch')}
            />
             <SettingsList.Header headerStyle={{marginTop:5}}/>
            <SettingsList.Item            
              title='MakeDinner'
              onPress={() => navigate('MakeDinner')}
            />
             <SettingsList.Header headerStyle={{marginTop:5}}/>
            <SettingsList.Item            
              title='Washing'
              onPress={() => navigate('Washing')}
            />
          </SettingsList>
        </View>
         <ActionButton buttonColor="rgba(63, 191, 178, 0.77)">
          <ActionButton.Item 
          buttonColor='#ffdab9' 
          title="New Task" 
          onPress={() => navigate('SettingsNewWorks')}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
   height: 22,
    color: 'white',
  },
});


export default SettingsWorks;