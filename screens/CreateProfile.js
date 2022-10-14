import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import { TextInputMask } from 'react-native-masked-text'

import Firebase from '../config/firebase/firebaseConfig'

import { useNavigation } from '@react-navigation/native'
import ModalCreate from '../components/modalCreate'

const CreateProfileScreen = () => {
    const navigation = useNavigation()
    const [username, setUsername] = useState()
    const [descricao, setDescricao] = useState()
    const [apexLegends, setApexLegends] = useState(false)
    const [csGo, setCsGo] = useState(false)
    const [fortnite, setFortnite] = useState(false)
    const [dota2, setdota2] = useState(false)
    const [freeFire, setfreeFire] = useState(false)
    const [valorant, setValorant] = useState(false)
    const [lol, setLol] = useState(false)
    const [horaInicio, setHoraInicio] = useState()
    const [horaFim, setHoraFim] = useState()
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
            dota2:dota2,
            fortnite:fortnite,
            freeFire: freeFire,
            LeagueOfLegends: lol,
            Valorant: valorant,
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
            <ModalCreate/>
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

            <Text onPress={() => { setApexLegends(true) }}>Apex Legends</Text>
            <Text onPress={() => { setCsGo(true) }}>Counter Strike: Global Offensive</Text>
            <Text onPress={() => { setdota2(true) }}>Dota 2</Text>
            <Text onPress={() => { setFortnite(true) }}>Fortnite</Text>
            <Text onPress={() => { setfreeFire(true) }}>Free Fire</Text>
            <Text onPress={() => { setLol(true) }}>League of Legends</Text>
            <Text onPress={() => { setValorant(true) }}>Valorant</Text>

                       
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
