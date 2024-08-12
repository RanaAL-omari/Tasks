import React , { Component ,useRef } from 'react';
import { View, Button , StyleSheet , TextInput} from 'react-native';
import MyFunctionPage from '../Components/MyFunctionPage_Task24';



const Task24  = () => {
    const MyFunctionPageRef = useRef(null);
    const handleChangeText = (text) => {
            if (MyFunctionPageRef.current) {
            MyFunctionPageRef.current.updateText(text);
        }};
        return (
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Text Input "
            onChangeText={handleChangeText}
            />
            <MyFunctionPage ref={MyFunctionPageRef} />
        </View>
        );
    };
    
    const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
        },
        input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 20,
        },
    });
    
    export default Task24;


