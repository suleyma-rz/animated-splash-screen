//@format
//@flow

import React from 'react';
import {View} from 'react-native';
import {squareSize} from '../animated-square/index.styles';
import AnimatedSquare from '../animated-square';

type PropsT = {};

const AnimatedLogo = ({}: PropsT) => {
  const logoSize = squareSize * 3;

  return (
    <View
      style={{
        width: logoSize,
        height: logoSize,
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <AnimatedSquare style={{top: 0, left: 0}} />
      <AnimatedSquare style={{top: 0, right: 0}} />
      <AnimatedSquare style={{top: squareSize, left: squareSize}} />
      <AnimatedSquare style={{bottom: 0, left: 0}} />
    </View>
  );
};

export default AnimatedLogo;
