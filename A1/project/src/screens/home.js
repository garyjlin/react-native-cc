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
  View,
  TouchableOpacity
} from 'react-native';

import { LineChart } from 'react-native-svg-charts';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

/*var myTabs = TabNavigator({
	Tab1: {screen: buysellscreen}
	
}); */


export default class Home extends Component<{}> {
  render() {
	const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 20, -50,70,80,90 ]
    return (
      <View>
	  <View style={{width: 400, height: 120, position: 'absolute', backgroundColor: 'steelblue'}}/>
   	 <Text style={styles.welcome}>
         $USD: 123
      </Text>
      <Text style={styles.instructions}>
          View Your Account 
      </Text>
	  <TouchableOpacity 
		style = {{height: 150, width: 250, paddingLeft: 20, paddingRight: 20, paddingTop: 20, backgroundColor: '#ffffff'}}
		onPress={() => { }}
	  >
		<LineChart
            style={ { height: 100, width: 200, flex: 1, justifyContent: 'flex-end'} }
            data={ data }
            svg={{ stroke: 'rgb(134, 65, 244)', fillRule: 'nonzero', fill: 'orange' }}
			showGrid= {false}
            //contentInset={ { top: 50, bottom: 20 } }
        />
	   </TouchableOpacity>
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
    height:150,
    width:null,
    //alignItems: 'center',
    //justifyContent:'center',
	resizeMode: 'contain',
	//borderBottomWidthWidthWidth: -100
  },
    image2: {
    height:220,
    width:null,
    //alignItems: 'center',
    //justifyContent:'center',
	resizeMode: 'contain',
	//borderBottomWidthWidthWidth: -100
  },
    tabbar: {
    backgroundColor:'white',
    height: 64,
    borderTopColor: 'red',
    borderTopWidth: 2
  }
});
