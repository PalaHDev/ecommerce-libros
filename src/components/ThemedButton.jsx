import React from 'react';
import { Button, Pressable, StyleSheet, Text } from 'react-native';
import { colors } from "../global/colors";

const ThemedButton = ({ title = "", onPress = () => { }, color = colors.skyBlue300 }) => {
    return (
        <Pressable
            style={{ ...styles.button, backgroundColor: color }}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>

    );
}
{/* <Button title={title} onPress={onPress} color={colors.skyBlue900} backgroundColor={colors.skyBlue300}/> */ }
const styles = StyleSheet.create({
    button: {
        width: "80%",
        borderWidth: 1,
        borderColor: colors.skyBlue900,
        backgroundColor: colors.skyBlue300,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        marginBottom:20
    },
    text: {
        fontFamily: "Josefin",
        fontSize: 18,
        color: colors.skyBlue900,
    },
});

export default ThemedButton;
