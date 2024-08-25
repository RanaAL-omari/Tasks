import React, { createContext, useState, useContext, Component } from 'react';
import { SafeAreaView, Text, View, TextInput } from 'react-native';

export const TextContext = createContext();

export const TextProvider = ({ children }) => {
  const [text, setText] = useState('');

  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
};

class ComponentOne extends Component {
  render() {
    return (
      <Text>{this.props.text}</Text>
    );
  }
}

const ComponentTwo = () => {
  const { text, setText } = useContext(TextContext);

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Enter text"
      />
      <ComponentOne text={text} />
    </View>
  );
};

const MainComponent = () => {
  return (
    <TextProvider>
      <View>
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
      </View>
    </TextProvider>
  );
};

const Task38 = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainComponent />
    </SafeAreaView>
  );
};

export default Task38;
