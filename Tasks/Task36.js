import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

function generateRandomWord(length) {
  let result = '';
  const characters = 'qwertyuiopplkjjhgkfdsmmansnsn';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const Task36 = () => {
  const randomTexts = Array.from({ length: 100 }, () => generateRandomWord(10));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {randomTexts.map((text, index) => (
        <Text key={index} style={styles.textItem}>
          {text}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  textItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Task36;
