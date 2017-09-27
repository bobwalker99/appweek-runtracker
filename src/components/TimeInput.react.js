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
        onValueChange={(val, pos) => props.onHoursChanged(val, pos)}>
        {pickerItemGenerator(12)}
      </Picker>
      <Text>Minutes</Text>
      <Picker
        onValueChange={(val, pos) => props.onMinutesChanged(val, pos)}>
        {pickerItemGenerator(60)}
      </Picker>
      <Text>Seconds</Text>
      <Picker
        onValueChange={(val, pos) => props.onSecondsChanged(val, pos)}>
        {pickerItemGenerator(60)}
      </Picker>
  </View>;

export default TimeInput;
