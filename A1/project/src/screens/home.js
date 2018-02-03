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
import Tabs from 'react-native-tabs';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Home extends Component<{}> {
  render() {
	 // const { page } = this.state;
  //const background = styles[page];
 // const tabbarStyles = [styles.tabbar];
    return (
      <View>
	  <Text style={styles.welcome}>
          $USD: 123
      </Text>
      <Text style={styles.instructions}>
          View your account 
      </Text>
   <Image
          style={{width: 50, height: 50}}
          source={{uri: 'http://www.marketoracle.co.uk/images/2013/Feb/Microsoft_share_price_chart.jpg'}}
        />
	  <View style={{width: 400, height: 300, backgroundColor: 'steelblue'}} />

		
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
	marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 3,
  },
    tabbar: {
    backgroundColor:'white',
    height: 64,
    borderTopColor: 'red',
    borderTopWidth: 2
  }
});
