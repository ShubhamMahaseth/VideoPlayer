import React, {useState} from 'react';
import {View, Text, Appearance} from 'react-native';
import {lightStyles, darkStyles} from './style';
import {VideoPlayer} from 'react-native-video-library';

const VideoPlay = ({navigation, route}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const [pause, setPause] = useState();
  console.log(pause);
  Appearance.addChangeListener(theme => {
    setTheme(theme.colorScheme);
  });

  const {external, videoURL} = route.params;

  return (
    <View
      style={theme == 'dark' ? darkStyles.container : lightStyles.container}>
      <VideoPlayer
        videoThumbnailImg={{
          uri: 'https://i.ytimg.com/vi/YE7VzlLtp-4/maxresdefault.jpg',
        }}
        videoSource={{uri: videoURL}}
        reloadIconColor={'white'}
        videoLoadingBackgroundColor={'gray'}
        videoLoadingBackgroundOpacity={0.3}
        videoLoadingSpinnerColor={'white'}
        pauseIconSize={55}
        volumeMinimumTrackTintColor={'white'}
        volumeMaximumTrackTintColor={'black'}
        volumeThumbTintColor={'white'}
        volumeOverlayOpacity={0.9}
        onVideoPause={time => {
          setPause(time);
        }}
        resumeVideoFrom={pause}
      />
      <View
        style={
          theme == 'dark'
            ? darkStyles.designContainer
            : lightStyles.designContainer
        }></View>
    </View>
  );
};

export default VideoPlay;
