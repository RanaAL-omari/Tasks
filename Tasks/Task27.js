import React, { useState } from 'react';
import { View, Image, Button, Alert, StyleSheet } from 'react-native';

import Img1 from '../Resource/Img.1.png';
import Img2 from '../Resource/Img.2.png';
import Img3 from '../Resource/Img.3.png';

const Task27 = () => {
    const [selectedImage, setSelectedImage] = useState(Img1);

    const showAlert = () => {
        Alert.alert(
            "Choose an image",
            "Choose image number: 1, 2, or 3",
            [
                {
                    text: "1",
                    onPress: () => setSelectedImage(Img1),
                },
                {
                    text: "2",
                    onPress: () => setSelectedImage(Img2),
                },
                {
                    text: "3",
                    onPress: () => setSelectedImage(Img3),
                },
                {
                    text: "Close",
                    style: "cancel",
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Image source={selectedImage} style={styles.image} />
            <Button title="Choose an image" onPress={showAlert} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
});

export default Task27;
<<<<<<< HEAD
=======

>>>>>>> b80db94bc5e6b794672b5e3b251aa3173a1f85fa
