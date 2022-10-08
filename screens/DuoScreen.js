import { View, Text, Button } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import Firebase from '../config/firebase/firebaseConfig'
const DuoScreen = () => {
  const find =() =>{
    Firebase.firestore().collection('users').where("Valorant", "==", "false").onSnapshot(querySnapshot =>{
      const data  = []
      querySnapshot.forEach(doc => {
        data.push({
          ...doc.data(),
          key:doc
        })
      });
      console.log(data);
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