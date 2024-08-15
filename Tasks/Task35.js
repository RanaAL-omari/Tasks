import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Task35 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await AsyncStorage.getItem('userData');
        if (data) {
          const parsedData = JSON.parse(data);
          const currentTime = new Date().getTime();
          const timeDifference = currentTime - new Date(parsedData.timestamp).getTime();

          if (timeDifference < 60000) { // أقل من دقيقة
            setName(parsedData.name);
            setAge(parsedData.age);
            setCountry(parsedData.country);
          }
        }
      } catch (error) {
        console.error('Error loading data', error);
      }
    };

    loadData();
  }, []);

  const handleSubmit = async () => {
    if (!name || !age || !country) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    const userData = {
      name,
      age,
      country,
      timestamp: new Date().toISOString(),
    };

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      Alert.alert('Success', 'Data saved successfully!');
    } catch (error) {
      console.error('Error saving data', error);
      Alert.alert('Error', 'Failed to save data.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        keyboardType="numeric"
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
});

export default Task35;
