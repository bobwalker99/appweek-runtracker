//@flow
'use strict';

import React, { Component } from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';

//Utility for generating Picker.Items from a range
const pickerItemGenerator = (arraySize) => {
  const timeArray = [...Array(arraySize).keys()];
  return timeArray.map((item, index) => {
    return <Picker.Item key={index} label={item.toString()} value={index} />
  });
}

//We're treating this as a component, so style it locally
const styles = StyleSheet.create({
    timeInputContainer: {
      height: 100,
      flexDirection:"row"
    },
    labelledContainer: {
      flexDirection: "column",
    },
    label: {
      paddingTop:10,
      paddingBottom:10
    },
    timeUnitComponent: {
      flex:1,
      flexDirection: "row",
      alignItems:"center"
    },
    timePickerLabel: {
      alignItems: "center",
    },
    timePicker: {
      width: 45
    },
    pickerItem: {
      height:130
    }
});

const TimeInputComponent = ({selectedVal, change, numItems, label}) =>
        <View style={styles.timeUnitComponent}>
            <Picker style={styles.timePicker} itemStyle={styles.pickerItem}
                    selectedValue={selectedVal}
                    onValueChange={(val) => change(val)}>
                    {pickerItemGenerator(numItems)}
            </Picker>
            <Text style={styles.timePickerLabel}>{label}</Text>
        </View>;

const TimeInput = props =>
  <View style={styles.labelledContainer}>
    <Text style={styles.label}>Choose your time:</Text>
    <View style={styles.timeInputContainer}>
        <TimeInputComponent selectedVal={props.hours}
                          change={props.onHoursChanged}
                          numItems={12}
                          label="hours" />
        <TimeInputComponent selectedVal={props.minutes}
                          change={props.onMinutesChanged}
                          numItems={60}
                          label="mins" />
        <TimeInputComponent selectedVal={props.seconds}
                          change={props.onSecondsChanged}
                          numItems={60}
                          label="secs" />
    </View>
  </View>;

export default TimeInput;
