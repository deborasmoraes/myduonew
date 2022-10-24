import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Firebase from '../config/firebase/firebaseConfig';

import Jogos from '../components/jogos';
import generateId from '../functions/genrateId';

const AnotherUserScreen = ({ route }) => {
    const navigation = useNavigation()
    const [user, setUser] = useState({})
   
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
                    addFriend(),
                       Toast.show({
                        type: 'success',
                        text1: 'Duo adicionado!'
                       })
                        
                    


                } else {
                    requestFriend(),
                    Toast.show({
                        type: 'success',
                        text1: 'Solicitação enviada!'
                       })
                        
                    

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
            friend_id: anotheruser,


        })
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#00182F', padding: '7%' }}>


            {/* header */}
            <View style={styles.alinhar}>
                <Text style={styles.nome}>Perfil</Text>
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
                <Text style=
                    {{ color: '#FFFF', marginLeft: '3%', padding: '2%' }}>{user.descricao}</Text>
            </LinearGradient>

            <Text style={styles.nome}>Plataformas</Text>
            <View style={{ marginLeft: 80, marginRight: 80 }}>
                <LinearGradient colors={['#242547', '#042960']}
                    style={styles.plataformas}>
                    <Text style={{ color: '#FFFF' }}>PC</Text>
                </LinearGradient>
            </View>
            <Text style={styles.nome}>Jogos favoritos</Text>

            {/* adicionar jogos */}
           
               <View style={styles.alinharJogos}>
                <Jogos valorant={user.Valorant} LeagueOfLegends={user.LeagueOfLegends} ApexLegnds={user.ApexLegnds} />
                </View>

            <Text style={styles.nome}>Disponibilidade</Text>
            {/* horários */}
            <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', alignSelf: 'center' }}>
                <Text style={{ color: '#FFFF', marginRight: '30%', fontWeight: 'bold', fontSize: 20 }}>Início</Text>
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
        height: 60,
        color: '#FFFF',
        padding: '4%',
        flexWrap: 'wrap',
        width: 330,
        flexShrink: 1
    },
    plataformas: {
        padding: '1%',
        borderRadius: 90,
        justifyContent: 'center',
        height: 35,
        alignItems: 'center',
        marginTop: '2%'
    },
    alinharJogos: {
        margin: 2,
        borderRadius: 20,
       alignItems: 'center',
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
export default AnotherUserScreen