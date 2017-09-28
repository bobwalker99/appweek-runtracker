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
          <Text>Choose your distance</Text>
          <Slider
              style={styles.distance_slider}
              step={1}
              minimumValue={0}
              maximumValue={100}
              onValueChange={ (distance) => {
                props.onDistanceChanged(distance, props.miles )
                }
              }
              value={ props.distance }
          />
          <Text>{ props.distance }</Text>
          <View style={styles.distance_switch}>
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
              <Text>{ props.miles ? "Miles" : "Kilometers" }</Text>
          </View>
      </View>;


const styles = StyleSheet.create({
  distance_container: {
    width: 300,
  },
  distance_slider: {
  },
  distance_switch: {
    width:100,
    height: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
});

export default DistanceSelector;
