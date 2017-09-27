//@flow
"use strict";

import React from "react";
import { addNavigationHelpers, TabNavigator } from "react-navigation";

import HomePageContainer from "../containers/HomePageContainer.react";

const AppNavigator = TabNavigator({
    Home: { screen: HomePageContainer }
});

const Navigator = ({ dispatch, nav }) =>
  <AppNavigator
      navigation={addNavigationHelpers({ dispatch, state: nav })}
  />;

export  { AppNavigator, Navigator };
