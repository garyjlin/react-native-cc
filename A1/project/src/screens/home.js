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
    var today = new Date ()
    //console.log(currenthour + 1)
    var day = parseInt(today.getMonth()+1)
    var realday;
    if (day < 10) {
      realday = '0'+ parseInt(today.getMonth()+1).toString()
    }
    else {
      realday = parseInt(today.getMonth()+1).toString()
    }
    var date1
    if (today.getDate() < 10) {
      date1 = today.getFullYear() + '-' + realday + '-0' + today.getDate()
  }
  else {
      date1 = today.getFullYear() + '-' + realday + '-' + today.getDate()
  }
    var test1 = moment(date1).format('DATE_RFC2822')
    console.log (test1)
    var dayofweek1 = test1.substring(5,6)
    if (today.getDate() < 10) {
      dayofweek1 = test1.substring(4,5)
    }
    console.log(dayofweek1)
    //date1 = '2018-03-30' //TEST ONLY! REMOVE AFTER
    //dayofweek1 = '6' //TEST! PLEASE REMOVE

    //recompute date if on weekend, just pure calculation function
    /*if (dayofweek1 == '6' || dayofweek1 == '7') {
      if (dayofweek1 == '6') {
        var d = today.getDate()
        var m = today.getMonth() + 1
        var y = today.getFullYear()
          if (d == 1 && m == 1) {
            y = y - 1
            date1 = y + '-' + '12' + '-' + '31'
          }
          else if (d == 1 && (m == 1 || m == 5|| m == 7|| m == 10|| m == 12)) {
            m = m - 1
            date1 = today.getFullYear()+'-'+ m + '-' + '30'
          }
          else if (d == 1 && ( m == 4 || m == 6|| m == 9|| m == 11 || m == 8)) {
            m = m - 1
            date1 = today.getFullYear()+'-'+ m + '-' + '31'
          }
          else if (d == 1 && ( m == 3)) {
            m = m - 1
            if (y%4 == 0){
              date1 = today.getFullYear()+'-'+ m + '-' + '29'
            }
            else {
              date1 = today.getFullYear()+'-'+ m + '-' + '28'
            }
          }
          else {
            m = m - 1
            date1 = today.getFullYear() + '-' + m.toString() + '-' + today.getDate()
          }
      }
      if (dayofweek1 == '7') {
        var d = today.getDate()
        var m = today.getMonth() + 1
        var y = today.getFullYear()
          if (d == 1 && m == 1) {
            y = y - 1
            date1 = y + '-' + '12' + '-' + '30'
          }
          else if (d == 2 && m == 1) {
            y = y - 1
            date1 = y + '-' + '12' + '-' + '31'
          }
          else if (d == 1 && (m == 1 || m == 5|| m == 7|| m == 10|| m == 12)) {
            m = m - 1
            date1 = today.getFullYear()+'-'+ m + '-' + '29'
          }
          else if (d == 2 && (m == 1 || m == 5|| m == 7|| m == 10|| m == 12)) {
            m = m - 1
            date1 = today.getFullYear()+'-'+ m + '-' + '30'
          }
          else if (d == 1 && ( m == 4 || m == 6|| m == 9|| m == 11 || m == 8)) {
            m = m - 1
            date1 = today.getFullYear()+'-'+ m + '-' + '30'
          }
          else if (d == 2 && ( m == 4 || m == 6|| m == 9|| m == 11 || m == 8)) {
            m = m - 1
            date1 = today.getFullYear()+'-'+ m + '-' + '31'
          }
          else if (d == 1 && ( m == 3)) {
            m = m - 1
            if (y%4 == 0){
              date1 = today.getFullYear()+'-'+ m + '-' + '28'
            }
            else {
              date1 = today.getFullYear()+'-'+ m + '-' + '27'
            }
          }
          else if (d == 2 && ( m == 3)) {
            m = m - 1
            if (y%4 == 0){
              date1 = today.getFullYear()+'-'+ m + '-' + '29'
            }
            else {
              date1 = today.getFullYear()+'-'+ m + '-' + '28'
            }
          }
          else {
            m = m - 1
            date1 = today.getFullYear() + '-' + m.toString() + '-' + today.getDate()
          }
      }
    } */ //end of calculation
    console.log(date1)
    //Fetch entire week based on days
    var week = []
    var d = today.getDate() //FIX TO SYSTEM AFTER! TEST FOR NOW
    var m = today.getMonth() + 1
    var y = today.getFullYear()
    if (dayofweek1 == '6'){
          d = d - 5
          if (d < 1) { //take in a few days from last month, not account for cross year, fix later!!!!
            m = m -1
            if (m == 1 || m == 3|| m == 5|| m == 7|| m == 8|| m == 10|| m == 12) {
              var start = 31 + d
              for (var i = 0; i <= (0-d); ++i) {
                console.log(start)
                  if (start < 10 && m < 10) {
                  week.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
                  }
                  else if (start < 10) {
                  week.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
                  }
                  else if (m < 10) {
                  week.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
                  }
                  else {
                    week.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
                  }
                  start = start + 1
              }
            }
            else if (m == 4|| m == 6|| m == 9|| m == 11) {
              var start = 30 + d
              for (var i = 0; i <= (0-d); ++i) {
                console.log(start)
                  if (start < 10 && m < 10) {
                  week.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
                  }
                  else if (start < 10) {
                  week.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
                  }
                  else if (m < 10) {
                  week.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
                  }
                  else {
                    week.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
                  }
                  start = start + 1
              }
            }
            else { //feburary month
              if (y%4 == 0) {
                var start = 29 + d
                for (var i = 0; i <= (0-d); ++i) {
                  console.log(start)
                    if (start < 10 && m < 10) {
                    week.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
                    }
                    else if (start < 10) {
                    week.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
                    }
                    else if (m < 10) {
                    week.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
                    }
                    else {
                      week.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
                    }
                    start = start + 1
                }
              }
              else{
                var start = 28 + d
                for (var i = 0; i <= (0-d); ++i) {
                  console.log(start)
                    if (start < 10 && m < 10) {
                    week.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
                    }
                    else if (start < 10) {
                    week.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
                    }
                    else if (m < 10) {
                    week.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
                    }
                    else {
                      week.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
                    }
                    start = start + 1
                }
              }
            }
            m = m + 1
            var start = d + 5 - (4-(0-d))
            for (var i = 0; i < 4-(0-d); ++i) {
              console.log(start)
                if (start < 10 && m < 10) {
                week.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
                }
                else if (start < 10) {
                week.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
                }
                else if (m < 10) {
                week.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
                }
                else {
                  week.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
                }
                start = start + 1
          }
          }
          else { //this month has enough days to cover the week
            var start = d
            for (var i = 0; i < 5; ++i) {
              console.log(start)
                if (start < 10 && m < 10) {
                week.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
                }
                else if (start < 10) {
                week.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
                }
                else if (m < 10) {
                week.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
                }
                else {
                  week.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
                }
                start = start + 1
            }
          }
      }
    else if (dayofweek1 == '7'){
            d = d - 6
            var end
            if (d < 1) { //take in a few days from last month, not account for cross year, fix later!!!!
              m = m -1
              if (m == 1 || m == 3|| m == 5|| m == 7|| m == 8|| m == 10|| m == 12) {
                var start = 31 + d
                if ((0-d) > 4) {
                  end = 4
                }
                else {
                  end = (0-d)
                }
                for (var i = 0; i <= end; ++i) {
                  console.log(start)
                    if (start < 10 && m < 10) {
                    week.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
                    }
                    else if (start < 10) {
                    week.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
                    }
                    else if (m < 10) {
                    week.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
                    }
                    else {
                      week.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
                    }
                    start = start + 1
                }
              }
              else if (m == 4|| m == 6|| m == 9|| m == 11) {
                var start = 30 + d
                if ((0-d) > 4) {
                  end = 4
                }
                else {
                  end = (0-d)
                }
                for (var i = 0; i <= end; ++i) {
                  console.log(start)
                    if (start < 10 && m < 10) {
                    week.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
                    }
                    else if (start < 10) {
                    week.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
                    }
                    else if (m < 10) {
                    week.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
                    }
                    else {
                      week.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
                    }
                    start = start + 1
                }
              }
              else { //feburary month
                if (y%4 == 0) {
                  var start = 29 + d
                  for (var i = 0; i <= (0-d); ++i) {
                    console.log(start)
                      if (start < 10 && m < 10) {
                      week.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
                      }
                      else if (start < 10) {
                      week.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
                      }
                      else if (m < 10) {
                      week.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
                      }
                      else {
                        week.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
                      }
                      start = start + 1
                  }
                }
                else{
                  var start = 28 + d
                  for (var i = 0; i <= (0-d); ++i) {
                    console.log(start)
                      if (start < 10 && m < 10) {
                      week.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
                      }
                      else if (start < 10) {
                      week.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
                      }
                      else if (m < 10) {
                      week.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
                      }
                      else {
                        week.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
                      }
                      start = start + 1
                  }
                }
              }
              m = m + 1
              var start = d + 6 - (6-(0-d) - 1)
              for (var i = 0; i < 5-(0-d)-1; ++i) {
                console.log(start)
                  if (start < 10 && m < 10) {
                  week.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
                  }
                  else if (start < 10) {
                  week.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
                  }
                  else if (m < 10) {
                  week.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
                  }
                  else {
                    week.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
                  }
                  start = start + 1
            }
            }
            else { //this month has enough days to cover the week
              var start = d
              for (var i = 0; i < 5; ++i) {
                console.log(start)
                  if (start < 10 && m < 10) {
                  week.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
                  }
                  else if (start < 10) {
                  week.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
                  }
                  else if (m < 10) {
                  week.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
                  }
                  else {
                    week.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
                  }
                  start = start + 1
              }
            }
        }
        else { //weekday cases, get the days from last week
          d = d - 7
          var count = 0
          var end
          var dow = parseInt(dayofweek1,10)
          d = d - dow + 1
          if (d < 1) {
            if (d < -4){
              end = 4
            }
            else {
              end = 0 - d
            }
            m = m - 1
            if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12){
              var start = 31 + d
              for (var i = 0; i <= end ; ++i) {
                console.log(start)
                  if (start < 10 && m < 10) {
                  week.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
                  }
                  else if (start < 10) {
                  week.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
                  }
                  else if (m < 10) {
                  week.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
                  }
                  else {
                    week.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
                  }
                  start = start + 1
                  count = count + 1
              }
            }
            else if (m == 4 || m == 6 || m == 9 || m == 11){
              var start = 30 + d
              for (var i = 0; i <= end; ++i) {
                console.log(start)
                  if (start < 10 && m < 10) {
                  week.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
                  }
                  else if (start < 10) {
                  week.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
                  }
                  else if (m < 10) {
                  week.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
                  }
                  else {
                    week.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
                  }
                  start = start + 1
                  count = count + 1
              }
            }
            else { //feburary
              if (y%4 == 0){
                var start = 29 + d
                for (var i = 0; i <= end; ++i) {
                  console.log(start)
                    if (start < 10 && m < 10) {
                    week.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
                    }
                    else if (start < 10) {
                    week.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
                    }
                    else if (m < 10) {
                    week.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
                    }
                    else {
                      week.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
                    }
                    start = start + 1
                    count = count + 1
                }
              }
              else { //non leap year
                var start = 28 + d
                for (var i = 0; i <= end; ++i) {
                  console.log(start)
                    if (start < 10 && m < 10) {
                    week.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
                    }
                    else if (start < 10) {
                    week.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
                    }
                    else if (m < 10) {
                    week.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
                    }
                    else {
                      week.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
                    }
                    start = start + 1
                    count = count + 1
                }
              }
            }
            m = m + 1
            var start = 1
            for (var i = 0; i < (5-count); ++i) {
              console.log(start)
                if (start < 10 && m < 10) {
                week.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
                }
                else if (start < 10) {
                week.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
                }
                else if (m < 10) {
                week.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
                }
                else {
                  week.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
                }
                start = start + 1
            }
          }
          else { //there are enough days in the month to perform calculation
            var start = d
            for (var i = 0; i < 5; ++i) {
              console.log(start)
                if (start < 10 && m < 10) {
                week.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
                }
                else if (start < 10) {
                week.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
                }
                else if (m < 10) {
                week.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
                }
                else {
                  week.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
                }
                start = start + 1
            }
          }
        }
        for (var i = 0; i < week.length; ++i){
          console.log('inside my week array ' + week[i])
        }
