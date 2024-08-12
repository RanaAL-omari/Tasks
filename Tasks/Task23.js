import React, { Component,useState } from 'react';
import { View, Text, StyleSheet ,Button} from 'react-native';
import  MyClassPage from '../Components/MyClassComponent_Task23';


const Task23 = () => {
    const [showPage, setShowPage] = useState(false);
    
    const handlePress = () => {
        setShowPage(!showPage);
    };
    
    return (
        <View style={styles.container}>
        <Button title="Show" onPress={handlePress} />
        {showPage && <MyClassPage someProp="This is a prop!" />}
        </View>
    );
        };
    
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    page: {
            marginTop: 20,
            padding: 20,
        backgroundColor: '#ddd',
    },
    });
            
        export default Task23;