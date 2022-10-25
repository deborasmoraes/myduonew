import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { useState, useEffect, useLayoutEffect } from 'react'
import { TextInputMask } from 'react-native-masked-text'
import { LinearGradient } from 'expo-linear-gradient';
import ImagePicker from "react-native-image-picker";

import Firebase from '../config/firebase/firebaseConfig'

import { useNavigation } from '@react-navigation/native'
import ModalCreate from '../components/modalCreate'




const CreateProfileScreen = () => {
    const [file, setFile] = useState(null)
    const [msg, setMsg] = useState('')
    const navigation = useNavigation()
    const [username, setUsername] = useState('')
    const [descricao, setDescricao] = useState('')
    const [apexLegends, setApexLegends] = useState(false)
    const [csGo, setCsGo] = useState(false)
    const [fortnite, setFortnite] = useState(false)
    const [dota2, setdota2] = useState(false)
    const [freeFire, setfreeFire] = useState(false)
    const [valorant, setValorant] = useState(false)
    const [overwatch, setOverwatch] = useState(false)
    const [lol, setLol] = useState(false)
    const [horaInicio, setHoraInicio] = useState('')
    const [horaFim, setHoraFim] = useState('')
    const [pc, setPc] = useState(false)
    const [console, setConsole] = useState(false)
    const [mobile, setMobile] = useState(false)
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
            overwatch: overwatch,
            Valorant: valorant,
            horaInicio: horaInicio,
            horaFim: horaFim,
            pc: pc,
            console: console,
            mobile: mobile
        }).then(() => {
            Firebase.firestore().collection('user').doc(user_id).collection('added').doc().set({
                baseUser: ''
            })
        })
            .catch((error) => {
                console.log(error.message);
            })
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const validate = () => {
        if (username == '') {
            setMsg("insira um nome de usuário."), false
            return
        }

        if (descricao == '') {
            setMsg("insira uma descrição."), false
            return
        }
        if (apexLegends == false && fortnite == false && valorant == false && lol == false && freeFire == false && dota2 == false && csGo == false) {
            setMsg("Selecione ao menos um jogo!")
            return
        }

        if (horaInicio >= 0 || horaInicio <= 24) {
            setMsg("Insira um horário de início"), false
            return
        }

        if (horaFim >= 0 || horaFim <= 24) {
            setMsg("Insira um horário final"), false
            return
        }

        else {
            setMsg('')
            Save()
        }
    }

    const pickImage = () => {
        ImagePicker.showImagePicker

        launchImageLibrary(options, async (response) => {
            if (response.didCancel) {
                console.log("Usuário cancelou a seleção");
            } else if (response.error) {
                console.log("Ocorreu um erro.");
            } else {
                const photoFile = {
                    uri: asset.uri,
                    name: asset.fileName,
                    type: "image/jpeg",
                };

                setFile(photoFile);
            }
        });
    };



    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#00182F', padding: '6.5%' }}>
            <View style={{backgroundColor: '#FFFF'}}>
            <ModalCreate />
            </View>
            <Text style={styles.nome}>Perfil</Text>


            <LinearGradient colors={['#242547', '#042960']} style={styles.usuario}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://pngimg.com/uploads/ninja/ninja_PNG26.png'
                    }}
                />
                {/* <TouchableOpacity  onPress={pickImage}><Text>Alterar foto</Text></TouchableOpacity> */}

                <TextInput
                    placeholder='Insira seu nick'
                    value={username}
                    onChangeText={setUsername}
                    style={styles.username}

                />
                {(msg.search('usuário') > -1) ? <Text>{msg}</Text> : ''}

            </LinearGradient>

            <Text style={styles.nome}>Fale mais sobre você</Text>
            <View style={{ flexDirection: 'row' }}>
                <LinearGradient
                    colors={['#242547', '#042960']}
                    style={styles.descricao}>
                    <TextInput
                        placeholder='Descrição'
                        value={descricao}
                        onChangeText={setDescricao}
                        multiline={true}
                        numberOfLines={2}
                        style={{ color: '#FFFF' }}
                        returnKeyType='done'
                    />
                </LinearGradient>
            </View>
            {(msg.search('descrição') > -1) ? <Text>{msg}</Text> : ''}

            <Text style={styles.nome}>Escolha seus jogos favoritos</Text>

            <View style={styles.alinhar}>
                <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
                    <TouchableOpacity onPress={() => { setApexLegends(true) }} style={styles.botao}>
                        <Text>Apex Legends</Text></TouchableOpacity></LinearGradient>
                <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
                    <TouchableOpacity onPress={() => { setCsGo(true) }} style={styles.botao}>
                        <Text>Counter Strike</Text></TouchableOpacity></LinearGradient>
                <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
                    <TouchableOpacity onPress={() => { setdota2(true) }} style={styles.botao}>
                        <Text>Dota 2</Text></TouchableOpacity></LinearGradient>
                <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
                    <TouchableOpacity onPress={() => { setFortnite(true) }} style={styles.botao}>
                        <Text>Fortnite</Text></TouchableOpacity></LinearGradient>
                <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
                    <TouchableOpacity onPress={() => { setfreeFire(true) }} style={styles.botao}>
                        <Text>Free Fire</Text></TouchableOpacity></LinearGradient>
                <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
                    <TouchableOpacity onPress={() => { setLol(true) }} style={styles.botao}>
                        <Text>League of Legends</Text></TouchableOpacity></LinearGradient>
                        <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
                    <TouchableOpacity onPress={() => { setOverwatch(true) }} style={styles.botao}>
                        <Text>Overwatch 2</Text></TouchableOpacity></LinearGradient>
                <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
                    <TouchableOpacity onPress={() => { setValorant(true) }} style={styles.botao}>
                        <Text>Valorant</Text></TouchableOpacity></LinearGradient>
            </View>
            {(msg.search('jogo') > -1) ? <Text>{msg}</Text> : ''}


            <Text style={styles.nome}>Horário disponível</Text>
            <View style={styles.alinhar2}>
                <Text style={styles.horario2}>Início</Text>
                <Text style={styles.nome}>Fim</Text>
            </View>
            <View style={styles.alinhar2}>
                <TextInputMask
                    type={'datetime'}
                    options={{ format: 'HH:mm' }}
                    placeholder={'Hora Inicio'}
                    value={horaInicio}
                    onChangeText={setHoraInicio}
                    style={{ color: '#FFFF', marginRight: 50, marginLeft:30 }}

                />
                {(msg.search('início') > -1) ? <Text>{msg}</Text> : ''}


                <TextInputMask
                    type={'datetime'}
                    options={{ format: 'HH:mm' }}
                    placeholder={'Hora Fim'}
                    value={horaFim}
                    onChangeText={setHoraFim}
                    style={{ color: '#FFFF', marginLeft:40 }}
                />
                {(msg.search('final') > -1) ? <Text>{msg}</Text> : ''}
            </View>
            <Text style={styles.nome}>Em qual plataforma você joga?</Text>
            <View style={styles.alinhar}>
                <LinearGradient colors={['#242547', '#042960']} style={styles.plataformas}>
                    <TouchableOpacity onPress={() => { setPc(true) }} style={styles.botao}>
                    <Text>PC</Text></TouchableOpacity></LinearGradient>
                <LinearGradient colors={['#242547', '#042960']} style={styles.plataformas}>
                    <TouchableOpacity onPress={() => { setConsole(true) }} style={styles.botao}>
                    <Text>PlayStation ou Xbox</Text></TouchableOpacity></LinearGradient>
                    <LinearGradient colors={['#242547', '#042960']} style={styles.plataformas}>
                    <TouchableOpacity onPress={() => { setMobile(true) }} style={styles.botao}>
                    <Text>Mobile</Text></TouchableOpacity></LinearGradient>
            </View>

            <TouchableOpacity onPress={validate} style={styles.botao2}><Text style={styles.nome}>Salvar</Text></TouchableOpacity>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 'auto',
        backgroundColor: '#00182F',
        justifyContent: 'center',
        padding: '9%'
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
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '2%',
        marginTop: '1%',
        marginBottom: '1%'
    },
    alinhar2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        padding: '2%',
        marginTop: '1%',

    },
    alinhar2: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',

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
        borderRadius: 20,
        padding: '3%',
        height: 80,
        width: 337,
        marginBottom: 2,
        marginLeft: 2,
        marginTop: 4,
        flexWrap: 'wrap',
        borderBottomRightRadius: 40,
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
    },
    jogos: {
        padding: '1%',
        width: 320,
        height: 40,
        borderRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        marginTop: '2%',
        alignSelf: 'center',
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
    },
    plataformas: {
        padding: '1%',
        width: 320,
        height: 35,
        borderRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        marginTop: '1%',
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFFF'
    },
    botao2: {
        color: '#FFFFF',
        alignSelf: 'center',
    },
    username: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFFF',
        marginTop: '2%',
        padding: '1%',
        marginLeft: 15
    },
    botao: {
        padding: '1%',
        width: 320,
        height: 40,
        borderRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    }
})


export default CreateProfileScreen
