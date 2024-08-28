


import React from 'react';
import { View, Image, FlatList, Alert, StyleSheet, Pressable } from 'react-native';

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

const images = [
Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];

const Task28 = () => {

    const handlePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
    };

    const renderItem = ({ item, index }) => (
    <Pressable onPress={() => handlePress(index)} style={styles.item}>
        <Image source={item} style={styles.image} />
    </Pressable>
    );

    return (
    <View style={styles.container}>
        <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        />
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
        },
    image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    },
});

export default Task28;
