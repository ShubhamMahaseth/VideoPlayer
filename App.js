import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VideoPlay from './src/components/VideoPlay';
import VideoList from './src/components/VideoList';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VideoList">
        <Stack.Screen
          name="VideoPlay"
          component={VideoPlay}
          options={{title: 'Video Player'}}
        />
        <Stack.Screen
          name="VideoList"
          component={VideoList}
          options={{title: 'Video List'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
