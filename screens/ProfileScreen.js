import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import Firebase from '../config/firebase/firebaseConfig';
import user from '../hooks/currentUser';
import Jogos from '../hooks/jogos';

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
        const user  = Firebase.auth().currentUser.uid
        let ref = Firebase.firestore().collection('user').where("user_id", "==", user).onSnapshot(query =>{
            const data   = []
            query.forEach(doc =>{
                data.push({
                    ...doc.data(),
                    key: doc.id
                })
            })
          setUser({
            username:data[0].username,
            descricao:data[0].descricao,
            apexLegends:data[0].apexLegends,
            csGo:data[0].csGo,
            dota2:data[0].dota2,
            fortnite:data[0].fortnite,
            freeFire:data[0].freeFire,
            LeagueOfLegends:data[0].LeagueOfLegends,
            Valorant:data[0].Valorant,
            horaFim:data[0].horaFim,
            horaInicio:data[0].horaInicio
        });
        })
        return () => ref()
    }, [])


    return (
        <View style={styles.geral}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                {/* header */}
                <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <Text style={styles.nome}>Perfil</Text>

                    {(trueFalse === true) ? <TouchableOpacity
                        onPress={() => { setTrueFalse(false) }}
                    ><MaterialCommunityIcons name='account-edit-outline' size={21} color='#FFFF' /></TouchableOpacity> : <TouchableOpacity
                        onPress={() => { setTrueFalse(true) }}
                    ><MaterialCommunityIcons name='content-save-edit-outline' size={21} color='#FFFF' /></TouchableOpacity>}
                </View>

                {/* dados usuário */}
                <View style={{ width: '100%' }}>
                    <LinearGradient colors={['#242547', '#042960']} style={styles.usuario}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.avatar}
                                source={{
                                    uri: 'https://pngimg.com/uploads/ninja/ninja_PNG26.png'
                                }}
                            />
                            <TouchableOpacity><Text>Foto</Text></TouchableOpacity>
                            <Text style={styles.nome}>{user.username}</Text>

                          
                        </View>
                    </LinearGradient>
                </View>
                {/* descrição usuário */}
                <Text style={styles.nome}>Sobre mim</Text>

                <LinearGradient
                    colors={['#242547', '#042960']}
                    style={styles.descricao}>
                    <View style={styles.container}>
                    {(trueFalse === true) ? <Text>{user.descricao}</Text> : <TextInput
                                onChangeText={setDescricao}
                                defaultValue={user.descricao}></TextInput>}
                    </View>
                </LinearGradient>

                <Text style={styles.nome}>Plataformas</Text>

                <LinearGradient colors={['#242547', '#042960']}
                    style={styles.plataformas}>
                    <Text>PC</Text>
                </LinearGradient>

                <Text style={styles.nome}>Jogos favoritos</Text>

                {/* adicionar jogos */}
                <LinearGradient colors={['#242547', '#042960']}
                    style={styles.jogos}>
                    {(trueFalse === true) ?<Jogos valorant ={user.Valorant} LeagueOfLegends = {user.LeagueOfLegends} fortnite = {user.fortnite} apexLegends = {user.apexLegends} csGo = {user.csGo} dota2 = {user.dota2} freeFire = {user.freeFire}/> : <TouchableOpacity
                        onPress={() => { navigation.navigate("Jogos") }}><Text>Editar Jogos</Text>
                    </TouchableOpacity>}
                </LinearGradient>

                <Text style={styles.nome}>Disponibilidade</Text>
                {/* horários */}
                <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', alignSelf: 'center' }}>
                    <Text style={{ color: '#FFFF', marginRight: '30%', fontWeight: 'bold', fontSize: 20 }}>Inicio</Text>
                    <Text style={styles.nome}>Fim</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-around' }}>
                    <Text>{user.horaInicio}</Text>
                    <Text>{user.horaFim}</Text>
                </View>
                <View>
                    {(trueFalse === true) ? <TouchableOpacity
                        onPress={() => { setTrueFalse(false) }}
                    ><Text>Editar</Text></TouchableOpacity> : <TouchableOpacity
                        onPress={() => { setTrueFalse(true) }}
                    ><Text>Salvar</Text></TouchableOpacity>}
                </View>


            </ScrollView>
        </View>
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
        marginLeft: '2%'
    },
    usuario: {
        borderRadius: 15,
        borderBottomRightRadius: 40,
        padding: '4%',
        marginTop: '2%',
    },
    descricao: {
        borderRadius: 15,
        borderBottomRightRadius: 40,
        marginTop: '2%'
    },
    plataformas: {
        padding: '3%',
        width: '30%',
        height: '6.5%',
        borderRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        marginTop: '2%',
        alignSelf: 'center'
    },
    jogos: {
        padding: '3%',
        width: '40%',
        height: '6.2%',
        borderRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        marginTop: '2%',
        alignSelf: 'center'
    },
    avatar: {
        borderWidth: 1,
        borderRadius: 100,
        borderColor: "#FFFF",
        width: '25%',
        height: '50%'
    }
})
export default PerfilScreen