import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useCurrentTime from '../Components/useCurrentTime_Task34';

const TimeDisplay = () => {
  const currentTime = useCurrentTime();

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{currentTime.toLocaleTimeString()}</Text>
      <Text style={styles.dateText}>{currentTime.toLocaleDateString()}</Text>
    </View>
  );
};

const Task34 = () => {
  const [showTime, setShowTime] = useState(true);

  return (
    <View style={styles.appContainer}>
      <Button title="Click Me" onPress={() => setShowTime(prev => !prev)} />
      {showTime && <TimeDisplay />}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  container: {
    marginVertical: 20,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 24,
  },
});

export default Task34;
