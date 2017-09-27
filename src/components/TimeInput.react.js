//@flow
'use strict';

import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import styles from '../Styles';

const TimeInput = props =>
  <View style={styles.timeInput}>
      <Text>Hours</Text>
      <Picker
        selectedValue="js"
        onValueChange={props.onHoursChanged}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
  </View>;

export default TimeInput;
