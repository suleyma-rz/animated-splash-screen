//@format
//@flow

import React from 'react';
import {Animated} from 'react-native';
import styles from './index.styles';

type PropsT = {
  style?: Object,
  animatedStyle?: Object,
};

const AnimatedSquare = ({style, animatedStyle}: PropsT) => {
  return <Animated.View style={[styles.square, style, animatedStyle]} />;
};

AnimatedSquare.defaultProps = {
  style: {},
  animatedStyle: {},
};

export default AnimatedSquare;
