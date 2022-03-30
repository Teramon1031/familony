import * as React from 'react';
import { StyleSheet, View, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-elements';
import {render} from 'react-dom';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsList from 'react-native-settings-list';
import {
  SettingsDividerShort,
  SettingsDividerLong,
  SettingsEditText,
  SettingsCategoryHeader,
  SettingsSwitch,
  SettingsPicker
} from "react-native-settings-components";
import Swipeout from 'react-native-swipeout';

class HouseWorksDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      allowPushNotifications: false,
      gender: ""
    };
  }

  render() {

     const {navigate} = this.props.navigation;
    return (
      <View style={{backgroundColor:'#ffdab9',flex:1}}>
          <SettingsList borderColor='#ffdab9' defaultItemSize={50}>
          <Text h4>Monday</Text>
            <SettingsList.Item
              title='Clean Dining Room'
                onPress={() => navigate('CDRS')}
            />
            <SettingsList.Item
              title='MBS'
              onPress={() => navigate('MBS')}
            />
            <SettingsList.Item            
              title='MakeLunch'
              onPress={() => navigate('MLS')}
            />
            <SettingsList.Item            
              title='MakeDinner'
              onPress={() => navigate('MDS')}
            />
            <SettingsList.Item            
              title='Washing'
              onPress={() => navigate('WS')}
            />
            <SettingsList.Item            
              title='Take children to school'
              onPress={() => navigate('TCtS')}
            />
            <SettingsList.Item            
              title='Pick up children from school'
              onPress={() => navigate('PCfS')}
            />
            <SettingsList.Item            
              title='Take out trash'
              onPress={() => navigate('TOT')}
            />

            <Text h4>Tuesday</Text>
            <SettingsList.Item
              title='Clean Dining Room'
              onPress={() => navigate('CDRS')}
            />
            <SettingsList.Item
              title='MakeBreakfast'
              onPress={() => navigate('MBS')}
            />

            <SettingsList.Item            
              title='MakeLunch'
              onPress={() => navigate('MLS')}
            />

            <SettingsList.Item            
              title='MakeDinner'
              onPress={() => navigate('MDS')}
            />

            <SettingsList.Item            
              title='Washing'
              onPress={() => navigate('WS')}
            />

            <SettingsList.Item            
              title='Clean rest room'
              onPress={() => navigate('CRR')}
            />

            

            <Text h4>Wednesday</Text>
            <SettingsList.Item
              title='Clean Dining Room'
              onPress={() => navigate('CDRS')}
            />

            <SettingsList.Item
              title='MakeBreakfast'
              onPress={() => navigate('MakeBreakfast')}
            />

            <SettingsList.Item            
              title='MakeLunch'
              onPress={() => navigate('MLS')}
            />
            <SettingsList.Item            
              title='MakeDinner'
              onPress={() => navigate('MDS')}
            />

            <SettingsList.Item            
              title='Washing'
              onPress={() => navigate('WS')}
            />

            <SettingsList.Item            
              title='Take out the trash'
              onPress={() => navigate('TOT')}
            />

            <Text h4>Thursday</Text>
            <SettingsList.Item
              title='Clean Dining Room'
              onPress={() => navigate('CDRS')}
            />

            <SettingsList.Item
              title='MakeBreakfast'
              onPress={() => navigate('MBS')}
            />

            <SettingsList.Item            
              title='MakeLunch'
              onPress={() => navigate('MLS')}
            />

            <SettingsList.Item            
              title='MakeDinner'
              onPress={() => navigate('MDS')}
            />

            <SettingsList.Item            
              title='Washing'
              onPress={() => navigate('WS')}
            />

            <SettingsList.Item            
              title='Shop in grossary store'
              onPress={() => navigate('SaG')}
            />

            <Text h4>Friday</Text>
            <SettingsList.Item
              title='Clean Dining Room'
              onPress={() => navigate('CDRS')}
            />

            <SettingsList.Item
              title='MakeBreakfast'
              onPress={() => navigate('MBS')}
            />

            <SettingsList.Item            
              title='MakeLunch'
              onPress={() => navigate('MLS')}
            />

            <SettingsList.Item            
              title='MakeDinner'
              onPress={() => navigate('MDS')}
            />

            <SettingsList.Item            
              title='Washing'
              onPress={() => navigate('WS')}
            />

            <SettingsList.Item            
              title='Take out trash'
              onPress={() => navigate('TOT')}
            />

            <Text h4>Saturday</Text>
            <SettingsList.Item
              title='Clean Dining Room'
              onPress={() => navigate('CDRS')}
            />

            <SettingsList.Item
              title='MakeBreakfast'
              onPress={() => navigate('MBS')}
            />

            <SettingsList.Item            
              title='MakeLunch'
              onPress={() => navigate('MLS')}
            />

            <SettingsList.Item            
              title='MakeDinner'
              onPress={() => navigate('MDS')}
            />

            <SettingsList.Item            
              title='Washing'
              onPress={() => navigate('WS')}
            />

            <SettingsList.Item            
              title='Take suits to the cleaner's
              onPress={() => navigate('TStC')}
            />

            <Text h4>Sunday</Text>
            <SettingsList.Item
              title='Clean Dining Room'
              onPress={() => navigate('CDRS')}
            />

            <SettingsList.Item
              title='MakeBreakfast'
              onPress={() => navigate('MBS')}
            />
 
            <SettingsList.Item            
              title='MakeLunch'
              onPress={() => navigate('MLS')}
            />

            <SettingsList.Item            
              title='MakeDinner'
              onPress={() => navigate('MDS')}
            />

            <SettingsList.Item            
              title='Washing'
              onPress={() => navigate('WS')}
            />

            <SettingsList.Item            
              title='Pick up suits from the cleaner's
              onPress={() => navigate('PSfC')}
            />

          </SettingsList>

          
          <ActionButton buttonColor="rgba(63, 191, 178, 0.77)">
          <ActionButton.Item 
          buttonColor='#ffdab9' 
          title="New Task" 
          onPress={() => navigate('HouseWorksAdd')}>
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

const colors = {
  white: "#FFFFFF",
  monza: "#C70039",
  switchEnabled: "#C70039",
  switchDisabled: "#efeff3",
  blueGem: "#27139A",
};

export default HouseWorksDetails;