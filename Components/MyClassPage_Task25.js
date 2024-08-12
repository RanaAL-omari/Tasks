import React, { useImperativeHandle, forwardRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import MyClassPage from './MyClassComponent-Task20';


const MyClassPage = forwardRef((props, ref) => {
    const [text ,setText] = useState(' ');

    useImperativeHandle(ref, () =>({
        updateText(newText){
        setText(newText);
        },
        }));
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </View>
        );
            });
    const styles = StyleSheet.create({
            container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
    },
            text: {
            fontSize: 18,
            color: '#333',
        },
    });
    
    export default MyClassPage;