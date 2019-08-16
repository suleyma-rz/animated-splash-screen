import {StyleSheet} from 'react-native';

export const squareSize = 35;
const WHITE = '#FFFFFF';

const styles = StyleSheet.create({
  square: {
    width: squareSize,
    height: squareSize,
    backgroundColor: WHITE,
    position: 'absolute',
  },
});

export default styles;
