import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

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
 <View style={styles.container}
>
    <Animatable.View style={styles.alinhar}
     animation="fadeInUp"
     delay={800}>
    <MaterialCommunityIcons name={'bell-ring-outline'} size={22} color='#FFFF' style={{marginLeft: 5}}/>
      <Ionicons name={'warning-outline'} size={22} color='#FFFF' style={{marginRight: 5}}/>
    </Animatable.View>
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
                    image = {item.image}
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
    backgroundColor: '#00182F',
    justifyContent: 'center',
    padding: '5%'
  },
  lista:{
    marginTop: 15,
    marginBottom: 70,
    paddingBottom: 4,
    borderRadius: 20
  },
  nome:{
      fontWeight: 'bold',
      fontSize: 30,
      color: '#F5F5F5',
      padding: '0.5%',
      marginLeft: '2%',
      textAlign: 'center',
      marginTop: '8%'
  },
  alinhar: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginTop: '7%'
},
  
  })

export default EncontrarScreen