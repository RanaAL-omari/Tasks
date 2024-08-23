import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';

const Task33 = () => {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(true);

  const handlePress = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={{ uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4' }}
          style={styles.video}
          paused={paused}
          controls={false}
          resizeMode="cover"
          poster="https://media.w3.org/2010/05/sintel/poster.png"
          posterResizeMode="cover"
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
    position: 'relative',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Task33;
