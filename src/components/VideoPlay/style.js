import {StyleSheet, Dimensions} from 'react-native';
export const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  video: {
    position: 'absolute',
    top: Dimensions.get('screen').width / 1.76,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: 245,
  },
  designContainer: {
    top: Dimensions.get('screen').height / 1.99,
    flexDirection: 'row-reverse',
    marginLeft: 15,
  },
});

export const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  video: {
    position: 'absolute',
    top: Dimensions.get('screen').width / 1.76,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: 245,
  },
  designContainer: {
    top: Dimensions.get('screen').height / 1.99,
    flexDirection: 'row-reverse',
    marginLeft: 15,
  },
});
