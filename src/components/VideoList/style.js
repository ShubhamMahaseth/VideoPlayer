import {StyleSheet} from 'react-native';
export const themeBlack = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    marginTop: 20,
    elevation: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#DFC8C8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  textContainer: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
});

export const themeWhite = StyleSheet.create({
  wrapper: {backgroundColor: 'black', flex: 1, flexDirection: 'column'},
  container: {
    marginTop: 20,
    elevation: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#DFC8C8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  textContainer: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
});
