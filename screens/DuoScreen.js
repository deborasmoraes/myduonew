import { View, Text, Button } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import Firebase from '../config/firebase/firebaseConfig'
const DuoScreen = () => {
  const find =() =>{
    Firebase.firestore().collection('users')
.onSnapshot((querySnapshot) =>{
      querySnapshot.forEach(((doc) =>{console.log(doc.data());}))
      
    })
  }

  return (
    <View>
      <Text>DuoScreen</Text>
      <Button onPress={find}>encontrar</Button>
    </View>
  )
}

export default DuoScreen