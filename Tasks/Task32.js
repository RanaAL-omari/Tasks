import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';

const Task32 = () => {
  const [paused, setPaused] = useState(true);

  const togglePlayPause = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={togglePlayPause} style={styles.videoContainer}>
        <Video
          source={{ uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4' }} 
          style={styles.video}
          poster="https://media.w3.org/2010/05/sintel/poster.png" 
          posterResizeMode="cover"
          paused={paused}
          resizeMode="contain"
        />
        {paused && (
          <Image
            source={{ uri: 'https://media.w3.org/2010/05/sintel/poster.png' }}
            style={styles.poster}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  videoContainer: {
    width: '100%',
    height: 300,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  poster: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default Task32;
