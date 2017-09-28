//@flow

'use strict';

import React from 'react';
import { FlatList, Picker, StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

//We're treating this as a component, so style it locally
const styles = StyleSheet.create({
    distanceInputContainer: {
      height: 100,
      flexDirection:"row",
      backgroundColor: "cyan"
    },
    labelledContainer: {
      flexDirection: "column",
    },
    label: {
      paddingTop:10,
      paddingBottom:10
    },
    distanceUnitComponent: {
      alignItems:"center",
    },
    distancePickerLabel: {
      alignItems: "center"
    },
    distancePicker: {
      width: 345,
    },
    pickerItem: {
      height:130
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

const pad = num => {
    return ("0"+num).slice(-2);
};

const hhmmss = secs => {
  var minutes = Math.floor(secs / 60);
  secs = secs%60;
  var hours = Math.floor(minutes/60)
  minutes = minutes%60;
  return pad(hours)+":"+pad(minutes)+":"+pad(secs);
}

const mmss = secs => {
  var minutes = Math.floor(secs / 60);
  secs = secs%60;
  minutes = minutes%60;
  return pad(minutes)+":"+pad(secs);
}

const DistancePicker = props =>
  <Picker style={styles.distancePicker}
              itemStyle={styles.pickerItem}
              selectedValue="5k"
              onValueChange={(val) => change(val)}>
          {pickerItemGenerator()}
  </Picker>;

const GoalsList = props =>
  <View style={styles.labelledContainer}>
    <Text>Target distance:</Text>
    <List>
      <FlatList
        data={props.goals}
        keyExtractor={item => item.distanceCalc}
        renderItem={({ item }) => (
          <View style={{flexDirection:"row"}}>
            <Text>{item.distanceLabel} |</Text>
            <Text>{hhmmss(item.time)} | </Text>
            <Text>{mmss(item.pace)} km/s</Text>
          </View>
      )} />
    </List>
  </View>;

export default GoalsList;
