import React, { useState } from 'react';
import { SafeAreaView, Button, StyleSheet } from 'react-native';
import MyFunctionPage from '../Components/MyClassComponent_Task21';



const Task21 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handlePress = () => {
    setIsVisible(!isVisible);
  };

  return (
    <SafeAreaView style={(StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    })).container}>
      <Button title={isVisible ? "Hide" : "Show"} onPress={handlePress} />
      <MyFunctionPage visible={isVisible} />
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default Task21;
