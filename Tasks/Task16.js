
import React, { useState,Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Task16 = () => {
  const [showText, setShowText] = useState(false);

  const handlePress = () => {
    setShowText(!showText);
  };

  return (
    <View style={styles.container}>
      <Button title= "Show" onPress={handlePress} />
      {showText && <Text style={styles.text}>Rana Alomari</Text>}
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

export default Task16;
