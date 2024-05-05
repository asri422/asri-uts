import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Akun, Musik, setting } from '../pages';
import { BottomTabNavigator } from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomTabNavigator{...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Musik" component={Musik} />
            <Tab.Screen name="Akun" component={Akun} />
            <Tab.Screen name="setting" component={setting} />
        </Tab.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainApp" component={MainApp} options={{header:false}}/>
        </Stack.Navigator>
    );
};

export default Router;

const styles = StyleSheet.create({});

