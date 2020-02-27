/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Route from './src/config/route.js';

export default class RootApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Route />;
  }
};