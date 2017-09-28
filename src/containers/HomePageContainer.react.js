//@flow
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

import HomePage from "../components/HomePage.react";
import * as strings from "../Strings.js";

/** Called by redux when the state changes -
 *	this maps the global state to the props that this component needs
 */
const mapStateToProps = state => {
    return {
      appTitle: strings.APP_TITLE,
      welcomeText: strings.WELCOME_TEXT
    };
};

export default connect(mapStateToProps)(HomePage);
