import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import { TextInputMask } from 'react-native-masked-text'

import Firebase from '../config/firebase/firebaseConfig'

import { useNavigation } from '@react-navigation/native'
import ModalCreate from '../components/modalCreate'

const CreateProfileScreen = () => {
    const navigation = useNavigation()
    const [username, setUsername] = useState('')
    const [descricao, setDescricao] = useState('')
    const [apexLegends, setApexLegends] = useState(false)
    const [csGo, setCsGo] = useState(false)
    const [fortnite, setFortnite] = useState(false)
    const [dota2, setdota2] = useState(false)
    const [freeFire, setfreeFire] = useState(false)
    const [valorant, setValorant] = useState(false)
    const [lol, setLol] = useState(false)
    const [horaInicio, setHoraInicio] = useState('')
    const [horaFim, setHoraFim] = useState('')
    const [pc, setPc] = useState(false)
    const [ps4, setPs4] = useState(false)
    const user_id = Firebase.auth().currentUser.uid

    const Save = () => {
        Firebase.firestore().collection('user').doc(user_id).set({
            username: username,
            descricao: descricao,
            user_id: user_id,
            apexLegends: apexLegends,
            csGo: csGo,
            dota2: dota2,
            fortnite: fortnite,
            freeFire: freeFire,
            LeagueOfLegends: lol,
            Valorant: valorant,
            horaInicio: horaInicio,
            horaFim: horaFim,
            pc: pc,
            ps4: ps4
        }).catch((error) => {
            console.log(error.message);
        })
    }


    return (

        <View>
            <ModalCreate />
            <View style={styles.alinhar}>
                <Text style={styles.nome}>Perfil</Text>
            </View>

            <LinearGradient colors={['#242547', '#042960']} style={styles.usuario}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://pngimg.com/uploads/ninja/ninja_PNG26.png'
                    }}
                />
                <TouchableOpacity><Text>Foto</Text></TouchableOpacity>
                <Text>Insira seu Nick</Text>
                <TextInput
                    placeholder='username'
                    value={username}
                    onChangeText={setUsername}
                />
            </LinearGradient>

            <Text style={styles.nome}>Fale mais sobre você</Text>
            <LinearGradient
                colors={['#242547', '#042960']}
                style={styles.descricao}>
                <TextInput
                    placeholder='Descrição'
                    value={descricao}
                    onChangeText={setDescricao}
                />
            </LinearGradient>

            <Text style={styles.nome}>Quais jogos você joga?</Text>

            <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
                <Text onPress={() => { setApexLegends(true) }}>Apex Legends</Text> </LinearGradient>
            <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
                <Text onPress={() => { setCsGo(true) }}>Counter Strike: Global Offensive</Text> </LinearGradient>
             <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
                <Text onPress={() => { setdota2(true) }}>Dota 2</Text> </LinearGradient>
                <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
            <Text onPress={() => { setFortnite(true) }}>Fortnite</Text></LinearGradient>
            <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
            <Text onPress={() => { setfreeFire(true) }}>Free Fire</Text></LinearGradient>
            <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
            <Text onPress={() => { setLol(true) }}>League of Legends</Text></LinearGradient>
            <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
            <Text onPress={() => { setValorant(true) }}>Valorant</Text></LinearGradient>

            <Text>Que horas você começa a jogar?</Text>
            <TextInputMask
                type={'datetime'}
                options={{ format: 'HH:mm' }}
                placeholder={'horaInicio'}
                value={horaInicio}
                onChangeText={setHoraInicio}
            />
            <Text> Que hora você para de jogar?</Text>
            <TextInputMask
                type={'datetime'}
                options={{ format: 'HH:mm' }}
                placeholder={'horaFim'}
                value={horaFim}
                onChangeText={setHoraFim}
            />
            <Text>Em qual plataforma você joga?</Text>
            <Text onPress={() => { setPc(true) }}>PC</Text>
            <Text onPress={() => { setPs4(true) }}>PlayStation 4</Text>

            <TouchableOpacity onPress={Save}><Text>Salvar</Text></TouchableOpacity>
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
    }
})


export default CreateProfileScreen
