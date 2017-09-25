//@flow
'use strict';

import React, { Component } from 'react';

import { Image, View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from '../Styles';

const navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
       />),
};

const HomePage = props =>
      <View style={styles.homeScreen}>
            <Text>Home</Text>
    </View>;

HomePage.navigationOptions = navigationOptions;

export default HomePage;
