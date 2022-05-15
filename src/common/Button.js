import React, { useEffect } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'

export default Button = ({ onPress, text, buttonStyles, textStyles, color }) => {
    const buttonColor = color || '#0003'
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, { borderColor: buttonColor }, buttonStyles]}
        >
            <Text
                style={[styles.text, { color: buttonColor }, textStyles]}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '60%',
        alignSelf: 'center',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 25
    },
    text: {

    }
})