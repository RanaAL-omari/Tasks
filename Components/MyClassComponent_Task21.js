import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyFunctionPage = ({ visible }) => {
  useEffect(() => {
    if (visible) {
      console.log(' loaded');
    } else {
      console.log(' unloaded');
    }

    return () => {
      if (visible) {
        console.log(' cleaned up');
      }
    };
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Function Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default MyFunctionPage;
