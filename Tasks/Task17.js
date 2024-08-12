import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Task17 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handlePress = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <Button title={isVisible ? "Hide" : "Show"} onPress={handlePress} />
      {isVisible && <Text style={styles.text}>Rana Alomari</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});

export default Task17;
