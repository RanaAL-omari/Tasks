import React, { Component, createContext, useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextContext = createContext();

class ComponentOne extends Component {
  static contextType = TextContext;

  render() {
    const { text } = this.context;

    return (
      <View style={styles.componentOneContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}


const ComponentTwo = () => {
  const { text, setText } = useContext(TextContext);

  return (
    <View style={styles.componentTwoContainer}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter text here"
      />
      <ComponentOne />
    </View>
  );
};

const Task38 = () => {
  const [text, setText] = useState('');

  return (
    <TextContext.Provider value={{ text, setText }}>
      <View style={styles.mainContainer}>
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
      </View>
    </TextContext.Provider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
  },
  componentOneContainer: {
    marginVertical: 10,
  },
  componentTwoContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default Task38;
