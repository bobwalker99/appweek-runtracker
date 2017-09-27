import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Slider,
    Switch
} from 'react-native';

const DistanceSelector = props =>
      <View style={styles.distance_container}>
          <Text>Choose your distance</Text>
          <Slider
              style={styles.distance_slider}
              step={1}
              minimumValue={0}
              maximumValue={100}
              onValueChange={ (distance) => {
                console.log('PROPS: ' + JSON.stringify(props));
                props.onDistanceChanged(distance, props.miles )
                }
              }
              value={ props.distance }
          />
          <Text>{ props.distance }</Text>
          <View style={styles.distance_switch}>
            <Switch
              onValueChange={ (miles) => {
                  var distance = props.distance;
                  console.log('pre-distance: ' + distance + " miles:" + miles + ", props: " + JSON.stringify(props));
                  if (props.miles && !miles) {
                    //was miles, convert to km
                    distance = distance * 1.609344;
                  }
                  else if (!props.miles && miles) {
                    //was km convert to miles
                    distance = distance / 1.609344;
                  }
                  distance = Math.round(distance * 100) / 100;
                  console.log('post-distance: ' + distance);
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
