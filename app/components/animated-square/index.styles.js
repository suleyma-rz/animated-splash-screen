import {StyleSheet} from 'react-native';
import Colors from '../../styles/colors';

export const squareSize = 35;

const styles = StyleSheet.create({
  square: {
    width: squareSize,
    height: squareSize,
    position: 'absolute',
    backgroundColor: Colors.WHITE,
  },
});

export default styles;
