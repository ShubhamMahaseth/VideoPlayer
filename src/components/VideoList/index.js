import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Appearance} from 'react-native';
import {themeBlack, themeWhite} from './style';

const VideoList = ({navigation}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  Appearance.addChangeListener(theme => {
    setTheme(theme.colorScheme);
  });

  return (
    <View style={theme == 'dark' ? themeBlack.wrapper : themeWhite.wrapper}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('VideoPlay', {
            external: true,
            videoURL: 'https://www.w3schools.com/html/mov_bbb.mp4',
          })
        }
        style={theme == 'dark' ? themeBlack.container : themeWhite.container}>
        <Text
          style={
            theme == 'dark'
              ? themeBlack.textContainer
              : themeWhite.textContainer
          }>
          External Video
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VideoList;
