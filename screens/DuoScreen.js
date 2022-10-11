import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import Firebase from '../config/firebase/firebaseConfig'
import CardDuo from '../components/cardDuo'

const DuoScreen = () => {
  const [datauser, setDataUser] = useState([])
  const [game, setGame] = useState()
 const find = () =>{
  
  Firebase.firestore().collection('user').where(game, "==", true).onSnapshot(query =>{
  const data = []
  query.forEach((doc) =>{
    data.push({
      ...doc.data(),
      key:doc.id
    })
  })
  setDataUser(data);
  })

 }

  return (
    <View>
      <Text>Selecione qual jogo você deseja um Duo</Text>
      <TouchableOpacity onPress = {() =>{setGame('Valorant')}}><Text>Valorant</Text></TouchableOpacity>
      <TouchableOpacity onPress = {() =>{setGame('LeagueOfLegends')}}><Text>League Of Legends</Text></TouchableOpacity>

      
    <TouchableOpacity onPress = {find}><Text>Pesquisar</Text></TouchableOpacity>
      
    
     
     
     
     <FlatList
        data={datauser}
        renderItem={ ({item}) =>{return(
          <CardDuo  username = {item.username}
                    image = {'inseririmg'}
                    horaInicio = {item.horaInicio}
                    horaFim   = {item.horaFim}
                    user_id = {item.user_id}
          />
        )}}
        keyExtractor={item => item.id}
      />
    </View>
    
  )
}

export default DuoScreen