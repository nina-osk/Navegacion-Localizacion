/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import MainNavigator from './navigation';


export default function App() {
  return(
  <Provider store={store}>
    <MainNavigator/>
  </Provider>)
}