import {StyleSheet, Dimensions} from 'react-native';
export const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  video: {
    position: 'absolute',
    top: Dimensions.get('screen').width / 1.56,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: 225,
  },
  designContainer: {
    top: Dimensions.get('screen').height / 1.94,
    flexDirection: 'row-reverse',
    marginLeft: 10,
  },
});

export const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  video: {
    position: 'absolute',
    top: Dimensions.get('screen').width / 1.56,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: 225,
  },
});
