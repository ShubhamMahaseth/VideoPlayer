import React, {useState} from 'react';
import {View, Text, Appearance} from 'react-native';
import {lightStyles, darkStyles} from './style';
import Video from 'react-native-video';
import Expand from '../../assets/Expand.svg';

const VideoPlayer = ({navigation, route}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  Appearance.addChangeListener(theme => {
    setTheme(theme.colorScheme);
  });

  const {external, videoURL} = route.params;

  return (
    <View
      style={theme == 'dark' ? darkStyles.container : lightStyles.container}>
      <Video
        source={external ? {uri: videoURL} : videoURL} // Can be a URL or a local file.
        resizeMode="cover"
        controls={true}
        paused
        repeat={true}
        style={theme == 'dark' ? darkStyles.video : lightStyles.video}
      />
      <View
        style={
          theme == 'dark'
            ? darkStyles.designContainer
            : lightStyles.designContainer
        }>
        <Expand width={20} height={20} />
        {/* <Text style={{color: 'white'}}>shubham</Text> */}
      </View>
    </View>
  );
};

export default VideoPlayer;
