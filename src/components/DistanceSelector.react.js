import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Slider,
    Switch
} from 'react-native';
import * as Calcs from '../calcs/DisplayCalc';

const DistanceSelector = props =>
      <View style={styles.distance_container}>
          <Text>Choose your distance:</Text>
          <View style={styles.sliderContainer}>
            <Text>0</Text>
            <Slider
                style={styles.distance_slider}
                step={1}
                value={ props.distance }
                minimumValue={0}
                maximumValue={ props.max }
                onValueChange={ (distance) => {
                    props.onDistanceChanged(distance, props.miles )
                  }
                }
            />
            <Text>{props.max}</Text>
          </View>
          <View style={styles.distanceSwitchContainer}>
          <Text style={styles.distanceValue}>{ props.distance }</Text>
          <View style={styles.distance_switch}>
              <Text style={styles.switchLabel}>{ props.miles ? "Miles" : "Kilometers" }</Text>
              <Switch
                onValueChange={ (miles) => {
                    const distance = Calcs.calculateDisplayDistanceOnUnitChange(props.distance,
                                                                                props.miles,
                                                                                miles);
                    props.onDistanceChanged(distance, miles);
                  }
                }
                value={ props.miles }
                />
            </View>
          </View>
      </View>;

const styles = StyleSheet.create({
  sliderContainer: {
    flex:1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height:50,
  },
  distance_container: {
    flex:1,
    width: 300,
  },
  distance_slider: {
    flex:1,
    height: 10,
  },
  distanceSwitchContainer: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    height:35,
  },
  distanceValue: {
    fontSize: 25,
    fontWeight: 'bold',
    width: 100,
    paddingLeft: 5,
  },
  distance_switch: {
    width:100,
    height: 35,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  switchLabel: {
    paddingRight:10
  }
});

export default DistanceSelector;
