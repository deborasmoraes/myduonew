import { View, Text, Button, FlatList } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import Firebase from '../config/firebase/firebaseConfig'

const DuoScreen = () => {
  const [datauser, setDataUser] = useState()
 const find = () =>{
  
  Firebase.firestore().collection('user').where("Valorant", "==", true).onSnapshot(query =>{
  const data = []
  query.forEach((doc) =>{
    data.push({
      ...doc.data(),
      key:doc.id
    })
  })
  console.log(data);
  })

 }

  return (
    <View>
      <FlatList
      data={datauser}
      renderItem/>
    <Button onPress = {find}>ao</Button>
    </View>
    
  )
}

export default DuoScreen