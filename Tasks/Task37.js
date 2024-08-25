import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, RefreshControl } from 'react-native';

function generateRandomWord(length) {
  let result = '';
  const characters = 'qwertyuiopplkjjhgkfdsmmansnsn';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const Task37 = () => {
  const [randomTexts, setRandomTexts] = useState(
    Array.from({ length: 100 }, () => generateRandomWord(10))
  );
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRandomTexts(Array.from({ length: 100 }, () => generateRandomWord(10)));
      setRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
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

export default Task37;
