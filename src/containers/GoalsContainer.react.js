//@flow
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

import GoalsList from "../components/Goals.react";
import * as InputChangeActionCreators from "../actions/InputChangeActionCreators.js";

const mapStateToProps = state => {
  return {
        goals: state.inputReducer.goals
   };
};

export default connect(mapStateToProps)(GoalsList);
