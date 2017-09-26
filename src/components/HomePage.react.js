//@flow
'use strict';

import React, { Component } from 'react';

import { Image, View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TimeInput from './TimeInput.react';
import styles from '../Styles';
import * as strings from '../Strings';

const navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
       />),
};

const AppHeader = ({props}) =>
    <View style={styles.header}>
        <Text style={styles.titleText}>{props.appTitle}</Text>
        <Image style={{width: 90, height: 35 }} source={require('../../img/nhs-logo.png')} />
    </View>;

const HomePage = props => {
  console.log('Props:' + JSON.stringify(props));
    return (<View style={styles.homeScreen}>
        <AppHeader props={props} />
        <View>
            <Text>{props.welcomeText}</Text>
            <TimeInput props={props} />
        </View>
    </View>);
  };

HomePage.navigationOptions = navigationOptions;

export default HomePage;