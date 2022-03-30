import * as React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Text, Button, TextInput} from 'react-native-elements';
import {render} from 'react-dom';
import PasswordInputText from 'react-native-hide-show-password-input';
import { Hoshi } from 'react-native-textinput-effects';


export default class SettingsName extends React.Component {
   state = {
        password: '',
    };

    showAlert2() {
    const {navigate} = this.props.navigation;
    Alert.alert(
      'Save',
      'Save the change?',
      [
        {text: 'Yes', 
        onPress: () => navigate('SettingsName'),
        style: 'default'},
       
        {text: 'No', 
        style: 'default'},
      ],
      { cancelable: false }
    )
  }
 
  render(){
    const {navigate} = this.props.navigation;
    return (
       <View style = { styles.container }>
          <Hoshi
    label={'Name'}
    borderColor={'#ffdab9'}
    borderHeight={3}
    inputPadding={16}
    defaultValue= "Michael Jackson"
    style={{marginTop: 30}}
  />
        <Button
          onPress={() => this.showAlert2()}
          title="Save"
          color="#841584"
          style={{width: '50%', marginLeft:  100, marginTop: 30}}
           />
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container:
     {
         flex: 1,
         backgroundColor: '#ffdab9' ,
         
     }
});

