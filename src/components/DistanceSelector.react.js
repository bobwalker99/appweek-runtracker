import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Slider,
    Switch
} from 'react-native';

class DistanceSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {
        distance: 0,
        miles: true,
    };
  }

  render() {
    return (
      <View style={styles.distance_container}>
          <Text>Choose your distance</Text>
          <Slider
              style={styles.distance_slider}
              step={1}
              minimumValue={0}
              maximumValue={100}
              onValueChange={ (distance) => this.setState({ distance: distance }) }
              value={ this.state.distance }
          />
          <Text>{ this.state.distance }</Text>
          <View style={styles.distance_switch}>
            <Switch
              onValueChange={ (miles) => this.setState({ miles: miles }) }
              value={ this.state.miles }
              />
              <Text>{ this.state.miles ? "Miles" : "Kilometers" }</Text>
          </View>
      </View>
    );
  }
}

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
