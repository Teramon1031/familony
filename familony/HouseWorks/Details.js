import * as React from 'react';
import { StyleSheet, View,Alert, TextInput, TouchableHighlight, Image } from 'react-native';
import { Text, Button } from 'react-native-elements';
import {render} from 'react-dom';

class SettingsNewWorks extends React.Component {
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Name"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Personnel"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(personnel) => this.setState({personnel})}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Points"
              secureTextEntry={true}
              keyboardType='numeric' 
              underlineColorAndroid='transparent'
              onChangeText={(point) => this.setState({point})}
              />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Day of the Week"
              secureTextEntry={true}
              keyboardType='numeric' 
              underlineColorAndroid='transparent'
              onChangeText={(dayoftheweek) => this.setState({dayoftheweek})}
              />
        </View>
        
        <Button
      	title="Done"
      	onPress={() => navigate('HouseWorksHome')}
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
    backgroundColor: '#DCDCDC',
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

export default SettingsNewWorks;