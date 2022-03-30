import * as React from 'react';
import { StyleSheet, View,Alert, TextInput, TouchableHighlight, Image } from 'react-native';
import { Text, Button } from 'react-native-elements';
import {render} from 'react-dom';

export default class CleanDiningRoom extends React.Component {
   showAlert() {
    const {navigate} = this.props.navigation;
    Alert.alert(
      'Finished the task',
      'Did you finised the task?',
      [
        {text: 'Yes', 
         
        style: 'default'},
       
        {text: 'No', 
        style: 'default'},
      ],
      { cancelable: false }
    )
  }

  showAlert2() {
    const {navigate} = this.props.navigation;
    Alert.alert(
      'Save',
      'Save the change?',
      [
        {text: 'Yes', 
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
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Name"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}
               defaultValue = "Take out trash"/>
             
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Personnel"
              underlineColorAndroid='transparent'
              onChangeText={(personnel) => this.setState({personnel})}
              defaultValue = "John"/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Points"
              keyboardType='numeric' 
              underlineColorAndroid='transparent'
              onChangeText={(point) => this.setState({point})}
              defaultValue = "1000"
              />
        </View>
        
        <Button
          onPress={() => this.showAlert()}
          title="Finished the task"
          color="#841584"
          
        />

        <Button
          onPress={() => this.showAlert2()}
          title="Save"
          color="#841584"
           style={{marginTop: 30}}
           />
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffdab9',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  
});