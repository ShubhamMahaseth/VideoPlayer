import React, {useState} from 'react';
import {View, Text, Appearance, Button} from 'react-native';
import styles from './style';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Video from 'react-native-video';

const VideoPlayer = ({navigation, route}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  Appearance.addChangeListener(theme => {
    setTheme(theme.colorScheme);
  });

  const {external, videoURL} = route.params;

  return (
    <View style={styles.container}>
      <Video
        source={external ? {uri: videoURL} : videoURL} // Can be a URL or a local file.
        style={{flex: 1, width: '100%'}}

        // ref={ref => {
        //   this.player = ref;
        // }} // Store reference
        // onBuffer={this.onBuffer} // Callback when remote video is buffering
        // onError={this.videoError} // Callback when video cannot be loaded
        // style={styles.backgroundVideo}
      />
    </View>
  );
};

export default VideoPlayer;
