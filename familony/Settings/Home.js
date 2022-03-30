import * as React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Image, Alert } from 'react-native';
import { Text, Button, Avatar } from 'react-native-elements';
import {render} from 'react-dom';
import { Component } from 'react';
import SettingsList from 'react-native-settings-list';
import {
  SettingsCategoryHeader
} from "react-native-settings-components";
import { Constants, Camera, Permissions, ImagePicker } from 'expo';
import { AsyncStorage } from "react-native"

export default class SettingsListExample extends React.Component {
  constructor(){
    super();
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {switchValue: false, loggedIn: false};

    this.state = {
      uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", 
      hasCameraPermission: null, // カメラ機能の許可
      type: Camera.Constants.Type.back, // 背面カメラを利用
      openCamera: false
    };
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  _takePicture() {
      console.log('Button Pressed');
      let photo = this.camera.takePictureAsync();
      console.log(photo);
      this.setState({uri:photo.uri});
  }

  _openCamera() {
    console.log(this.state.hasCameraPermission);
    if(this.state.hasCameraPermission) {
      this.setState({openCamera:true});
    } else {
      console.log('カメラの使用をオンにしてください');
    }
  }

    
  render() {
    const {navigate} = this.props.navigation;
    const {hasCameraPermission, uri} = this.state;
    var bgColor = '#ffdab9';
    return (
      <View style = { styles.container }>
           <Avatar
           size = "large"
           rounded
           icon={{name: 'user', type: 'font-awesome'}}
           source={{
            uri:uri,
          }}
          onPress={()=>this._openCamera()}
           showEditButton
            />
          
          <SettingsList borderColor='#ffdab9' defaultItemSize={50}>
            <SettingsList.Header headerStyle={{marginTop:15}}/>
            <SettingsList.Item            
              title='Name'
              titleInfo='Michael Jackson'
              titleInfoStyle={styles.titleInfoStyle}
              onPress={() => navigate('SettingsName')}
            />
            <SettingsList.Item
              title='Password'
              titleInfoStyle={styles.titleInfoStyle}
              onPress={() => navigate('SettingsPassword')}
            />
            <SettingsList.Header headerStyle={{marginTop:15}}/>
            <SettingsList.Item
              title='EverydayHouseWorks'
              onPress={() => navigate('SettingsWorks')}
            />
          </SettingsList>
      </View>
    );
  }
  
  toggleAuthView() {
    this.setState({toggleAuthView: !this.state.toggleAuthView})
  }
  onValueChange(value){
    this.setState({switchValue: value})
  }
}

const styles = StyleSheet.create({
 titleInfoStyle:{
   fontSize:16,
   color: '#000000'
 },
 container:
     {
         flex: 1,
         backgroundColor: '#ffdab9' 
     }
});