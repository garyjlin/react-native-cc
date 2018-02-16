/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class buysell extends Component<{}> {
  render() {
	 // const { page } = this.state;
  //const background = styles[page];
 // const tabbarStyles = [styles.tabbar];
    return (
      <View>
	  <View style={{width: 400, height: 200, position: 'absolute', backgroundColor: 'steelblue'}} />
      <Text style={styles.instructions}>
          BUYSELL SCREEN 
      </Text>
		
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
	marginTop: 30,
    fontSize: 25,
	color: '#ffffff',
	fontWeight: "bold",
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
	fontSize: 15,
    color: '#ffffff',
    marginBottom: 10,
  },
   image1: {
    height:200,
    width:100,
    alignItems: 'center',
    justifyContent:'center',
	//resizeMode: 'contain',
  },
    tabbar: {
    backgroundColor:'white',
    height: 64,
    borderTopColor: 'red',
    borderTopWidth: 2
  }
});
