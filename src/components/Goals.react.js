//@flow

'use strict';

import React from 'react';
import { FlatList, Picker, StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import * as DisplayCalcs from '../calcs/DisplayCalc';

//We're treating this as a component, so style it locally
const styles = StyleSheet.create({
    labelledContainer: {
      borderWidth: StyleSheet.hairlineWidth,
      height:250
    },
    listRow: {
      flexDirection:"row",
      justifyContent: 'space-between',
    },
    displayText: {
      flex: 1,
      fontSize:12,
      padding:5,
      borderWidth: 0.25,
      borderColor: '#768692'
    },
    headerText: {
      flex: 1,
      fontSize:12,
      fontWeight: 'bold',
      padding:5,
      backgroundColor: '#00A9CE',
      borderWidth: 0.5,
      borderColor: '#425563'
    }
});

//Utility for generating Picker.Items from a range
/*
const pickerItemGenerator = () => {
  return distancesInKm.map((item, index) => {
    return <Picker.Item key={index} label={item.label} value={item.distance} />
  });
}
*/

/*const DistancePicker = props =>
  <Picker style={styles.distancePicker}
              itemStyle={styles.pickerItem}
              selectedValue="5k"
              onValueChange={(val) => change(val)}>
          {pickerItemGenerator()}
  </Picker>;
*/

const GoalsList = props =>
  <View style={styles.labelledContainer}>
    <View style={styles.listRow}>
      <Text style={styles.headerText}>Target</Text>
      <Text style={styles.headerText}>Time</Text>
      <Text style={styles.headerText}>Pace (m/km)</Text>
    </View>
    <List>
      <FlatList
        data={props.goals}
        keyExtractor={item => item.distanceCalc}
        renderItem={({ item }) => (
          <View style={styles.listRow}>
            <Text style={styles.displayText}>{item.distanceLabel}</Text>
            <Text style={styles.displayText}>{DisplayCalcs.hhmmss(item.time)}</Text>
            <Text style={styles.displayText}>{DisplayCalcs.mmss(item.pace)}</Text>
          </View>
      )} />
    </List>
  </View>;

export default GoalsList;
