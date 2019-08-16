//@format
//@flow

import React from 'react';
import {View, Dimensions, Text, Animated} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import AnimatedLogo from '../../components/animated-logo';
import SplashScreen from '../../screens/splash-screen-logo';
import {squareSize} from '../animated-square/index.styles';

type PropsT = {
  children: React.Node,
};

type StateT = {
  shouldRenderSplash: boolean,
};

const absoluteFill = {
  zIndex: 999,
  position: 'absolute',
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

class SplashWrapper extends React.Component<PropsT, StateT> {
  scale: any = new Animated.Value(1);

  state = {
    shouldRenderSplash: true,
  };

  expandMask = () =>
    Animated.sequence([
      Animated.timing(this.scale, {
        duration: 50,
        toValue: 0.5,
      }),
      Animated.timing(this.scale, {
        duration: 700,
        toValue: 100,
      }),
    ]).start(() => this.removeSplash());

  animateOpacity = () =>
    this.scale.interpolate({
      inputRange: [1, 100],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

  animateBackgroundOpacity = () =>
    this.scale.interpolate({
      inputRange: [1, 100],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

  removeSplash = () => {
    this.setState({shouldRenderSplash: false});
  };

  /*<SplashScreen onFinish={this.removeSplash} />*/
  render() {
    return (
      <>
        {/*This will be the animation*/}
        {this.state.shouldRenderSplash && (
          <Animated.View
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              backgroundColor: '#FFFFFF',
            }}>
            <SplashScreen onFinish={this.expandMask} />
          </Animated.View>
        )}

        <MaskedView
          style={{flex: 1}}
          maskElement={
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
              }}>
              <Animated.View
                style={{
                  width: squareSize,
                  height: squareSize,
                  backgroundColor: 'black',
                  transform: [{scale: this.scale}],
                }}
              />
            </View>
          }>
          {/* Shows behind the mask, you can put anything here, such as an image */}
          {this.props.children}
          {this.state.shouldRenderSplash && (
            <Animated.View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundColor: '#FFFFFF',
                opacity: this.animateOpacity(),
              }}
            />
          )}
        </MaskedView>
      </>
    );
  }
}

export default SplashWrapper;
