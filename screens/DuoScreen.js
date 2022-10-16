import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
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
    <View style={styles.container}>
      <Text style={styles.nome}>Para qual jogo você deseja um Duo?</Text>
      <View style={styles.alinhar}>
      <LinearGradient colors={['#242547', '#042960']}
                    style={styles.jogos}>
      <TouchableOpacity onPress = {() =>{setGame('apexLegends')}}><Text style={{color: '#F5F5F5'}}>Apex Legends</Text></TouchableOpacity></LinearGradient>
      <LinearGradient colors={['#242547', '#042960']}
                    style={styles.jogos}>
      <TouchableOpacity onPress = {() =>{setGame('csGo')}}><Text style={{color: '#F5F5F5'}}>Counter-Strike</Text></TouchableOpacity></LinearGradient>
      <LinearGradient colors={['#242547', '#042960']}
                    style={styles.jogos}>
      <TouchableOpacity onPress = {() =>{setGame('dota2')}}><Text style={{color: '#F5F5F5'}}>Dota 2</Text></TouchableOpacity></LinearGradient>
      <LinearGradient colors={['#242547', '#042960']}
                    style={styles.jogos}>
      <TouchableOpacity onPress = {() =>{setGame('fortnite')}}><Text style={{color: '#F5F5F5'}}>Fortnite</Text></TouchableOpacity></LinearGradient>
      <LinearGradient colors={['#242547', '#042960']}
                    style={styles.jogos}>
      <TouchableOpacity onPress = {() =>{setGame('freeFire')}}><Text style={{color: '#F5F5F5'}}>Free Fire</Text></TouchableOpacity></LinearGradient>
      <LinearGradient colors={['#242547', '#042960']}
                    style={styles.jogos}>
      <TouchableOpacity onPress = {() =>{setGame('LeagueOfLegends')}}><Text style={{color: '#F5F5F5'}}>League of Legends</Text></TouchableOpacity></LinearGradient>
      <LinearGradient colors={['#242547', '#042960']}
                    style={styles.jogos}>
      <TouchableOpacity onPress = {() =>{setGame('valorant')}}><Text style={{color: '#F5F5F5'}}>Valorant</Text></TouchableOpacity></LinearGradient>
      
      </View>
      
    <TouchableOpacity onPress = {find}><Text style={styles.nome2}>Filtrar</Text></TouchableOpacity>
      
    
     
     
     
     <FlatList
        data={datauser}
        renderItem={ ({item}) =>{
          return(
            <LinearGradient colors={['#242547', '#042960']}
                    style={styles.usuario}>
          <CardDuo  username = {item.username}
                    image = {'inseririmg'}
                    horaInicio = {item.horaInicio}
                    horaFim   = {item.horaFim}
                    user_id = {item.user_id}
          />
          </LinearGradient>
        )}}
        keyExtractor={item => item.id}
      />
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#00182F',
    margin: 'auto',
    padding: '3%'
   
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#F5F5F5',
    marginTop: '6%',
    padding: '0.5%',
    marginLeft: '2%',
    textAlign: 'center'
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
    justifyContent: 'center',
},
alinhar:{
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '5%',
  marginTop: '2.5%'
  
},
nome2: {
  fontWeight: 'bold',
  fontSize: 15,
  color: '#F5F5F5',
  marginTop: '1%',
  padding: '0.5%',
  marginLeft: '2%',
  textAlign: 'center',
}, 
usuario: {
  justifyContent: 'center',
  borderRadius: 15,
  borderBottomRightRadius: 40,
  padding: '3%',
  marginTop: '2%',
  height: 110,
  width: 350,
  alignSelf: 'center'
},

})

export default DuoScreen