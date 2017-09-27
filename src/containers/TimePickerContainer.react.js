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
    return {  };
};

/**
 * Wraps action creator functions in a dispatch call and makes them available
 * as properties on the wrapped component.
 */
const mapDispatchToProps = dispatch => ({
    onHoursChanged: (hours) => {dispatch(TimeChangeActionCreators.hoursChanged(hours))},
    onMinutesChanged: TimeChangeActionCreators.minutesChanged,
    onSecondsChanged: TimeChangeActionCreators.secondsChanged
});

export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);
