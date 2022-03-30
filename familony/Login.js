import * as React from 'react';
import { StyleSheet, View, Alert, TextInput, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-elements';
import {render} from 'react-dom';

 
class Login extends React.Component {

  constructor(props) {
    super(props);
    state = {
      name   : 'username',
      password: 'password',
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1552554406-2456e419e388?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'}} style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width:'100%' }}>

        <Text style={styles.textLogo}>Familony</Text>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Name"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
        <Button
      	title="Login"
        style={{width:250, height:45}}
      	onPress={() => navigate('HouseWorksHome')}
        buttonColor="rgba(63, 191, 178, 0.77)" 
      	/>
    </ImageBackground>
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
  textLogo:{
    color: 'white',
    fontSize:70,
    fontWeight:'bold',
    
  },
  
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:5,
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
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  
});
 



export default Login;