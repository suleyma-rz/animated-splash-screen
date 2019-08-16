//@format
//@flow

import React, {Fragment} from 'react';
import {View, StatusBar} from 'react-native';
import AnimatedLogo from '../../components/animated-logo';
import Colors from '../../styles/colors';

type PropsT = {
  onFinish: Function,
};

const SplashScreenLogo = ({onFinish}: PropsT) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.BLACK,
      }}>
      <AnimatedLogo onFinishAnimation={onFinish} />
    </View>
  );
};

export default SplashScreenLogo;
