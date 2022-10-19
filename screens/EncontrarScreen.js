import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import * as Animatable from 'react-native-animatable'

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
 <Animatable.View style={styles.container}
 animation="fadeInUp"
  delay={800}>
  <Animatable.Text 
style={styles.nome}
animation="fadeInUp"
delay={650}
  >Encontre seu Duo</Animatable.Text>
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
   </Animatable.View>
 )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#00182F',
    justifyContent: 'center',
 
  },
  lista:{
    marginTop: 15,
    marginBottom: 85
  },
  nome:{
      fontWeight: 'bold',
      fontSize: 30,
      color: '#F5F5F5',
      padding: '0.5%',
      marginLeft: '2%',
      textAlign: 'center',
      marginTop: '20%'
  }
  
  })

export default EncontrarScreen