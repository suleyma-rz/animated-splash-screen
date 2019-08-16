//@format
//@flow

import React from 'react';
import {Animated} from 'react-native';
import AnimatedSquare from '../animated-square';
import {squareSize} from '../animated-square/index.styles';

const position = 2 * squareSize;

const timeConfig = {duration: 400, delay: 400};

type PropsT = {
  position: 'topLeft' | 'topRight' | 'bottomLeft',
};

const positionStyles = {
  topLeft: {top: 0, left: 0},
  topRight: {top: 0, right: 0},
  bottomLeft: {bottom: 0, left: 0},
};

class LogoSquare extends React.Component<PropsT> {
  translateX: any = new Animated.Value(0);
  translateY: any = new Animated.Value(0);
  scale: any = new Animated.Value(1);

  topLeftAnimation = Animated.sequence([
    Animated.timing(this.translateX, {
      ...timeConfig,
      toValue: position,
    }),
    Animated.timing(this.translateY, {
      ...timeConfig,
      toValue: position,
    }),
    Animated.timing(this.translateX, {
      ...timeConfig,
      toValue: 0,
    }),
    Animated.timing(this.translateY, {
      ...timeConfig,
      toValue: 0,
    }),
    Animated.parallel([
      Animated.timing(this.translateY, {
        ...timeConfig,
        toValue: squareSize,
      }),
      Animated.timing(this.translateX, {
        ...timeConfig,
        toValue: squareSize,
      }),
    ]),
    Animated.delay(400),
    Animated.timing(this.scale, {
      ...timeConfig,
      toValue: 0,
    }),
  ]);

  topRightAnimation = Animated.sequence([
    Animated.timing(this.translateY, {
      ...timeConfig,
      toValue: position,
    }),
    Animated.timing(this.translateX, {
      ...timeConfig,
      toValue: -position,
    }),
    Animated.timing(this.translateY, {
      ...timeConfig,
      toValue: 0,
    }),
    Animated.timing(this.translateX, {
      ...timeConfig,
      toValue: 0,
    }),
    Animated.parallel([
      Animated.timing(this.translateX, {
        ...timeConfig,
        toValue: -squareSize,
      }),
      Animated.timing(this.translateY, {
        ...timeConfig,
        toValue: squareSize,
      }),
    ]),
    Animated.delay(400),
    Animated.timing(this.scale, {
      ...timeConfig,
      toValue: 0,
    }),
  ]);

  bottomLeftAnimation = Animated.sequence([
    Animated.timing(this.translateY, {
      ...timeConfig,
      toValue: -position,
    }),
    Animated.timing(this.translateX, {
      ...timeConfig,
      toValue: position,
    }),
    Animated.timing(this.translateY, {
      ...timeConfig,
      toValue: 0,
    }),
    Animated.timing(this.translateX, {
      ...timeConfig,
      toValue: 0,
    }),
    Animated.parallel([
      Animated.timing(this.translateX, {
        ...timeConfig,
        toValue: squareSize,
      }),
      Animated.timing(this.translateY, {
        ...timeConfig,
        toValue: -squareSize,
      }),
    ]),
    Animated.delay(400),
    Animated.timing(this.scale, {
      ...timeConfig,
      toValue: 0,
    }),
  ]);

  startAnimation = () => {
    const animations = {
      topLeft: this.topLeftAnimation,
      topRight: this.topRightAnimation,
      bottomLeft: this.bottomLeftAnimation,
    };

    const currentAnimation = animations[this.props.position];

    currentAnimation.start();
  };

  componentDidMount(): void {
    this.startAnimation();
  }

  render() {
    return (
      <AnimatedSquare
        style={positionStyles[this.props.position]}
        animatedStyle={{
          transform: [
            {translateX: this.translateX},
            {translateY: this.translateY},
            {scale: this.scale},
          ],
        }}
      />
    );
  }
}

export default LogoSquare;
