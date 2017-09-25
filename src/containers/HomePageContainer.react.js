//@flow
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomePage from '../components/HomePage.react';

/** Called by redux when the state changes -
 *	this maps the global state to the props that this component needs
 */
const mapStateToProps = (state) => {
  console.log('Mapping homePage state to props:' + JSON.stringify(state));
	return {};
};

/**
 * Wraps action creator functions in a dispatch call and makes them available
 * as properties on the wrapped component.
 */
const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
