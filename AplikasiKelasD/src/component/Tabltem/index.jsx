import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WARNA_UTAMA } from '../../utils/constants';
import {} from '../../assets';


const Tabltem = ({label, isFocused, onLongPress, onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <Text style={styles.Text}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default Tabltem;

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        padding: 5
    },
    Text: {
        Color: WARNA_UTAMA
    }
});