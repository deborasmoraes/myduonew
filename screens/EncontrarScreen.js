import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'

import Firebase from '../config/firebase/firebaseConfig'
import CardDuo from '../components/cardDuo'

const EncontrarScreen = () => {
  const [user, setUser] = useState([])

 
  useEffect(() => {
    const user = Firebase.auth().currentUser.uid
    let ref = Firebase.firestore().collection('user').onSnapshot(query => {
        const data = []
        query.forEach(doc => {
            data.push({
                ...doc.data(),
                key: doc.id
            })
            
        })
        
        setUser(data)
    })
    return () => ref()
}, [])
 return(
 <View style={styles.container}>
   <TouchableOpacity onPress = {() =>{console.log(user);}}><Text>aaa</Text></TouchableOpacity>
    <FlatList
     style={styles.lista}
        data={user}
        renderItem={ ({item}) =>{ console.log(user)
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
  
  }
  
  })

export default EncontrarScreen