/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//import Navigation from './src/navigation';
import {TabNavigator} from "react-navigation"
import buysellscreen from "./src/screens/buysell";
import homescreen from "./src/screens/home";

var myTabs = TabNavigator({
	Home: {screen: homescreen},
	BuySell: {screen: buysellscreen}
},
{
	tabBarPosition: 'bottom'
}
);


export default myTabs;
/*export default class App extends Component {
  render() {
    return (
      <Navigation/>
    );
  }
} */