import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Tabltem from '../Tabltem';


const createBottomTabNavigator = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <Tabltem 
                    key={index}
                    isFocused={isFocused}
                    label={label}
                    onLongPress={onLongPress}
                    onPress={onPress}
                    />
                );
            })}
        </View>
    );
};


export default createBottomTabNavigator;

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        backgroundColor:'#dfdf',
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingvertical: 10,
    }
});