//@flow
'use strict';

import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import styles from '../Styles';

const TimeInput = (props) => {
  console.log('onHoursChange:' + JSON.stringify(props));
  return (<View style={styles.timeInput}>
      <Text>Hours</Text>
        <Picker
          selectedValue="1"
          onValueChange={onHoursChange}>
          <Picker.Item label="0" value="0" />
          <Picker.Item label="1" value="1" />
        </Picker>
        <Text>Minutes</Text>
          <Picker
            selectedValue="30"
            onValueChange={onMinutesChange}>
            <Picker.Item label="15" value="15" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="45" value="45" />
            <Picker.Item label="0" value="0" />
          </Picker>
          <Text>Seconds</Text>
          <Picker
            selectedValue="10"
            onValueChange={onSecondsChange}>
            <Picker.Item label="10" value="10" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="0" value="0" />
          </Picker>
  </View>);
};

export default TimeInput;
