import React , { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MyClassPage from '../Components/MyClassComponent_Task19';

const Task19 = () => {
  const [showPage, setShowPage] = useState(false);

  const handlePress = () => {
    setShowPage(!showPage);
    console.log(showPage);
}
  return (
    <View style={styles.container}>
      <Button title="Show" onPress={handlePress} />
      {showPage && <MyClassPage />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Task19;

