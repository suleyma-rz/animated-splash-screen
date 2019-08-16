//@format
//@flow

import React from 'react';
import {View} from 'react-native';
import {squareSize} from '../animated-square/index.styles';
import AnimatedSquare from '../animated-square';
import TopLeftSquare from './top-left-square';
import TopRightSquare from './top-right-square';
import BottomLeftSquare from './bottom-left-square';

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
      <TopLeftSquare />
      <TopRightSquare />
      <AnimatedSquare style={{top: squareSize, left: squareSize}} />
      <BottomLeftSquare />
    </View>
  );
};

export default AnimatedLogo;
