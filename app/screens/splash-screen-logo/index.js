//@format
//@flow

import React, {Fragment} from 'react';
import {View, StatusBar} from 'react-native';
import AnimatedLogo from '../../components/animated-logo';

type PropsT = {
  onFinish: Function,
};

const SplashScreenLogo = ({onFinish}: PropsT) => {
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
        <AnimatedLogo onFinishAnimation={onFinish} />
      </View>
    </Fragment>
  );
};

export default SplashScreenLogo;
