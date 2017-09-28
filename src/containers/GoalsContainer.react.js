//@flow
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

import GoalsList from "../components/Goals.react";
import * as InputChangeActionCreators from "../actions/InputChangeActionCreators.js";

const mapStateToProps = state => {
  console.log("goals state: " + JSON.stringify(state));
  return {
        goals: state.inputReducer.goals
  //    distance: state.displayReducer.distance.distance,
  //    miles: state.displayReducer.distance.miles,
   };
};

const mapDispatchToProps = dispatch => ({
  //onDistanceChanged: (distance, miles) => {
    //dispatch(InputChangeActionCreators.distanceChanged(distance, miles))
  //},
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalsList);
