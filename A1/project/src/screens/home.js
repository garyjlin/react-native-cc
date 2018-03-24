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
  TouchableOpacity,
  ScrollView,
  Modal,
  RefreshControl
} from 'react-native';

import moment from 'moment';

import { LineChart, YAxis, XAxis } from 'react-native-svg-charts';

import Svg,{Polyline} from 'react-native-svg';

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

  constructor(props) {
    super(props);
    var today = new Date ();
    var day = parseInt(today.getMonth()+1)
    var realday;
    if (day < 10) {
      realday = '0'+ parseInt(today.getMonth()+1).toString()
    }
    else {
      realday = parseInt(today.getMonth()+1).toString()
    }
    var date1 = today.getFullYear() + '-' + realday + '-' + today.getDate()
    var test1 = moment('2018-03-03').format('DATE_RFC2822')
    //var dow =test1.day();
    console.log(test1);
    this.state = {stock: 'Microsoft',
      date: date1 ,
      time: ':00',
      minute: '1',
      hour: '10',
      interval: 'daily',
      refreshing: false,
      modalVisible: true,
      apidata: [],
      apidata2: []
    }
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&outputsize=full&apikey=V9TWS1DHAOGM19LS')
      .then((response) => response.json())
      .then(
        (response) => {
          var SampleArray = [];
          var hr = 10;
          var min = 1;
          for (var i=0; i < 6 ; i++) {
            for (var j = 0; j < 59; ++j) {
              if (j == 0){
                  var  close_price = parseInt(response['Time Series (1min)']
                                                    [this.state.date + ' '+this.state.hour +':00'+this.state.time]
                                                    ['4. close'],10)
                SampleArray.push(close_price);
                console.log(close_price)
                console.log(min)
              }
              else if ( j < 10) {
                  var  close_price = parseInt(response['Time Series (1min)']
                                                    [this.state.date + ' '+ this.state.hour +':0'+this.state.minute+this.state.time]
                                                    ['4. close'],10)
                SampleArray.push(close_price);
                min = min + 1;
                this.setState({minute: min.toString()})
                console.log(close_price)
                console.log(min)
              }
              else {
                  var  close_price = parseInt(response['Time Series (1min)']
                                                  [this.state.date + ' ' + this.state.hour +':'+this.state.minute+this.state.time]
                                                  ['4. close'],10)
                SampleArray.push(close_price);
                min = min + 1;
                this.setState({minute: min.toString()})
                console.log(close_price)
                console.log(min)
              }
            }
            hr = hr + 1;
            this.setState({hour: hr.toString()})
            min = 1;
            this.setState({minute: min.toString()})
            console.log(this.state.minute)
            //console.log(close_price)
            //this.setState({price: close_price})
          }
          this.setState({apidata: SampleArray})
          this.setState({apidata2: SampleArray})
          hr = 10;
          this.setState({hour: hr.toString()})
        }).catch(
          (error) => {
            console.log(error);
          }
        )
        console.log(date1)
  }

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  _onRefresh() {
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&outputsize=full&apikey=V9TWS1DHAOGM19LS')
      .then((response) => response.json())
      .then(
        (response) => {
          var SampleArray = [];
          var hr = 10;
          var min = 1;
          for (var i=0; i < 6 ; i++) {
            for (var j = 0; j < 59; ++j) {
              if (j == 0){
                  var  close_price = parseInt(response['Time Series (1min)']
                                                    [this.state.date + ' '+this.state.hour +':00'+this.state.time]
                                                    ['4. close'],10)
                  SampleArray.push(close_price);
                console.log(close_price)
                console.log(min)
              }
              else if ( j < 10) {
                  var  close_price = parseInt(response['Time Series (1min)']
                                                    [this.state.date + ' '+ this.state.hour +':0'+this.state.minute+this.state.time]
                                                    ['4. close'],10)
                  SampleArray.push(close_price);
                min = min + 1;
                this.setState({minute: min.toString()})
                console.log(close_price)
                console.log(min)
              }
              else {
                  var  close_price = parseInt(response['Time Series (1min)']
                                                  [this.state.date + ' ' + this.state.hour +':'+this.state.minute+this.state.time]
                                                  ['4. close'],10)
                  SampleArray.push(close_price);
                min = min + 1;
                this.setState({minute: min.toString()})
                console.log(close_price)
                console.log(min)
              }
            }
            hr = hr + 1;
            this.setState({hour: hr.toString()})
            min = 1;
            this.setState({minute: min.toString()})
            console.log(this.state.minute)
            //console.log(close_price)
            //this.setState({price: close_price})
          }
          this.setState({apidata: SampleArray})
          hr = 10;
          this.setState({hour: hr.toString()})
        }).catch(
          (error) => {
            console.log(error);
          }
        )
      this.setState({refreshing: false});
  }

  render() {
	const data = [ 10, 0, 10, 10, -50, -80, 70, 80] //sample data
  const contentInset = { top: 5, bottom: 5}
  const contentInset2 = { left: 5, right: 5}
    return (
		<ScrollView style={{flex:1}}
      refreshControl={
          <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
          />
        }>
			<View style={{flex:1, justifyContent: 'center'}}>
				<View style={{width: 400, height: 120, position: 'absolute', backgroundColor: 'steelblue'}}/>
				<Text style={styles.welcome}>
					$USD: 123
				</Text>
				<Text style={styles.instructions}>
					View Your Account
				</Text>
			</View>
			<View style={{flex: 3, justifyContent: 'space-between'}}>
				<View style={styles.Chartpos}>
					<TouchableOpacity
						style = {styles.Chartbutton}
						onPress={() => { this.openModal () }}
					>
          <View style={{flex: 3, flexDirection: 'row'}}>
          <YAxis
                  data={this.state.apidata}
                  style={{flex: 1, height: 100,}}
                  contentInset={ contentInset }
                  svg={{
                      fill: 'green',
                      fontSize: 8,
                  }}
                  formatLabel={ value => `${value}$` }
          />
					<LineChart
						style={styles.Chartlinesize}
						data={ this.state.apidata }
						svg={{ stroke: 'rgb(134, 65, 244)'}}
						showGrid= {true}
						numberOfTicks={10}
					/>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            </View>
            <View style={{flex: 5}}>
            <XAxis
              style={{ paddingTop: 10, marginHorizontal: 0}}
              data={ this.state.apidata }
              spacing={0.2}
              formatLabel={ value => 'hour ' + value }
              contentInset={{ contentInset2 }}
              svg={{ fontSize: 5 }}
              />
              </View>
            </View>
					</TouchableOpacity>
				</View>
        <View style={styles.Chartpos}>
					<TouchableOpacity
						style = {styles.Chartbutton}
						onPress={() => { }}
					>
          <View style={{flex: 3, flexDirection: 'row'}}>
          <YAxis
                  data={this.state.apidata}
                  style={{flex: 1, height: 100,}}
                  contentInset={ contentInset }
                  svg={{
                      fill: 'green',
                      fontSize: 8,
                  }}
                  formatLabel={ value => `${value}$` }
          />
					<LineChart
						style={styles.Chartlinesize}
						data={ this.state.apidata }
						svg={{ stroke: 'rgb(134, 65, 244)'}}
						showGrid= {true}
						numberOfTicks={10}
					/>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            </View>
            <View style={{flex: 5}}>
            <XAxis
              style={{ paddingTop: 10, marginHorizontal: 0}}
              data={ this.state.apidata }
              spacing={0.2}
              formatLabel={ value => 'day ' + value }
              contentInset={{ contentInset2 }}
              svg={{ fontSize: 5 }}
              />
              </View>
            </View>
					</TouchableOpacity>
				</View>
        <View style={styles.Chartpos}>
					<TouchableOpacity
						style = {styles.Chartbutton}
						onPress={() => { }}
					>
          <View style={{flex: 3, flexDirection: 'row'}}>
          <YAxis
                  data={this.state.apidata}
                  style={{flex: 1, height: 100,}}
                  contentInset={ contentInset }
                  svg={{
                      fill: 'green',
                      fontSize: 8,
                  }}
                  formatLabel={ value => `${value}$` }
          />
					<LineChart
						style={styles.Chartlinesize}
						data={ this.state.apidata }
						svg={{ stroke: 'rgb(134, 65, 244)'}}
						showGrid= {true}
						numberOfTicks={10}
					/>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            </View>
            <View style={{flex: 5}}>
            <XAxis
              style={{ paddingTop: 10, marginHorizontal: 0}}
              data={ this.state.apidata }
              spacing={0.2}
              formatLabel={ value => 'day ' + value }
              contentInset={{ contentInset2 }}
              svg={{ fontSize: 5 }}
              />
              </View>
            </View>
					</TouchableOpacity>
				</View>
        <View style={styles.Chartpos}>
					<TouchableOpacity
						style = {styles.Chartbutton}
						onPress={() => { }}
					>
          <View style={{flex: 3, flexDirection: 'row'}}>
          <YAxis
                  data={this.state.apidata}
                  style={{flex: 1, height: 100,}}
                  contentInset={ contentInset }
                  svg={{
                      fill: 'green',
                      fontSize: 8,
                  }}
                  formatLabel={ value => `${value}$` }
          />
					<LineChart
						style={styles.Chartlinesize}
						data={ this.state.apidata }
						svg={{ stroke: 'rgb(134, 65, 244)'}}
						showGrid= {true}
						numberOfTicks={10}
					/>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            </View>
            <View style={{flex: 5}}>
            <XAxis
              style={{ paddingTop: 10, marginHorizontal: 0}}
              data={ this.state.apidata }
              spacing={0.2}
              formatLabel={ value => 'day ' + value }
              contentInset={{ contentInset2 }}
              svg={{ fontSize: 5 }}
              />
              </View>
            </View>
					</TouchableOpacity>
				</View>
			</View>
      <Modal
        visible={this.state.modalVisible}
        animationType={'slide'}
        onRequestClose={() => this.closeModal()}
      >
        <View style={{flex: 1}}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
              style = {{flex: 1, backgroundColor: 'steelblue', height: 50}}
              onPress={() => { this.closeModal() }}
            >
                <Text style={{//textAlign: 'left',
                	            fontSize: 17,
                              color: '#ffffff',
                	            fontWeight: "bold",
                              flex: 1,
                              marginTop: 9}}>X</Text>
            </TouchableOpacity>
            <View style={{flex: 12}}>
              <View style={{width: 400, height: 50, position: 'absolute', backgroundColor: 'steelblue'}} />
              <Text style={styles.instructions1}> {this.state.stock} </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 8}}>
        <View style={styles.Chartpos1}>
          <TouchableOpacity
            style = {styles.Chartbutton1}
            onPress={() => { }}
          >
          <View style={{flex: 3, flexDirection: 'row'}}>
          <YAxis
                  data={this.state.apidata2}
                  style={{flex: 1, height: 200,}}
                  contentInset={ contentInset }
                  svg={{
                      fill: 'green',
                      fontSize: 8,
                  }}
                  formatLabel={ value => `${value}$` }
          />
          <LineChart
            style={styles.Chartlinesize1}
            data={ this.state.apidata2 }
            svg={{ stroke: 'rgb(134, 65, 244)'}}
            showGrid= {true}
            numberOfTicks={10}
          />
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            </View>
            <View style={{flex: 5}}>
            <XAxis
              style={{ paddingTop: 20, marginHorizontal: 0}}
              data={ this.state.apidata2 }
              spacing={0.2}
              formatLabel={ value => 'day ' + value }
              contentInset={{ contentInset2 }}
              svg={{ fontSize: 5 }}
              />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15}}>
          <TouchableOpacity
            style = {{backgroundColor: 'steelblue',
        	            marginTop: 30,
                      flex: 1,
        	            marginLeft: 10,
                      marginRight: 10,
                      height: 40,
                      width: 30,}}
            onPress={() => { }}
            >
              <Text style={{fontSize: 10,
                            color: '#000000',
            	              fontWeight: "bold",
            	              marginTop: 13,
            	              marginLeft: 15,
                            alignItems: 'center',}}> 1 H </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {{backgroundColor: 'steelblue',
                      marginTop: 30,
                      flex: 1,
                      marginLeft: 10,
                      marginRight: 10,
                      height: 40,
                      width: 30,}}
            onPress={() => { }}
            >
              <Text style={{fontSize: 10,
                            color: '#000000',
                            fontWeight: "bold",
                            marginTop: 13,
                            marginLeft: 15,
                            alignItems: 'center',}}> 1 D </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {{backgroundColor: 'steelblue',
                      marginTop: 30,
                      flex: 1,
                      marginLeft: 10,
                      marginRight: 10,
                      height: 40,
                      width: 30,}}
            onPress={() => { }}
            >
              <Text style={{fontSize: 10,
                            color: '#000000',
                            fontWeight: "bold",
                            marginTop: 13,
                            //marginRight: 10,
                            marginLeft: 15,
                            alignItems: 'center',}}> 1 W </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {{backgroundColor: 'steelblue',
                      marginTop: 30,
                      flex: 1,
                      marginLeft: 10,
                      marginRight: 10,
                      height: 40,
                      width: 30,}}
            onPress={() => { }}
            >
              <Text style={{fontSize: 10,
                            color: '#000000',
                            fontWeight: "bold",
                            marginTop: 13,
                            //marginRight: 10,
                            marginLeft: 15,
                            alignItems: 'center',}}> 1 M </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {{backgroundColor: 'steelblue',
                      marginTop: 30,
                      flex: 1,
                      marginLeft: 10,
                      height: 40,
                      width: 30,}}
            onPress={() => { }}
            >
              <Text style={{fontSize: 10,
                            color: '#000000',
                            fontWeight: "bold",
                            marginTop: 13,
                            //marginRight: 10,
                            marginLeft: 15,
                            alignItems: 'center',}}> 1 Y </Text>
          </TouchableOpacity>
        </View>
        </View>

      </Modal>
		</ScrollView>
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
    //fontWeight: "bold",
    marginBottom: 10,
  },
  instructions1: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
    fontWeight: "bold",
    marginTop: 8,
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
	Chartbutton: {
		height: 150,
		width: 250,
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 20,
		backgroundColor: '#ffffff'
  },
  Chartbutton1: {
    height: 300,
    width: 300,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 20,
    backgroundColor: '#ffffff'
  },
  Chartlinesize: {
    flex: 3,
	  height: 100,
	  width: 200
  },
  Chartlinesize1: {
    flex: 3,
    height: 200,
    width: 200
  },
  Chartpos: {
	  paddingLeft: 55,
	  paddingBottom: 25
  },
  Chartpos1: {
    paddingLeft: 18,
    paddingBottom: 25,
    paddingTop: 20
  },
    tabbar: {
    backgroundColor:'white',
    height: 64,
    borderTopColor: 'red',
    borderTopWidth: 2
  }
});