//use week array to determine last working day when used on weekends, yesterday does not skip back to last year
        var yesterday
        if (dayofweek1 == '6' || dayofweek1 == '7') {
          date1 = week[week.length-1]
          yesterday = week[week.length-2]
        }
        else if (dayofweek1 == '1' ){
          yesterday = week[week.length-1]
        }
        else{
          console.log('the day i am on to compute yester day is'+today)
          var d = today.getDate () //FIX TO SYSTEM AFTER! TEST FOR NOW
          var m = today.getMonth() + 1
          var y = today.getFullYear()
          console.log('d is '+ d + 'm is '+ m + 'y is '+ y)
          if (d == 1) {
            m = m - 1
            if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
              if (m < 10) {
                yesterday = y.toString() + '-0' + m.toString() + '-31'
              }
              else {
                yesterday = y.toString() + '-' +m.toString() + '-31'
              }
            }
            else if (m == 4 || m == 6 || m == 9 || m == 11) {
              if (m < 10) {
                yesterday = y.toString() + '-0' + m.toString() + '-30'
              }
              else {
                yesterday = y.toString() + '-' +m.toString() + '-30'
              }
            }
            else if (m == 2){
              if (y % 4 == 0) {
                yesterday = y.toString() + '-02'  + '-29'
              }
              else {
                yesterday = y.toString() + '-02' + '-28'
              }
            }
            else {
              var y2 = y - 1
              yesterday = y2.toString() + '-12' + '-31'
            }
          }
          else {
            d = d - 1
            if (d < 10 && m < 10) {
              yesterday = y.toString() + '-0' + m.toString() + '-0' + d.toString()
            }
            else if (d < 10) {
              yesterday = y.toString() + '-' + m.toString() + '-0' + d.toString()
            }
            else if (m < 10) {
            yesterday = y.toString() + '-0' + m.toString() + '-' +d.toString()
            }
            else {
              yesterday = y.toString() + '-' + m.toString() + '-' + d.toString()
            }
          }
        }

      //readjust date if it is a known holiday for the stock exchanges

      if (date1 === '2018-02-19'||date1 === '2018-05-21'||date1 === '2018-07-02'||date1 === '2018-08-06'||date1 === '2018-09-03'||date1 === '2018-10-08'||date1 === '2018-01-15'||date1 === '2018-05-28') {
        date1 = yesterday
        yesterday = week[week.length-2]
      }
      else if (yesterday === '2018-02-19'||yesterday === '2018-05-21'||yesterday === '2018-07-02'||yesterday === '2018-08-06'||yesterday === '2018-09-03'||yesterday === '2018-10-08'||yesterday === '2018-01-15'||yesterday === '2018-05-28') {
        yesterday = week[week.length-1]
      }
      else if (date1 === '2018-03-30' || date1 === '2018-12-25'|| date1 === '2018-12-26' || date1 === '2018-07-04'|| date1 === '2018-11-22') {
        date1 = yesterday
      }
     else if (yesterday === '2018-03-30') {
        yesterday = '2018-03-29'
      }
      else if (yesterday === '2018-12-25') {
        yesterday = '2018-12-24'
      }
      else if (date1 === '2018-12-26') {
        date1 = '2018-12-24'
        yesterday = '2018-12-24'
      }
      else if (yesterday === '2018-12-26') {
        yesterday = '2018-12-24'
      }
     else if (yesterday === '2018-07-04') {
        yesterday = '2018-07-03'
      }
      else if (yesterday === '2018-11-22') {
        yesterday = '2018-11-20'
      }

      console.log('yesterday is '+ yesterday)

      console.log('today is '+date1)
        // build a past month array
        m = today.getMonth()
        var montharr = []
        if (m == 1 || m == 3|| m == 5 || m == 7 || m == 8 || m == 10 || m == 12){
          var start = 1
          for (var i = 0; i < 31; ++i) {
            if (start < 10 && m < 10) {
            montharr.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
            }
            else if (start < 10) {
            montharr.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
            }
            else if (m < 10) {
            montharr.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
            }
            else {
              montharr.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
            }
            start = start + 1
          }
        }
        else if (m == 4 || m == 6|| m == 9 || m == 11 ){
          var start = 1
          for (var i = 0; i < 30; ++i) {
            if (start < 10 && m < 10) {
            montharr.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
            }
            else if (start < 10) {
            montharr.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
            }
            else if (m < 10) {
            montharr.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
            }
            else {
              montharr.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
            }
            start = start + 1
          }
        }
        else if (m==2){
          var start = 1
          var end
          if (y%4 == 0) {
            end = 29
          }
          else {
            end = 28
          }
          for (var i = 0; i < end; ++i) {
            if (start < 10 && m < 10) {
            montharr.push(today.getFullYear() + '-0' + m.toString() + '-0' + start.toString())
            }
            else if (start < 10) {
            montharr.push(today.getFullYear() + '-' + m.toString() + '-0' + start.toString())
            }
            else if (m < 10) {
            montharr.push(today.getFullYear() + '-0' + m.toString() + '-' + start.toString())
            }
            else {
              montharr.push(today.getFullYear() + '-' + m.toString() + '-' + start.toString())
            }
            start = start + 1
          }
        }
        else { // go back to prev year december
          var y1 = today.getFullYear() - 1
          var start = 1
          for (var i = 0; i < 31; ++i){
            montharr.push(y1.toString() + '-' + '12' + '-' + start.toString())
            start = start + 1
          }
        }

        //Build a year array to retrieve annual prices
        var yeararr = []
        var y1 = today.getFullYear() - 1
        if (y1%4 == 0) {//leap year
          var m1 = 1
          for (var i = 0; i < 12; ++i) {
            var start = 1
            if (m1 == 1 || m1 == 3 || m1 == 5 || m1 == 7 || m1 == 8 || m1 == 10 || m1 == 12) {
              for (var j = 0; j < 31; ++j) {
                if (start < 10 && m1 < 10) {
                yeararr.push(y1.toString() + '-0' + m1.toString() + '-0' + start.toString())
                }
                else if (start < 10) {
                yeararr.push(y1.toString() + '-' + m1.toString() + '-0' + start.toString())
                }
                else if (m1 < 10) {
                yeararr.push(y1.toString() + '-0' + m1.toString() + '-' + start.toString())
                }
                else {
                  yeararr.push(y1.toString() + '-' + m1.toString() + '-' + start.toString())
                }
                start = start + 1
              }
            }
            else if (m1 == 4 || m1== 6 || m1== 9 || m1== 11) {
              for (var j = 0; j < 30; ++j) {
                if (start < 10 && m1 < 10) {
                yeararr.push(y1.toString() + '-0' + m1.toString() + '-0' + start.toString())
                }
                else if (start < 10) {
                yeararr.push(y1.toString() + '-' + m1.toString() + '-0' + start.toString())
                }
                else if (m1 < 10) {
                yeararr.push(y1.toString() + '-0' + m1.toString() + '-' + start.toString())
                }
                else {
                  yeararr.push(y1.toString() + '-' + m1.toString() + '-' + start.toString())
                }
                start = start + 1
              }
            }
            else {
              for (var j = 0; j < 29; ++j) {
                if (start < 10 && m1 < 10) {
                yeararr.push(y1.toString() + '-0' + m1.toString() + '-0' + start.toString())
                }
                else if (start < 10) {
                yeararr.push(y1.toString() + '-' + m1.toString() + '-0' + start.toString())
                }
                else if (m1 < 10) {
                yeararr.push(y1.toString() + '-0' + m1.toString() + '-' + start.toString())
                }
                else {
                  yeararr.push(y1.toString() + '-' + m1.toString() + '-' + start.toString())
                }
                start = start + 1
              }
            }
                m1 = m1 + 1
          }
        }
        else{//normal non leap year
          var m1 = 1
          for (var i = 0; i < 12; ++i) {
            var start = 1
            if (m1 == 1 || m1 == 3 || m1 == 5 || m1 == 7 || m1 == 8 || m1 == 10 || m1 == 12) {
              for (var j = 0; j < 31; ++j) {
                if (start < 10 && m1 < 10) {
                yeararr.push(y1.toString() + '-0' + m1.toString() + '-0' + start.toString())
                }
                else if (start < 10) {
                yeararr.push(y1.toString() + '-' + m1.toString() + '-0' + start.toString())
                }
                else if (m1 < 10) {
                yeararr.push(y1.toString() + '-0' + m1.toString() + '-' + start.toString())
                }
                else {
                  yeararr.push(y1.toString() + '-' + m1.toString() + '-' + start.toString())
                }
                start = start + 1
              }
            }
            else if (m1 == 4 || m1== 6 || m1== 9 || m1== 11) {
              for (var j = 0; j < 30; ++j) {
                if (start < 10 && m1 < 10) {
                yeararr.push(y1.toString() + '-0' + m1.toString() + '-0' + start.toString())
                }
                else if (start < 10) {
                yeararr.push(y1.toString() + '-' + m1.toString() + '-0' + start.toString())
                }
                else if (m1 < 10) {
                yeararr.push(y1.toString() + '-0' + m1.toString() + '-' + start.toString())
                }
                else {
                  yeararr.push(y1.toString() + '-' + m1.toString() + '-' + start.toString())
                }
                start = start + 1
              }
            }
            else {
              for (var j = 0; j < 28; ++j) {
                if (start < 10 && m1 < 10) {
                yeararr.push(y1.toString() + '-0' + m1.toString() + '-0' + start.toString())
                }
                else if (start < 10) {
                yeararr.push(y1.toString() + '-' + m1.toString() + '-0' + start.toString())
                }
                else if (m1 < 10) {
                yeararr.push(y1.toString() + '-0' + m1.toString() + '-' + start.toString())
                }
                else {
                  yeararr.push(y1.toString() + '-' + m1.toString() + '-' + start.toString())
                }
                start = start + 1
              }
            }
                m1 = m1 + 1
          }
        }
    //var dow =test1.day();
    var ch
    var istoday
    var h = today.getHours()
    if (h > 16) {
      istoday = true
      ch = 16
    }
    else if (h < 11){
      istoday = false
      ch = 16
    }
    else{
      istoday = true
      ch = h
    }
    ch = ch.toString()
    this.state = {stock: 'Microsoft',
      date: date1,//date1 ,
      pastdate: yesterday,
      time: ':00',
      minute: '1',
      hour: '10',
      interval: 'daily',
      refreshing: false,
      modalVisible: false,
      apidata: [],
      apidata2: [],
      currenthour: ch, //TEST ONLY! REMOVE AFTER!
      lastweek: week,
      lastmonth: montharr,
      lastyear: yeararr,
      todayh: istoday, //TEST ONLY! REMOVE AFTER!
      rfc2822: ''
    }
    if (istoday == false) {
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
                                                    [this.state.pastdate + ' '+this.state.hour +':00'+this.state.time]
                                                    ['4. close'],10)
                SampleArray.push(close_price);
                console.log(close_price)
                console.log(min)
              }
              else if ( j < 10) {
                  var  close_price = parseInt(response['Time Series (1min)']
                                                    [this.state.pastdate + ' '+ this.state.hour +':0'+this.state.minute+this.state.time]
                                                    ['4. close'],10)
                SampleArray.push(close_price);
                min = min + 1;
                this.setState({minute: min.toString()})
                console.log(close_price)
                console.log(min)
              }
              else {
                  var  close_price = parseInt(response['Time Series (1min)']
                                                  [this.state.pastdate + ' ' + this.state.hour +':'+this.state.minute+this.state.time]
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
        //console.log(date1)
      }
      else {
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
                      if (response['Time Series (1min)'][this.state.date + ' '+this.state.hour +':00'+this.state.time]) {
                        var  close_price = parseInt(response['Time Series (1min)']
                                                          [this.state.date + ' '+this.state.hour +':00'+this.state.time]
                                                          ['4. close'],10)
                        SampleArray.push(close_price);
                      console.log(close_price)
                      console.log(min)
                    }
                  }
                  else if ( j < 10) {
                      if (response['Time Series (1min)'][this.state.date + ' '+ this.state.hour +':0'+this.state.minute+this.state.time]) {
                        var  close_price = parseInt(response['Time Series (1min)']
                                                          [this.state.date + ' '+ this.state.hour +':0'+this.state.minute+this.state.time]
                                                          ['4. close'],10)
                        SampleArray.push(close_price);
                      min = min + 1;
                      this.setState({minute: min.toString()})
                      console.log(close_price)
                      console.log(min)
                    }
                  }
                  else {
                      if (response['Time Series (1min)'][this.state.date + ' ' + this.state.hour +':'+this.state.minute+this.state.time]) {
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
      }
  }

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

//find a business date one before today
  FindPrevDate (date) {
    var today = date
    var d = parseInt(today.substring(8,9),10)
    var m = parseInt(today.substring(5,6),10)
    var y = parseInt(today.substring(0,3),10)
    if (d = 1) {
      m = m - 1
      if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
        if (m < 10) {
          yesterday = y.toString() + '-0' + m.toString() + '-31'
        }
        else {
          yesterday = y.toString() + '-' +m.toString() + '-31'
        }
      }
      else if (m == 4 || m == 6 || m == 9 || m == 11) {
        if (m < 10) {
          yesterday = y.toString() + '-0' + m.toString() + '-30'
        }
        else {
          yesterday = y.toString() + '-' +m.toString() + '-30'
        }
      }
      else if (m == 2){
        if (y % 4 == 0) {
          yesterday = y.toString() + '-02'  + '-29'
        }
        else {
          yesterday = y.toString() + '-02' + '-28'
        }
      }
      else {
        var y2 = y - 1
        yesterday = y2.toString() + '-12' + '-31'
      }
    }
    else {
      d = d - 1
      if (d < 10 && m < 10) {
        yesterday = y.toString() + '-0' + m.toString() + '-0' + d.toString()
      }
      else if (d < 10) {
        yesterday = y.toString() + '-' + m.toString() + '-0' + d.toString()
      }
      else if (m < 10) {
      yesterday = y.toString() + '-0' + m.toString() + '-' +d.toString()
      }
      else {
        yesterday = y.toString() + '-' + m.toString() + '-' + d.toString()
      }
    }
    return yesterday
  }

  _onRefresh() {
    if (this.state.todayh == false) {
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
                                                    [this.state.pastdate + ' '+this.state.hour +':00'+this.state.time]
                                                    ['4. close'],10)
                SampleArray.push(close_price);
                console.log(close_price)
                console.log(min)
              }
              else if ( j < 10) {
                  var  close_price = parseInt(response['Time Series (1min)']
                                                    [this.state.pastdate + ' '+ this.state.hour +':0'+this.state.minute+this.state.time]
                                                    ['4. close'],10)
                SampleArray.push(close_price);
                min = min + 1;
                this.setState({minute: min.toString()})
                console.log(close_price)
                console.log(min)
              }
              else {
                  var  close_price = parseInt(response['Time Series (1min)']
                                                  [this.state.pastdate + ' ' + this.state.hour +':'+this.state.minute+this.state.time]
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
        //console.log(date1)
      }
      else {
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
                      if (response['Time Series (1min)'][this.state.date + ' '+this.state.hour +':00'+this.state.time]) {
                        var  close_price = parseInt(response['Time Series (1min)']
                                                          [this.state.date + ' '+this.state.hour +':00'+this.state.time]
                                                          ['4. close'],10)
                        SampleArray.push(close_price);
                      console.log(close_price)
                      console.log(min)
                    }
                  }
                  else if ( j < 10) {
                      if (response['Time Series (1min)'][this.state.date + ' '+ this.state.hour +':0'+this.state.minute+this.state.time]) {
                        var  close_price = parseInt(response['Time Series (1min)']
                                                          [this.state.date + ' '+ this.state.hour +':0'+this.state.minute+this.state.time]
                                                          ['4. close'],10)
                        SampleArray.push(close_price);
                      min = min + 1;
                      this.setState({minute: min.toString()})
                      console.log(close_price)
                      console.log(min)
                    }
                  }
                  else {
                      if (response['Time Series (1min)'][this.state.date + ' ' + this.state.hour +':'+this.state.minute+this.state.time]) {
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
      }
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
            onPress={() => {//this.setState({currenthour: 16})
                              console.log(this.state.currenthour)
                              if (parseInt(this.state.currenthour,10) <= 16 && parseInt(this.state.currenthour,10) >= 11 && this.state.todayh == true) {
                                console.log('todays price are being displayed')
                                fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&outputsize=full&apikey=V9TWS1DHAOGM19LS')
                                  .then((response) => response.json())
                                  .then(
                                    (response) => {
                                      var SampleArray = [];
                                      var hr = parseInt(this.state.currenthour, 10) - 1
                                      console.log('price for the hour'+hr)
                                      this.setState({currenthour: hr.toString()})
                                      var min = 1;
                                      for (var i=0; i < 1 ; i++) {
                                        for (var j = 0; j < 59; ++j) {
                                          if (j == 0){
                                              var  close_price = parseInt(response['Time Series (1min)']
                                                                                [this.state.date + ' '+this.state.currenthour +':00'+this.state.time]
                                                                                ['4. close'],10)
                                            SampleArray.push(close_price);
                                            console.log(close_price)
                                            console.log(min)
                                          }
                                          else if ( j < 10) {
                                              var  close_price = parseInt(response['Time Series (1min)']
                                                                                [this.state.date + ' '+ this.state.currenthour +':0'+this.state.minute+this.state.time]
                                                                                ['4. close'],10)
                                            SampleArray.push(close_price);
                                            min = min + 1;
                                            this.setState({minute: min.toString()})
                                            console.log(close_price)
                                            console.log(min)
                                          }
                                          else {
                                              var  close_price = parseInt(response['Time Series (1min)']
                                                                              [this.state.date + ' ' + this.state.currenthour +':'+this.state.minute+this.state.time]
                                                                              ['4. close'],10)
                                            SampleArray.push(close_price);
                                            min = min + 1;
                                            this.setState({minute: min.toString()})
                                            console.log(close_price)
                                            console.log(min)
                                          }
                                        }
                                        min = 1;
                                        this.setState({minute: min.toString()})
                                        console.log(this.state.minute)
                                        //console.log(close_price)
                                        //this.setState({price: close_price})
                                      }
                                      this.setState({apidata2: SampleArray})
                                      console.log(this.state.currenthour)
                                    }).catch(
                                      (error) => {
                                        console.log(error);
                                      }
                                    )

                              }
                              else if (this.state.todayh==false) {
                                fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&outputsize=full&apikey=V9TWS1DHAOGM19LS')
                                  .then((response) => response.json())
                                  .then(
                                    (response) => {
                                      var SampleArray = [];
                                      var hr = parseInt(this.state.currenthour, 10) - 1
                                      this.setState({currenthour: hr.toString()})
                                      var min = 1;
                                      for (var i=0; i < 1 ; i++) {
                                        for (var j = 0; j < 59; ++j) {
                                          if (j == 0){
                                              var  close_price = parseInt(response['Time Series (1min)']
                                                                                [this.state.pastdate + ' '+this.state.currenthour +':00'+this.state.time]
                                                                                ['4. close'],10)
                                            SampleArray.push(close_price);
                                            console.log(close_price)
                                            console.log(min)
                                          }
                                          else if ( j < 10) {
                                              var  close_price = parseInt(response['Time Series (1min)']
                                                                                [this.state.pastdate + ' '+ this.state.currenthour +':0'+this.state.minute+this.state.time]
                                                                                ['4. close'],10)
                                            SampleArray.push(close_price);
                                            min = min + 1;
                                            this.setState({minute: min.toString()})
                                            console.log(close_price)
                                            console.log(min)
                                          }
                                          else {
                                              var  close_price = parseInt(response['Time Series (1min)']
                                                                              [this.state.pastdate + ' ' + this.state.currenthour +':'+this.state.minute+this.state.time]
                                                                              ['4. close'],10)
                                            SampleArray.push(close_price);
                                            min = min + 1;
                                            this.setState({minute: min.toString()})
                                            console.log(close_price)
                                            console.log(min)
                                          }
                                        }
                                        min = 1;
                                        this.setState({minute: min.toString()})
                                        console.log(this.state.minute)
                                        //console.log(close_price)
                                        //this.setState({price: close_price})
                                      }
                                      this.setState({apidata2: SampleArray})
                                    }).catch(
                                      (error) => {
                                        console.log(error);
                                      }
                                    )
                                    console.log(this.state.currenthour)
                              }
                              /*else {
                                this.setState({currenthour: '16'})
                                fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&outputsize=full&apikey=V9TWS1DHAOGM19LS')
                                  .then((response) => response.json())
                                  .then(
                                    (response) => {
                                      var SampleArray = [];
                                      var hr = parseInt(this.state.currenthour, 10) - 1
                                      this.setState({currenthour: hr.toString()})
                                      var min = 1;
                                      for (var i=0; i < 1 ; i++) {
                                        for (var j = 0; j < 59; ++j) {
                                          if (j == 0){
                                              var  close_price = parseInt(response['Time Series (1min)']
                                                                                [this.state.date + ' '+this.state.currenthour +':00'+this.state.time]
                                                                                ['4. close'],10)
                                            SampleArray.push(close_price);
                                            console.log(close_price)
                                            console.log(min)
                                          }
                                          else if ( j < 10) {
                                              var  close_price = parseInt(response['Time Series (1min)']
                                                                                [this.state.date + ' '+ this.state.currenthour +':0'+this.state.minute+this.state.time]
                                                                                ['4. close'],10)
                                            SampleArray.push(close_price);
                                            min = min + 1;
                                            this.setState({minute: min.toString()})
                                            console.log(close_price)
                                            console.log(min)
                                          }
                                          else {
                                              var  close_price = parseInt(response['Time Series (1min)']
                                                                              [this.state.date + ' ' + this.state.currenthour +':'+this.state.minute+this.state.time]
                                                                              ['4. close'],10)
                                            SampleArray.push(close_price);
                                            min = min + 1;
                                            this.setState({minute: min.toString()})
                                            console.log(close_price)
                                            console.log(min)
                                          }
                                        }
                                        min = 1;
                                        this.setState({minute: min.toString()})
                                        console.log(this.state.minute)
                                        //console.log(close_price)
                                        //this.setState({price: close_price})
                                      }
                                      this.setState({apidata2: SampleArray})
                                      console.log(this.state.currenthour)
                                      console.log('correct case')
                                    }).catch(
                                      (error) => {
                                        console.log(error);
                                      }
                                    )

                              }*/ //dont need the else case for now
             }}
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
            onPress={() => {  if (this.state.todayh == false) {
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
                                                              [this.state.pastdate + ' '+this.state.hour +':00'+this.state.time]
                                                              ['4. close'],10)
                          SampleArray.push(close_price);
                          console.log(close_price)
                          console.log(min)
                        }
                        else if ( j < 10) {
                            var  close_price = parseInt(response['Time Series (1min)']
                                                              [this.state.pastdate + ' '+ this.state.hour +':0'+this.state.minute+this.state.time]
                                                              ['4. close'],10)
                          SampleArray.push(close_price);
                          min = min + 1;
                          this.setState({minute: min.toString()})
                          console.log(close_price)
                          console.log(min)
                        }
                        else {
                            var  close_price = parseInt(response['Time Series (1min)']
                                                            [this.state.pastdate + ' ' + this.state.hour +':'+this.state.minute+this.state.time]
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
                  //console.log(date1)
                }
                else {
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
                                if (response['Time Series (1min)'][this.state.date + ' '+this.state.hour +':00'+this.state.time]) {
                                  var  close_price = parseInt(response['Time Series (1min)']
                                                                    [this.state.date + ' '+this.state.hour +':00'+this.state.time]
                                                                    ['4. close'],10)
                                  SampleArray.push(close_price);
                                console.log(close_price)
                                console.log(min)
                              }
                            }
                            else if ( j < 10) {
                                if (response['Time Series (1min)'][this.state.date + ' '+ this.state.hour +':0'+this.state.minute+this.state.time]) {
                                  var  close_price = parseInt(response['Time Series (1min)']
                                                                    [this.state.date + ' '+ this.state.hour +':0'+this.state.minute+this.state.time]
                                                                    ['4. close'],10)
                                  SampleArray.push(close_price);
                                min = min + 1;
                                this.setState({minute: min.toString()})
                                console.log(close_price)
                                console.log(min)
                              }
                            }
                            else {
                                if (response['Time Series (1min)'][this.state.date + ' ' + this.state.hour +':'+this.state.minute+this.state.time]) {
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
                }}}
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
            onPress={() => {fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=60min&outputsize=fill&apikey=V9TWS1DHAOGM19LS')
                             .then((response) => response.json())
                             .then(
                             (response) => {
                              var SampleArray = [];
                              var count = 10;
                              for (var i=0; i < 4 ; i++) {
                                for (var j = 0; j < 7; ++j) {
                                 var  close_price = parseInt(response['Time Series (60min)'][this.state.lastweek[i]+ ' ' + this.state.hour +':00:00']['4. close'],10)
                                 SampleArray.push(close_price);
                                 count = count + 1;
                                this.setState({hour: count.toString()})
                                  console.log(close_price)
                                }
                              count = 10
                              this.setState({hour: count.toString()})
                             }
                             this.setState({apidata2: SampleArray})
                             }).catch(
                             (error) => {
                              console.log(error);
                            }
                   )}}
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
            onPress={() => {fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=full&apikey=V9TWS1DHAOGM19LS') //monthly price data
                             .then((response) => response.json())
                             .then(
                             (response) => {
                              var SampleArray = [];
                              for (var i=0; i < this.state.lastmonth.length; ++i) {
                                  if (response['Time Series (Daily)'][this.state.lastmonth[i]]) {
                                   var  close_price = parseInt(response['Time Series (Daily)'][this.state.lastmonth[i]]['4. close'],10)
                                   SampleArray.push(close_price);
                                  console.log(close_price)
                                  }
                                }
                             this.setState({apidata2: SampleArray})
                             }).catch(
                             (error) => {
                              console.log(error);
                            }
                   ) }}
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
            onPress={() => {fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=full&apikey=V9TWS1DHAOGM19LS') //monthly price data
                             .then((response) => response.json())
                             .then(
                             (response) => {
                              var SampleArray = [];
                              for (var i=0; i < this.state.lastyear.length; ++i) {
                                  if (response['Time Series (Daily)'][this.state.lastyear[i]]) {
                                   var  close_price = parseInt(response['Time Series (Daily)'][this.state.lastyear[i]]['4. close'],10)
                                   SampleArray.push(close_price);
                                  console.log(close_price)
                                  }
                                }
                             this.setState({apidata2: SampleArray})
                             }).catch(
                             (error) => {
                              console.log(error);
                            }
                   ) }}
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
