//@flow
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

import HomePage from "../components/HomePage.react";
import * as strings from "../Strings.js";
import * as TimeChangeActionCreators from "../actions/TimeChangeActionCreators.js";

/** Called by redux when the state changes -
 *	this maps the global state to the props that this component needs
 */
const mapStateToProps = state => {
    console.log("Mapping homePage state to props:" + JSON.stringify(state));
    return {
      appTitle: strings.APP_TITLE,
      welcomeText: strings.WELCOME_TEXT
    };
};

/**
 * Wraps action creator functions in a dispatch call and makes them available
 * as properties on the wrapped component.


 const bindActionsToDispatch = dispatch =>
 (
   {
     actionCreator1 : () => {dispatch(actionCreator1())},
     actionCreator2 : (e) => {dispatch(actionCreator2(e))}
   }
 )
 */
const mapDispatchToProps = dispatch => ({
    onHoursChanged : (hours) => {dispatch(TimeChangeActionCreators.hoursChanged(hours))},
    onMinutesChanged : (minutes) => {dispatch(TimeChangeActionCreators.minutesChanged(minutes))},
    onSecondsChanged : (seconds) => {dispatch(TimeChangeActionCreators.secondsChanged(seconds))},
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
