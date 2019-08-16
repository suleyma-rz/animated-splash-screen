//@format
//@flow

import React from 'react';
import {Animated} from 'react-native';
import AnimatedSquare from '../animated-square';
import {squareSize} from '../animated-square/index.styles';

const position = 2 * squareSize;

class TopLeftSquare extends React.Component {
  translateX: any = new Animated.Value(0);
  translateY: any = new Animated.Value(0);

  /*duration:800
  delay:400*/
  startAnimation = () => {
    Animated.sequence([
      Animated.timing(this.translateX, {
        toValue: position,
        duration: 400,
      }),
      Animated.timing(this.translateY, {
        toValue: position,
        duration: 400,
        delay: 400,
      }),
      Animated.timing(this.translateX, {
        toValue: 0,
        duration: 400,
        delay: 400,
      }),
      Animated.timing(this.translateY, {
        toValue: 0,
        duration: 400,
        delay: 400,
      }),
    ]).start();
  };

  componentDidMount(): void {
    this.startAnimation();
  }

  render() {
    return (
      <AnimatedSquare
        style={{top: 0, left: 0}}
        animatedStyle={{
          transform: [
            {translateX: this.translateX},
            {translateY: this.translateY},
          ],
        }}
      />
    );
  }
}

export default TopLeftSquare;
