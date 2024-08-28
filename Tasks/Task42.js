import React from 'react';
import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Img1 from '../Resource/Img.1.png';
import Img2 from '../Resource/Img2.png';
import Img3 from '../Resource/Img3.png';
import Img4 from '../Resource/Img4.png';//  image4


const backgroundImages = {
  Screen1: Img1,
  Screen2: Img2,
  Screen3: Img3,
  Screen4: Img4,
};

function Screen({ route, navigation }) {
  const { screenName } = route.params;

  return (
    <ImageBackground source={backgroundImages[screenName]} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>{screenName}</Text>
        <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
        <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
        <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen3')} />
        <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen4')} />
      </View>
    </ImageBackground>
  );
}

const Tab = createBottomTabNavigator();

export default function Task42() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: '#2C3E50' },
          tabBarActiveTintColor: '#E67E22',
          tabBarInactiveTintColor: '#BDC3C7',
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Screen1':
                iconName = 'home';
                break;
              case 'Screen2':
                iconName = 'magnify';
                break;
              case 'Screen3':
                iconName = 'heart';
                break;
              case 'Screen4':
                iconName = 'account';
                break;
            }
            return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
          },
        })}
      >
        <Tab.Screen name="Screen1" component={Screen} initialParams={{ screenName: 'Screen1' }} />
        <Tab.Screen name="Screen2" component={Screen} initialParams={{ screenName: 'Screen2' }} />
        <Tab.Screen name="Screen3" component={Screen} initialParams={{ screenName: 'Screen3' }} />
        <Tab.Screen name="Screen4" component={Screen} initialParams={{ screenName: 'Screen4' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
});
