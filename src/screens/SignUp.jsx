import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator, Text } from "react-native";
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../utils/validationSchemas";
import { colors } from "../global/colors";
import ThemedButton from '../components/ThemedButton';
import ThemedInput from "../components/ThemedInput";
import { useDispatch } from "react-redux";
import { useSignUpMutation } from "../services/authService";
import { setUser } from "../features/User/UserSlice";

const SignUp = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const { control, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(signupSchema),
    });
    const [loading, setLoading] = useState(false);
    const password = watch("password");
    const dispatch = useDispatch();
    const [triggerSignUp, result] = useSignUpMutation();

    useEffect(() => {
        if (result.isSuccess) {
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken,
                    localId: result.data.localId,
                })
            )
        }
    }, [result])

    const onSubmit = (formData) => {
        const { email, password } = formData;
        triggerSignUp({ email, password, returnSecureToken: true })
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

                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <ThemedInput
                                label="Correo electrónico"
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                error={errors.email?.message}
                            />
                        )}
                        name="email"
                    />

                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <ThemedInput
                                label="Contraseña"
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
                                secureTextEntry={!showPassword}
                                error={errors.password?.message}
                            />
                        )}
                        name="password"
                    />

                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <ThemedInput
                                label="Confirmar contraseña"
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
                                secureTextEntry={!showPassword}
                                error={errors.confirmPassword?.message}
                            />
                        )}
                        name="confirmPassword"
                    />
                    <View style={styles.buttonContainer}>
                        <ThemedButton title="Enviar" onPress={handleSubmit(onSubmit)} />
                    </View>

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
        borderColor: colors.gray,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
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
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
