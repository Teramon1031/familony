import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';
 
 
// use in your class
export default class Password extends Component {
    state = {
        password: '',
    };
 
    render() {
      const {navigate} = this.props.navigation;
        return (
            <View style = { styles.container }>
                <PasswordInputText
                    value={this.state.password}
                    onChangeText={ (password) => this.setState({ password }) }
                    style={{color: "white"}}
                />
            <Button
            onPress={() => navigate('SettingsHome')}
            title="Save"
            color="#00ced1"/>
      </View>
        );
    }
   
}

const styles = StyleSheet.create({
 container:
     {
         flex: 1,
         backgroundColor: '#ffdab5' 
     }
});