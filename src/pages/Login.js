import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import logo from '../assets/logo.png'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
function Login() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <TextInput style={styles.input} placeholder="Digite seu e-mail do Proesc" />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} >Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
    },
    logo: {
        width: 180,
        height: 180

    },
    input: {

    },
    button: {

    },
    buttonText: {

    }

})

export default Login;