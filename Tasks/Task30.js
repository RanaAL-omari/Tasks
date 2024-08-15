import React, { useState, useRef } from 'react';
import { View, FlatList, Image, Button, Alert, Pressable, StyleSheet, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 

const initialImages = [
    { id: '1', uri: 'https://example.com/image1.png' },
    { id: '2', uri: 'https://example.com/image2.png' },
    { id: '3', uri: 'https://example.com/image3.png' },
    { id: '4', uri: 'https://example.com/image4.png' },
    { id: '5', uri: 'https://example.com/image5.png' },
    { id: '6', uri: 'https://example.com/image6.png' },
    { id: '7', uri: 'https://example.com/image7.png' },
    { id: '8', uri: 'https://example.com/image8.png' },
    { id: '9', uri: 'https://example.com/image9.png' },
    { id: '10', uri: 'https://example.com/image10.png'},
];

const Task30 = () => {
    const [images, setImages] = useState(initialImages);
    const flatListRef = useRef(null);
    const [indexInput, setIndexInput] = useState('');

    const handlePress = () => {
        const index = parseInt(indexInput, 10);
        if (!isNaN(index) && index >= 0 && index < images.length) {
            flatListRef.current.scrollToIndex({ index });
        } else {
            Alert.alert('Invalid Index', 'Please enter a valid index.');
        }
    };

    const handleRemoveImage = (id) => {
        Alert.alert(
            'Remove Image',
            'Are you sure you want to remove this image?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        setImages((prevImages) => prevImages.filter((image) => image.id !== id));
                    },
                },
            ]
        );
    };

    const renderItem = ({ item }) => (
        <View style={styles.imageContainer}>
            <Image source={{ uri: item.uri }} style={styles.image} />
            <Pressable
                style={styles.iconContainer}
                onPress={() => handleRemoveImage(item.id)}
            >
                <MaterialIcons name="delete" size={24} color="white" />
            </Pressable>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <TextInput
                style={styles.input}
                value={indexInput}
                onChangeText={setIndexInput}
                placeholder="Enter index"
                keyboardType="numeric"
            />
            <Button title="Scroll to Image" onPress={handlePress} />
            <FlatList
                ref={flatListRef}
                data={images}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                horizontal
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
        margin: 10,
    },
    image: {
        width: 100,
        height: 100,
    },
    iconContainer: {
        position: 'absolute',
        top: 5,
        right: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        paddingHorizontal: 10,
    },
});

export default Task30;
