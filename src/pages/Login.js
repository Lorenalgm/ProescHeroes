import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import logo from '../assets/logo.png'

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
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    logo: {
        width: 180,
        height: 180

    },
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15
    },
    button: {
        height: 46,
        width: 300,
        alignSelf: 'stretch',
        backgroundColor: 'green',
        borderRadius: 4, 
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }

})

export default Login;