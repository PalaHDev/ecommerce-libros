
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, ActivityIndicator, Linking } from "react-native";
import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../utils/validationSchemas";
import { colors } from "../global/colors";

const SignUp = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const { control, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(signupSchema),
    });
    const [loading, setLoading] = useState(false);
    const password = watch("password");

    const onSubmit = (formData) => {
        console.log('Formulario enviado:', formData);
    };

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <View style={styles.imageContainer}>
                        <Image
                            resizeMode="cover"
                            style={{ width: 80, height: 80 }}
                            source={require('../../assets/logo7_20_224920.png')}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.label}>Correo electrónico</Text>
                                    <TextInput
                                        style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                    />
                                    {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
                                </View>
                            )}
                            name="email"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.label}>Contraseña</Text>
                                    <TextInput
                                        style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        secureTextEntry={!showPassword}
                                        textContentType="none"
                                        autoComplete="off"
                                        autoCorrect={false}
                                        spellCheck={false}
                                        keyboardType="default"
                                        importantForAutofill="no"
                                        disableFullscreenUI={true}
                                    />
                                    {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

                                </View>
                            )}
                            name="password"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.label}>Confirmar contraseña</Text>
                                    <TextInput
                                        style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        secureTextEntry={!showPassword}
                                        textContentType="none"
                                        autoComplete="off"
                                        autoCorrect={false}
                                        spellCheck={false}
                                        keyboardType="default"
                                        importantForAutofill="no"
                                        disableFullscreenUI={true}
                                    />
                                    {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>}
                                </View>
                            )}
                            name="confirmPassword"
                        />
                    </View>

                    <Button title="Enviar" onPress={handleSubmit(onSubmit)} color={colors.skyBlue900} />
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.linkText}>¿Ya tienes una cuenta?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    form: {
        padding: 16,
        borderWidth: 1,
        borderRadius: 10,
        borderColor:colors.gray
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    inputContainer: {
        marginBottom: 16,
    },
    inputWrapper: {
        position: 'relative',
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
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        marginTop: 40,
        alignItems: 'center',
    },
    linkText: {
        color: colors.blue,
        fontSize: 16,
    },
});
