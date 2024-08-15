import React, { useRef, useState } from 'react';
import { View, Image, FlatList, Alert, Text, StyleSheet, Button, Pressable } from 'react-native';
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

const Task31 = () => {
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

    const handleDuplicateImage = (id) => {
        const imageToDuplicate = images.find(image => image.id === id);
        const newImage = { ...imageToDuplicate, id: (images.length + 1).toString() };
        const updatedImages = [...images];
        const index = updatedImages.findIndex(image => image.id === id);
        updatedImages.splice(index + 1, 0, newImage);
        setImages(updatedImages);
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
            <View style={styles.imageContainer}>
                <Image source={item.source} style={styles.image} />
                <Pressable onPress={() => handleDuplicateImage(item.id)} style={styles.duplicateButton}>
                    <Icon name="content-copy" size={20} color="green" />
                </Pressable>
                <Pressable onPress={() => handleRemoveImage(item.id)} style={styles.removeButton}>
        <Icon name="delete" size={20} color="red" />
      </Pressable>
    <Pressable onPress={() => handlePress(item.id)} style={styles.infoButton}>
       <Icon name="info" size={20} color="blue" />
        </Pressable>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Scroll to image" onPress={handleScrollToIndex} />
            </View>
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
        padding: 10,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        marginBottom: 20,
    },
    item: {
        marginHorizontal: 10,
        position: 'relative',
    },
    imageContainer: {
        backgroundColor: 'rgba(0, 255, 0, 0.2)', 
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        resizeMode: 'cover', 
    },
    duplicateButton: {
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: 'rgba(255, 255, 0, 0.5)', 
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2, 
    },
    removeButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'rgba(255, 0, 0, 0.5)', 
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoButton: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: 'rgba(0, 0, 255, 0.5)', 
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Task31;
