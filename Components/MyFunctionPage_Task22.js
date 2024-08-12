import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyFunctionPage from '../MyFunctionPage';



const MyFunctionPage = () => {
  const [text, setText] = useState('Initial Text');

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <MyFunctionPage onTextChange={handleTextChange} />

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
    fontSize: 20,
    marginBottom: 20,
  },
});

export default MyFunctionPage;
