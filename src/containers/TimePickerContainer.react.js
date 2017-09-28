//@flow
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

import TimePicker from "../components/TimeInput.react";
import * as strings from "../Strings.js";
import * as InputChangeActionCreators from "../actions/InputChangeActionCreators.js";

/** Called by redux when the state changes -
 *	this maps the global state to the props that this component needs
 */
const mapStateToProps = state => ({
        hours: state.inputReducer.recordedTime.hours,
        minutes: state.inputReducer.recordedTime.minutes,
        seconds: state.inputReducer.recordedTime.seconds,
});

/**
 * Wraps action creator functions in a dispatch call and makes them available
 * as properties on the wrapped component.
 */
const mapDispatchToProps = dispatch => ({
    onHoursChanged: (hours) => {dispatch(InputChangeActionCreators.hoursChanged(hours))},
    onMinutesChanged: (minutes) => {dispatch(InputChangeActionCreators.minutesChanged(minutes))},
    onSecondsChanged: (seconds) => {dispatch(InputChangeActionCreators.secondsChanged(seconds))},
});

export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);
