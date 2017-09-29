//@flow
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

import DistanceSelector from "../components/DistanceSelector.react";
import * as InputChangeActionCreators from "../actions/InputChangeActionCreators.js";

const mapStateToProps = state => {
  return {
      distance: state.inputReducer.recordedDistance.distance,
      miles: state.inputReducer.recordedDistance.miles,
      max: state.inputReducer.max,
   };
};

const mapDispatchToProps = dispatch => ({
  onDistanceChanged: (distance, miles) => {
    dispatch(InputChangeActionCreators.recordedDistanceChanged(distance, miles))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DistanceSelector);
