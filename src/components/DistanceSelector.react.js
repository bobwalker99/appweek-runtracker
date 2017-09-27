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
          <Text>{ this.state.miles ? "Miles" : "Kilometers" }</Text>
          <Switch
             style={styles.distance_switch}
             onValueChange={ (miles) => this.setState({ miles: miles }) }
             value={ this.state.miles }
          />
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
  },
});

export default DistanceSelector;