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
                <Text style={styles.nome}>Perfil</Text>
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
                <Text style={styles.username}>{user.username}</Text>

            </LinearGradient>

            {/* descrição usuário */}
            <Text style={styles.nome}>Sobre mim</Text>

            <LinearGradient
                colors={['#242547', '#042960']}
                style={styles.descricao}>
                {(trueFalse === true) ?
                    <Text style=
                        {{ color: '#FFFF', padding: '2%' }}>{user.descricao}</Text> : <TextInput
                            style=
                            {{ color: '#FFFF', padding: '1%', flexWrap: 'wrap' }}
                            onChangeText={setDescricao}
                            defaultValue={user.descricao}
                            multiline={true}
                            numberOfLines={3}
                        ></TextInput>}
            </LinearGradient>

            <Text style={styles.nome}>Plataformas</Text>
            <View style={{ marginLeft: 4 }}>
                <LinearGradient colors={['#242547', '#042960']}
                    style={styles.plataformas}>
                    <Text style={{ color: '#FFFF' }}>PC</Text>
                </LinearGradient>
            </View>

            <Text style={styles.nome}>Jogos favoritos</Text>

            {/* adicionar jogos */}
            <View style={styles.alinharJogos}>
                {(trueFalse === true) ? <Jogos valorant={user.Valorant} LeagueOfLegends={user.LeagueOfLegends} fortnite={user.fortnite} apexLegends={user.apexLegends} csGo={user.csGo} dota2={user.dota2} freeFire={user.freeFire} /> : <LinearGradient colors={['#242547', '#042960']} style={{ borderRadius: 20, width: 320, marginTop: '2%' }}><TouchableOpacity
                    onPress={() => { navigation.navigate("Jogos") }} style={styles.editarJogos}><Text style={{ color: '#FFFF' }}>Editar Jogos</Text>
                </TouchableOpacity></LinearGradient>}
            </View>

            <Text style={styles.nome}>Disponibilidade</Text>
            {/* horários */}
            <View style={styles.horario}>
                <Text style={styles.horario2}>Início</Text>
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
        padding: '1%',
        marginLeft: '2%'
    },
    username: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFFF',
        marginTop: '2%',
        padding: '1%',
        marginLeft: 15
    },
    alinhar: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
    },
    usuario: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        borderBottomRightRadius: 40,
        padding: '3%',
        marginTop: '2%',
        height: 110,

    },
    descricao: {
        borderRadius: 15,
        borderBottomRightRadius: 40,
        marginTop: '2%',
        height: 80,
        color: '#FFFF',
        padding: '4%',
        flexWrap: 'wrap',
        width: 342,
        flexShrink: 1
    },
    plataformas: {
        padding: '1%',
        borderRadius: 90,
        justifyContent: 'center',
        height: 35,
        alignItems: 'center',
        marginTop: '2%',
        marginLeft: 2,
        marginRight: 12
    },
    alinharJogos: {
        margin: 2,
    },
    avatar: {
        borderWidth: 2,
        borderRadius: 100,
        borderColor: '#FFFF',
        width: '22%',
        height: '75%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 3,
        marginLeft: 5
    },
    horario: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    horario2: {
        color: '#FFFF',
        marginRight: '32%',
        fontWeight: 'bold',
        fontSize: 20
    },
    editarJogos: {
        padding: 5,
        borderRadius: 20,
        borderBottomRightRadius: 20,
        width: 320,
        height: 40,
        alignItems: 'center',
        alignContent: 'center',
        marginTop: '2%'
    }
}
)
export default PerfilScreen