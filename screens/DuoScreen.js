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
  setDataUser(data);
  })

 }

  return (
    <View>
      <FlatList
      data={datauser}
      renderItem/>
    </View>
  )
}

export default DuoScreen