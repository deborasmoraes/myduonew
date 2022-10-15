import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import Firebase from '../config/firebase/firebaseConfig';

import Jogos from '../components/jogos';

const PerfilScreen = () => {
    const [trueFalse, setTrueFalse] = useState(true)
    const [descricao, setDescricao] = useState("lorem ipsum")
    const navigation = useNavigation()
    const [user, setUser] = useState({})
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    useEffect(() => {
        const user = Firebase.auth().currentUser.uid
        let ref = Firebase.firestore().collection('user').where("user_id", "==", user).onSnapshot(query => {
            const data = []
            query.forEach(doc => {
                data.push({
                    ...doc.data(),
                    key: doc.id
                })
            })
            setUser({
                username: data[0].username,
                descricao: data[0].descricao,
                apexLegends: data[0].apexLegends,
                csGo: data[0].csGo,
                dota2: data[0].dota2,
                fortnite: data[0].fortnite,
                freeFire: data[0].freeFire,
                LeagueOfLegends: data[0].LeagueOfLegends,
                Valorant: data[0].Valorant,
                horaFim: data[0].horaFim,
                horaInicio: data[0].horaInicio
            });
        })
        return () => ref()
    }, [])


    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#00182F', padding: '7%' }}>

            {/* header */}
            <View style={styles.alinhar}>
                <Text style={{color: '#f5f5f5'}}>Perfil</Text>
                {(trueFalse === true) ? <TouchableOpacity
                    onPress={() => { setTrueFalse(false) }}
                ><MaterialCommunityIcons name='account-edit-outline' size={21} color='#FFFF' /></TouchableOpacity> : <TouchableOpacity
                    onPress={() => { setTrueFalse(true) }}
                ><MaterialCommunityIcons name='content-save-edit-outline' size={21} color='#FFFF' /></TouchableOpacity>}
            </View>

            {/* dados usuário */}

            <LinearGradient colors={['#242547', '#042960']} style={styles.usuario}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://pngimg.com/uploads/ninja/ninja_PNG26.png'
                    }}
                />
                <TouchableOpacity><Text>Foto</Text></TouchableOpacity>
                <Text style={styles.nome}>{user.username}</Text>

            </LinearGradient>

            {/* descrição usuário */}
            <Text style={styles.nome}>Sobre mim</Text>

            <LinearGradient
                colors={['#242547', '#042960']}
                style={styles.descricao}>
                {(trueFalse === true) ?
                    <Text style=
                        {{ color: '#FFFF', marginLeft: '3%', padding: '2%' }}>{user.descricao}</Text> : <TextInput
                            onChangeText={setDescricao}
                            defaultValue={user.descricao}></TextInput>}
            </LinearGradient>

            <Text style={styles.nome}>Plataformas</Text>

            <LinearGradient colors={['#242547', '#042960']}
                style={styles.plataformas}>
                <Text style={{ color: '#FFFF' }}>PC</Text>
            </LinearGradient>

            <Text style={styles.nome}>Jogos favoritos</Text>

            {/* adicionar jogos */}
            <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
                {(trueFalse === true) ? <Jogos valorant={user.Valorant} LeagueOfLegends={user.LeagueOfLegends} fortnite={user.fortnite} apexLegends={user.apexLegends} csGo={user.csGo} dota2={user.dota2} freeFire={user.freeFire} /> : <TouchableOpacity
                    onPress={() => { navigation.navigate("Jogos") }}><Text>Editar Jogos</Text>
                </TouchableOpacity>}
            </LinearGradient>

            <Text style={styles.nome}>Disponibilidade</Text>
            {/* horários */}
            <View style={styles.horario}>
                <Text style={styles.horario2}>Inicio</Text>
                <Text style={styles.nome}>Fim</Text>
            </View>
            <View style={styles.horario}>
                <Text style={styles.horario2}>{user.horaInicio}</Text>
                <Text style={styles.nome}>{user.horaFim}</Text>
            </View>
        


        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '10%',
    },
    geral: {
        backgroundColor: '#00182F',
        padding: '7%',
        height: '100%'
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFFF',
        marginTop: '5%',
        padding: '0.5%',
        marginLeft: '2%'
    },
    alinhar: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
    },
    usuario: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        borderRadius: 15,
        borderBottomRightRadius: 40,
        padding: '3%',
        marginTop: '2%',
        height: 110
    },
    descricao: {
        borderRadius: 15,
        borderBottomRightRadius: 40,
        marginTop: '2%',
        height: '11%',
        color: '#FFFF',
        padding: '2%',
    },
    plataformas: {
        padding: '1%',
        width: 100,
        height: 35,
        borderRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        marginTop: '2%',
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFFF'
    },
    jogos: {
        padding: '1%',
        width: 135,
        height: 40,
        borderRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        marginTop: '2%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#FFFF',
        justifyContent: 'center'

    },
    avatar: {
        borderWidth: 2,
        borderRadius: 100,
        borderColor: '#FFFF',
        width: '22%',
        height: '75%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    horario:{
        flexDirection: 'row', 
        alignItems: 'baseline', 
        justifyContent: 'space-between', 
        alignSelf: 'center'
    },
    horario2:{
        color: '#FFFF', 
        marginRight: '32%', 
        fontWeight: 'bold', 
        fontSize: 20
    }
})
export default PerfilScreen