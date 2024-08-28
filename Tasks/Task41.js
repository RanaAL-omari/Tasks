import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Screen1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen1</Text>
    </View>
  );
}

function Screen2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen2</Text>
    </View>
  );
}

function Screen3() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen3</Text>
    </View>
  );
}

function Screen4() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen4</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Task41() {
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
                iconName = 'search';
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
        <Tab.Screen name="Screen1" component={Screen1} />
        <Tab.Screen name="Screen2" component={Screen2} />
        <Tab.Screen name="Screen3" component={Screen3} />
        <Tab.Screen name="Screen4" component={Screen4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECF0F1',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
});
