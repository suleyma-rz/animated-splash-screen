//@format
//@flow

import React, {Fragment} from 'react';
import {View, StatusBar} from 'react-native';
import AnimatedLogo from '../../components/animated-logo';

const SplashScreenLogo = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
        }}>

        <AnimatedLogo />
      </View>
    </Fragment>
  );
};

export default SplashScreenLogo;
