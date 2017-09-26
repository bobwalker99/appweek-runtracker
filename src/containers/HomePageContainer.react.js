//@flow
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomePage from '../components/HomePage.react';
import * as strings from '../Strings.js';
import * as TimeChangeActions from '../actions/TimeChangeActions.js';

/** Called by redux when the state changes -
 *	this maps the global state to the props that this component needs
 */
const mapStateToProps = state => {
  console.log('Mapping homePage state to props:' + JSON.stringify(state));
	return {
    appTitle: strings.APP_TITLE,
    welcomeText: strings.WELCOME_TEXT
  };
};

/**
 * Wraps action creator functions in a dispatch call and makes them available
 * as properties on the wrapped component.
 */
const mapDispatchToProps = dispatch => {
  console.log('Mapping homePage dispatch to props');
  return ({
    onHoursChange: hours => dispatch(TimeChangeActions.hoursChanged(hours)),
    onSecondsChange: minutes => dispatch(TimeChangeActions.hoursChanged(minutes)),
    onMinutesChange: seconds => dispatch(TimeChangeActions.hoursChanged(seconds)),
  });
};

console.log('mapDispatchToProps:' + mapDispatchToProps);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
