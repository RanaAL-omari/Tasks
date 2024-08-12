import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

class MyClassPage extends Component {
    componentDidMount() {
    console.log('MyClassPage Loaded');
    console.log('Received Prop:', this.props.someProp);
    }

    componentWillUnmount() {
    console.log('MyClassPage Unloaded');
    }

    render() {
    return (
        <View style={styles.page}>
        <Text>My Class Page Content</Text>
        </View>
    );
    }
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MyClassPage;
