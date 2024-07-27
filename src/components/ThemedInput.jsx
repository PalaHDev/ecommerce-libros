import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors } from "../global/colors";

const ThemedInput = ({ label, value, onBlur, onChange, keyboardType, secureTextEntry, error }) => (
    <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
);

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 8,
        fontSize: 16,
        color: colors.black,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: colors.gray,
        paddingLeft: 8,
        paddingRight: 40,
    },
    errorText: {
        marginTop: 8,
        color: colors.red,
    },
});

export default ThemedInput;
