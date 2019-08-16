//@format
//@flow

import React from 'react';
import {View, StyleSheet, Animated, StatusBar} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import SplashScreen from '../../screens/splash-screen-logo';
import Colors from '../../styles/colors';
import styles from './index.styles';

type PropsT = {
  children: React.Node,
};

type StateT = {
  shouldRenderSplash: boolean,
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

  removeSplash = () => {
    this.setState({shouldRenderSplash: false});
    StatusBar.setBarStyle('dark-content', true);
  };

  render() {
    return (
      <>
        {this.state.shouldRenderSplash && (
          <Animated.View
            style={{
              ...StyleSheet.absoluteFill,
              backgroundColor: Colors.WHITE,
            }}>
            <SplashScreen onFinish={this.expandMask} />
          </Animated.View>
        )}

        <MaskedView
          style={{flex: 1}}
          maskElement={
            <View style={styles.maskContainer}>
              <Animated.View
                style={{...styles.square, transform: [{scale: this.scale}]}}
              />
            </View>
          }>
          {this.props.children}
          {this.state.shouldRenderSplash && (
            <Animated.View
              style={{
                ...StyleSheet.absoluteFill,
                backgroundColor: Colors.WHITE,
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
