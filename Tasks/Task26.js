import React , { Component , useState } from 'react';
import { View, Button , StyleSheet,setLoading ,Text} from 'react-native';


const fetchIpAddress = async () => {
const response = await fetch('https://api.ipify.org?format=json');

const data = await response.json();
return data.ip;
};

    const Task26  = () => {
    const[ip,setIp]= useState('');
    const[loading,setLoding]= useState(false);



    const fetchIpNonBlocking = async () => {
        setIp(''); 
        fetchIpAddress().then(setIp);
        };

    const fetchIpBlocking = async () => {
        setLoading(true);
        const ipAddress = await fetchIpAddress();
        setIp(ipAddress);
        setLoading(false);
        };

        return (
        <View style={styles.container}>
        <Button title="non-blocking request " onPress={fetchIpNonBlocking} />
        <Button title="should block the UI  " onPress={fetchIpBlocking} />
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        <Text style={styles.text}>{ip}</Text>

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
        text: {
            fontSize: 19,
            marginTop: 30,
            },
    });
    
    export default Task26;

