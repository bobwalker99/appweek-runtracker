//@flow
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

import TimePicker from "../components/TimeInput.react";
import * as strings from "../Strings.js";
import * as TimeChangeActionCreators from "../actions/TimeChangeActionCreators.js";

/** Called by redux when the state changes -
 *	this maps the global state to the props that this component needs
 */
const mapStateToProps = state => {
  console.log('TIME STATE: MF ' + JSON.stringify(state));
    return {
        hours: state.displayReducer.time.hours,
        minutes: state.displayReducer.time.minutes,
        seconds: state.displayReducer.time.seconds,
     };
};

/**
 * Wraps action creator functions in a dispatch call and makes them available
 * as properties on the wrapped component.
 */
const mapDispatchToProps = dispatch => ({
    onHoursChanged: (hours) => {dispatch(TimeChangeActionCreators.hoursChanged(hours))},
    onMinutesChanged: (minutes) => {dispatch(TimeChangeActionCreators.minutesChanged(minutes))},
    onSecondsChanged: (seconds) => {dispatch(TimeChangeActionCreators.secondsChanged(seconds))},
});

export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);
