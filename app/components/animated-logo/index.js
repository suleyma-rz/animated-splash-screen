//@format
//@flow

import React from 'react';
import {Animated, View} from 'react-native';
import {squareSize} from '../animated-square/index.styles';
import LogoSquare from './logo-square';

type PropsT = {
  onFinishAnimation?: Function,
};

const AnimatedLogo = ({onFinishAnimation}: PropsT) => {
  const logoSize = squareSize * 3;

  const animation = Animated.sequence([Animated.delay(5000)]).start(() => {
    onFinishAnimation && onFinishAnimation();
  });

  return (
    <View
      style={{
        width: logoSize,
        height: logoSize,
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <LogoSquare position="topLeft" />
      <LogoSquare position="topRight" />
      <LogoSquare position="bottomLeft" />
    </View>
  );
};

AnimatedLogo.defaultProps = {
  onFinishAnimation: () => {},
};

export default AnimatedLogo;
