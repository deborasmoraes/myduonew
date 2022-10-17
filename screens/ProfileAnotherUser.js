import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import Firebase from '../config/firebase/firebaseConfig';

import Jogos from '../components/jogos';
import generateId from '../functions/genrateId';

const AnotherUserScreen = ({ route }) => {
    const navigation = useNavigation()
    const [user, setUser] = useState({})
    const [user1, setUser1] = useState({})
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    const anotheruser = route.params.user_id
    const currentUser = Firebase.auth().currentUser.uid
    useEffect(() => {



        let ref = Firebase.firestore().collection('user').where("user_id", "==", anotheruser).onSnapshot(query => {
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
                Valorant: data[0].Valorant,
                LeagueOfLegends: data[0].LeagueOfLegends,
                horaFim: data[0].horaFim,
                horaInicio: data[0].horaInicio
            });
        })
        return () => ref()
    }, [])

    const exist = () => {
        Firebase.firestore().collection('user').doc(anotheruser).collection('added').onSnapshot(query => {
            const data = []
            query.forEach((doc) => {
                data.push({
                    ...doc.data(),
                    key: doc.id
                })
                if (doc.id == currentUser) {
                    return addFriend(),
                    console.log('amigo adicionado');
                    

                } else {
                    return requestFriend(),
                    console.log('solicitação enviada!');
                    
                }
            }

            )


        })

    }
    const requestFriend = () => {
        Firebase.firestore().collection('user').doc(currentUser).collection('added').doc(anotheruser).set({ user_id: anotheruser }).catch((error) => {
            console.log(error.message);
        })
    }

    const addFriend = () => {






        Firebase.firestore().collection('friends').doc(generateId(currentUser, anotheruser)).set({
            users: {
              
                [anotheruser]: user,
                [currentUser]: currentUser
            },
            FriendsRelation: [currentUser, anotheruser],
            friend_id: anotheruser

        })
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#00182F', padding: '7%' }}>


                {/* header */}
                <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <Text style={styles.nome}>Perfil</Text>

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
                        <Text>{user.descricao}</Text>
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
                    <Jogos valorant={user.Valorant} LeagueOfLegends={user.LeagueOfLegends} ApexLegnds={user.ApexLegnds} />
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
                    <TouchableOpacity onPress={exist}><Text>Adicionar</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}><Text>Voltar</Text></TouchableOpacity>
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
export default AnotherUserScreen