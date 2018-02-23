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
import { Button } from 'react-native';
import { TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class buysell extends Component<{}> {
	constructor(props) {
    super(props);
    
    this.state = {
      mode: 'sell'
    };
    
  }
	
  render() {
  // const { page } = this.state;
  //const background = styles[page];
 // const tabbarStyles = [styles.tabbar];
    return (
      <View>
	  <View style={{width: 400, height: 150, position: 'absolute', backgroundColor: 'steelblue'}} />
      <Text style={styles.instructions}>
          Bitcoin 
      </Text>
	<Text style={styles.welcome}>
          123 BTC 
    </Text>
	 <Text style={styles.note}>
		US$1.23
	</Text>
	//<Text> BUY </Text>
	<TouchableOpacity style = {styles.Button1}/*style = {{width: 100, height: 300}}*/
		//title={'BUY'} 
		//size = 'small'
		//color="steelblue"
		//underlayColor = 'steelblue'
		//<Text style={styles.b1}> BUY </Text>
		onPress={() => { this.setState({ mode: 'sell' }) }}
	/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
	marginTop: 30,
    fontSize: 25,
	color: '#ffffff',
	//fontWeight: "bold",
    textAlign: 'center',
    margin: 5,
  },
   note: {
	marginTop: 0,
    fontSize: 15,
	color: '#ffffff',
	//fontWeight: "bold",
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
	fontSize: 17,
    color: '#ffffff',
	fontWeight: "bold",
    marginBottom: 10,
  },
   image1: {
    height:200,
    width:100,
    alignItems: 'center',
    justifyContent:'center',
	//resizeMode: 'contain',
  },
  b1: {
    fontSize: 17,
    color: '#ffffff',
	fontWeight: "bold",
	marginTop: 20,
	marginLeft: 20,
    //alignItems: 'center',
    //justifyContent:'center',
	//resizeMode: 'contain',
  },
   Button1: {
   // backgroundColor:'steelblue',
	marginTop: 20,
	marginLeft: 20,
    height: 40,
   // borderTopColor: 'red',
    width: 120,
  },
    tabbar: {
    backgroundColor:'white',
    height: 64,
    borderTopColor: 'red',
    borderTopWidth: 2,
  }
});
