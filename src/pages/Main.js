import React, { useState, useEffect } from 'react';
import { View, Image,Text, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import api from '../services/api'
function Main() {
    const [devs, setDevs] = useState([]);

    async function loadDevs() {
        const response = await api.get('/list_students_filter?token=a8d062dc80593f2e2ff421f542a4eadb&unidades=1&ano_letivo=2022');
        setDevs(response.data.students);
    }

    useEffect(() => {
        loadDevs();
    }, [])

    return (
        <View>
               <FlatList
                    data={devs}
                    keyExtractor={dev => String(dev.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: dev }) => (
                        <View style={styles.container}>
                        <Image style={styles.avatar} source={{uri: dev.photo }} />
                        <Text style={styles.name}>{dev.name}</Text>
                        <Text style={styles.class}>{dev.class}</Text>
                    </View>
                    )}
               >
               </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    avatar: {
        width:90,
        height: 90,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#004e74'
    },
    name: {
        color: '#000a',
        fontSize: 16,
        padding: 4
    },
    class: {
        color: '#66bc50',
        fontWeight: 'bold',
        fontSize: 12
    }
})

export default Main;