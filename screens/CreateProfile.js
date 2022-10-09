import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import { TextInputMask } from 'react-native-masked-text'

import Firebase from '../config/firebase/firebaseConfig'

import { useNavigation } from '@react-navigation/native'
const CreateProfileScreen = () => {
    const navigation = useNavigation()
    const [username, setUsername] = useState()
    const [descricao, setDescricao] = useState()
    const [console, setConsole] = useState()
    const [valorant, setValorant] = useState(false)
    const [lol, setLol] = useState(false)
    const [horaInicio, setHoraInicio] = useState()
    const [horaFim, setHoraFim] = useState()
    const [pc, setPc] = useState(false)
    const [ps4, setPs4] = useState(false)
    const user_id = Firebase.auth().currentUser.uid

    const Save = () => {
        Firebase.firestore().collection('user').add({
            username: username,
            descricao: descricao,
            user_id: user_id,
            Valorant: valorant,
            LeagueOfLegends: lol,
            horaInicio: horaInicio,
            horaFim: horaFim,
            pc: pc,
            ps4 :ps4
        }).catch((error) => {
            console.log(error.message);
        })
    }


    return (

        <View>
            <TextInput
                placeholder='username'
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder='Descrição'
                value={descricao}
                onChangeText={setDescricao}
            />

            <Text onPress={() => { setValorant(true) }}>Valorant</Text>
            <Text onPress={() => { setLol(true) }}>League of Legends</Text>
            <TextInput
                placeholder='Hora inicio'
                value={console}
                onChangeText={setConsole}
            />
            <TextInputMask
                type={'datetime'}
                options={{ format: 'HH:mm' }}
                placeholder={'horaInicio'}
                value={horaInicio}
                onChangeText={setHoraInicio}
            />
            <TextInputMask
                type={'datetime'}
                options={{ format: 'HH:mm' }}
                placeholder={'horaFim'}
                value={horaFim}
                onChangeText={setHoraFim}
            />

            <Text onPress={() => { setPc(true) }}>PC</Text>
            <Text onPress={() => { setPs4(true) }}>PlayStation 4</Text>

            <TouchableOpacity onPress={Save}><Text>Salvar</Text></TouchableOpacity>
        </View>
    )
}

export default CreateProfileScreen
