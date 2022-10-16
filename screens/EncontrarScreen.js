import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'

import Firebase from '../config/firebase/firebaseConfig'
import CardDuo from '../components/cardDuo'

const EncontrarScreen = () => {
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
 return(
 <View style={styles.container}>
    <FlatList
     style={styles.lista}
        data={datauser}
        renderItem={ ({item}) =>{
          return(
           
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

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#00182F'
  },
  lista:{
    marginTop: 80,
    backgroundColor: '#242547'
  }
  
  })

export default EncontrarScreen