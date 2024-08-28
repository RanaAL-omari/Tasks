import React, { useRef, useState } from 'react';
import { View, Image, FlatList, Alert, StyleSheet, Button, Pressable } from 'react-native';
import Dialog from 'react-native-dialog';
import Icon from 'react-native-vector-icons/MaterialIcons';


import Img1 from '../Resource/Img.1.png';
import Img2 from '../Resource/Img.2.png';
import Img3 from '../Resource/Img.3.png'; 
import Img4 from '../Resource/Img.4.png';
import Img5 from '../Resource/Img.5.png';
import Img6 from '../Resource/Img.6.png';
import Img7 from '../Resource/Img.7.png';
import Img8 from '../Resource/Img.8.png';
import Img9 from '../Resource/Img.9.png';
import Img10 from '../Resource/Img.10.png';

const initialImages = [
  { id: '1', source: Img1 },
  { id: '2', source: Img2 },
  { id: '3', source: Img3 },
  { id: '4', source: Img4 },
  { id: '5', source: Img5 },
  { id: '6', source: Img6 },
  { id: '7', source: Img7 },
  { id: '8', source: Img8 },
  { id: '9', source: Img9 },
  { id: '10', source: Img10 }
];

const Task30 = () => {
  const flatListRef = useRef(null);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [index, setIndex] = useState('');
  const [images, setImages] = useState(initialImages);

  const handlePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  const handleScrollToIndex = () => {
    setDialogVisible(true);
  };

  const handleRemoveImage = (id) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this image?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => {
            setImages(images.filter(image => image.id !== id));
          },
          style: "destructive"
        }
      ]
    );
  };

  const handleDialogSubmit = () => {
    const parsedIndex = parseInt(index, 10);
    if (!isNaN(parsedIndex) && parsedIndex >= 0 && parsedIndex < images.length) {
      flatListRef.current?.scrollToIndex({ animated: true, index: parsedIndex });
    } else {
      Alert.alert("Invalid index", "Please enter a valid index number.");
    }
    setDialogVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Pressable onPress={() => handlePress(item.id)}>
        <Image source={item.source} style={styles.image} />
      </Pressable>
      <Pressable onPress={() => handleRemoveImage(item.id)} style={styles.removeButton}>
        <Icon name="delete" size={24} color="white" />
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Scroll to image" onPress={handleScrollToIndex} />
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Dialog.Container visible={dialogVisible}>
        <Dialog.Title>Go to image</Dialog.Title>
        <Dialog.Input
          keyboardType="numeric"
          placeholder="Enter index"
          onChangeText={setIndex}
          value={index}
        />
        <Dialog.Button label="Cancel" onPress={() => setDialogVisible(false)} />
        <Dialog.Button label="Ok" onPress={handleDialogSubmit} />
      </Dialog.Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  item: {
    marginHorizontal: 10,
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Task30;
