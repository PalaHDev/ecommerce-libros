import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../utils/validationSchemas";
import { colors } from "../global/colors";
import ThemedButton from '../components/ThemedButton';
import ThemedInput from "../components/ThemedInput";
import { useDispatch } from "react-redux";
import { useSignInMutation } from "../services/authService";
import { insertSession } from "../persistence";
import { setUser } from "../features/User/UserSlice";
import Toast from "react-native-toast-message";

const Login = ({ navigation }) => {
    const { control, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
    });
    const [loading, setLoading] = useState(false);
    const password = watch("password");
    const dispatch = useDispatch();
    const [triggerSignIn, result] = useSignInMutation();
    useEffect(() => {
       
        if (result?.data && result.isSuccess) {
            insertSession({
                email: result.data.email,
                localId: result.data.localId,
                token: result.data.idToken
            }).then((response) => {
                dispatch(
                    setUser({
                        email: result.data.email,
                        idToken: result.data.idToken,
                        localId: result.data.localId,
                    })
                );
            }).catch(err => {
                Toast.show({
                    type: 'error',
                    text1: 'ha ocurrido un error inesperado',
                    position: 'bottom'
                  });
            })
        }else if(!result.isLoading && !result.isSuccess && result.isError){
            Toast.show({
                type: 'error',
                text1: 'ha ocurrido un error inesperado, intente inscribirse',
                position: 'bottom'
              });
        }
    }, [result])

    const onSubmit = (formData) => {
        const { email, password } = formData;
        triggerSignIn({ email, password, returnSecureToken: true })
    };

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
                            secureTextEntry={true}
                            error={errors.password?.message}
                        />
                    )}
                    name="password"
                />

                <View style={styles.buttonContainer}>
                    <ThemedButton title="Entrar" onPress={handleSubmit(onSubmit)} />
                </View>

            </View>

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.linkText}>Inscribirse</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    form: {
        padding: 16,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.gray
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
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
