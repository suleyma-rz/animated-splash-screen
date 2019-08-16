/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Home from './app/screens/home';
import SplashWrapper from './app/components/splash-wrapper';
import SplashScreen from './app/screens/splash-screen-logo';

const App = () => (
  <SplashWrapper>
    <Home />
  </SplashWrapper>
);

export default App;
