import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import  { useState, useEffect } from 'react'
import Firebase from '../config/firebase/firebaseConfig'
import { useNavigation } from '@react-navigation/native'
const CreateProfileScreen = () => {
    const navigation = useNavigation()
    const [username, setUsername] = useState()
    const [descricao, setDescricao] = useState()
    const [console, setConsole] = useState()
   const [valorant, setValorant] = useState(false)
   const [lol , setLol] = useState(false)
   
    const user_id = Firebase.auth().currentUser.uid
    
  const Save = () =>{Firebase.firestore().collection('user').add({
      username: username,
      descricao: descricao,
      user_id:user_id,
      Valorant: valorant,
      LeagueOfLegends:lol
  }).catch((error) =>{
      console.log(error.message);} )
}
    
    
    return (

        <View>
        <TextInput
        placeholder = 'username'
        value = {username}
        onChangeText = {setUsername}
        />
        <TextInput
        placeholder = 'Descrição'
        value = {descricao}
        onChangeText = {setDescricao}
        />

        <Text onPress={ () =>{setValorant(true)}}>Valorant</Text>
        <Text onPress={ () =>{setLol(true)}}>League of Legends</Text>
<TextInput
        placeholder = 'Console'
        value = {console}
        onChangeText = {setConsole}
        />

        <TouchableOpacity onPress ={Save}><Text>Salvar</Text></TouchableOpacity>
        </View>
    )
}

export default CreateProfileScreen
