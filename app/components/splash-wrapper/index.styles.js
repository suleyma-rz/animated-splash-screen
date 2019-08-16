import {StyleSheet} from 'react-native';
import Colors from '../../styles/colors';

export const squareSize = 35;

const styles = StyleSheet.create({
  square: {
    width: squareSize,
    height: squareSize,
    backgroundColor: Colors.BLACK,
  },
  maskContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});

export default styles;
