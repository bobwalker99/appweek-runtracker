//@flow
"use strict";

import React, { Component } from "react";

import { Image, View, Text } from "react-native";
import { TabNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import GoalsContainer from "../containers/GoalsContainer.react"
import DistanceSliderContainer from "../containers/DistanceSliderContainer.react"
import TimePickerContainer from "../containers/TimePickerContainer.react";
import styles from "../Styles";
import * as strings from "../Strings";

const navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
          name={focused ? "ios-home" : "ios-home-outline"}
          size={26}
          style={{ color: tintColor }}
       />)
};

const AppHeader = ({appTitle}) =>
    <View style={styles.header}>
        <Text style={styles.titleText}>{appTitle}</Text>
        <Image style={{width: 90, height: 35 }} source={require("../../img/nhs-logo.png")} />
    </View>;

const HomePage = props =>
    <View style={styles.homeScreen}>
        <AppHeader appTitle={props.appTitle} />
        <View style={styles.mainPanel}>
            <DistanceSliderContainer />
            <TimePickerContainer />
            <GoalsContainer />
        </View>
    </View>;

export default HomePage;
