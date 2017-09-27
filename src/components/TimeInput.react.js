//@flow
'use strict';

import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import styles from '../Styles';

const pickerItemGenerator = (arraySize) => {
  const timeArray = [...Array(arraySize).keys()];
  return timeArray.map((item, index) => {
    return <Picker.Item key={index} label={item.toString()} value={index} />
  });
}

const TimeInput = props =>
  <View style={styles.timeInput}>
      <Text>Hours</Text>
      <Picker
        selectedValue={props.hours}
        onValueChange={(val) => props.onHoursChanged(val)}>
        {pickerItemGenerator(12)}
      </Picker>
      <Text>Minutes</Text>
      <Picker
        selectedValue={props.minutes}
        onValueChange={(val) => props.onMinutesChanged(val)}>
        {pickerItemGenerator(60)}
      </Picker>
      <Text>Seconds</Text>
      <Picker
        selectedValue={props.seconds}
        onValueChange={(val) => props.onSecondsChanged(val)}>
        {pickerItemGenerator(60)}
      </Picker>
  </View>;

export default TimeInput;
