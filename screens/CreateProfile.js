import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { useState, useEffect, useLayoutEffect } from 'react'
import { TextInputMask } from 'react-native-masked-text'
import { LinearGradient } from 'expo-linear-gradient';
import ImagePicker from "react-native-image-picker";

import Firebase from '../config/firebase/firebaseConfig'

import { useNavigation } from '@react-navigation/native'
import ModalCreate from '../components/modalCreate'

// export function PhotoComponent() {

//     const [file, setFile] = useState(null);
  
//     const pickImage = () => {
//         ImagePicker.showImagePicker
//       };
  
//       launchImageLibrary(options, async (response) => {
//         if (response.didCancel) {
//           console.log("Usuário cancelou a seleção");
//         } else if (response.error) {
//           console.log("Ocorreu um erro.");
//         } else {
//           const photoFile = {
//             uri: asset.uri,
//             name: asset.fileName,
//             type: "image/jpeg",
//           };
  
//           setFile(photoFile);
//         }
//       });
//     };
  


const CreateProfileScreen = () => {
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
        }).then(() =>{
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

       
        if (horaInicio >= 0 || horaInicio <= 24)  {
            setMsg("Insira um horário de início"), false
            return
        }

        if (horaFim >= 0 || horaFim <= 24)  {
            setMsg("Insira um horário Final"), false
            return
        }

        console.log(msg);
    }
    
    


    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#00182F', padding: '6.5%' }}>
            <ModalCreate />
           
                <Text style={styles.nome}>Perfil</Text>
            

            <LinearGradient colors={['#242547', '#042960']} style={styles.usuario}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://pngimg.com/uploads/ninja/ninja_PNG26.png'
                    }}
                />
                <TouchableOpacity><Text>Alterar foto</Text></TouchableOpacity>
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
                    style={{marginLeft: 10, flexWrap: 'wrap', color: '#FFFF'}}
                />
            </LinearGradient>
            

            <Text style={styles.nome}>Escolha seus jogos favoritos</Text>
            <Text>{msg}</Text>
                    
                 <View style={styles.alinhar}>  
                 <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}> 
                <Text onPress={() => { setApexLegends(true) }}>Apex Legends</Text></LinearGradient>
                <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
                <Text onPress={() => { setCsGo(true) }}>Counter Strike</Text></LinearGradient>
                <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
                <Text onPress={() => { setdota2(true) }}>Dota 2</Text></LinearGradient>
                <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
                <Text onPress={() => { setFortnite(true) }}>Fortnite</Text></LinearGradient>
                <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
                <Text onPress={() => { setfreeFire(true) }}>Free Fire</Text></LinearGradient>
                <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
                <Text onPress={() => { setLol(true) }}>League of Legends</Text></LinearGradient>
                <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
                <Text onPress={() => { setValorant(true) }}>Valorant</Text></LinearGradient>
                </View>

                    <Text style={styles.nome}>Horário disponível</Text>
            <View style={styles.alinhar2}>
            <Text style={styles.horario2}>Inicio</Text>
            <Text style={styles.nome}>Fim</Text>
            </View>
            <View style={styles.alinhar2}>
            <TextInputMask
                type={'datetime'}
                options={{ format: 'HH:mm'  }}
                placeholder={'horaInicio'}
                value={horaInicio}
                onChangeText={setHoraInicio}
                style={{color: '#FFFF'}}

            />
            
            <TextInputMask
                type={'datetime'}
                options={{ format: 'HH:mm' }}
                placeholder={'horaFim'}
                value={horaFim}
                onChangeText={setHoraFim}
                style={{color: '#FFFF'}}
            />
            </View>
            <Text style={styles.nome}>Em qual plataforma você joga?</Text>
            <View style={styles.alinhar}>
            <LinearGradient colors={['#242547', '#042960']} style={styles.plataformas}>
            <Text onPress={() => { setPc(true) }}>PC</Text></LinearGradient>
            <LinearGradient colors={['#242547', '#042960']} style={styles.plataformas}>
            <Text onPress={() => { setPs4(true) }}>PlayStation 4</Text></LinearGradient>
            </View>

            <TouchableOpacity onPress={validate} style={styles.botao2}><Text style={styles.nome}>Salvar Informações</Text></TouchableOpacity>
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
    alinhar:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '2%',
        marginTop: '1%',
        marginBottom:'1%'
      },
      alinhar2:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2%',
        marginTop: '1%',
        marginHorizontal: '4%'
      },
      alinhar2:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    
      },
    usuario: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        borderRadius: 15,
        borderBottomRightRadius: 40,
        padding: '3%',
        marginTop: '1%',
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
    },
    plataformas: {
        padding: '1%',
        width: 100,
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
})


export default CreateProfileScreen
