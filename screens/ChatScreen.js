import { StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native'
import React, { useState } from 'react'
import Firebase from '../config/firebase/firebaseConfig'
import { serverTimestamp } from '@firebase/firestore'

const ChatScreen = ({route}) => {
  const [message, setMessage] = useState()
  const duo = route.params.duo
  const loggedUser = Firebase.auth().currentUser.uid

  const sendMessage = () =>{
    Firebase.firestore().collection('friends').doc(duo.doc_id).collection('messages').doc().set({
      timestamp: serverTimestamp(),
      user_id: loggedUser,
      message: message
    })
    .catch(error =>{console.log(error.message);})
  }
  
  
  return (
    <View>
      
      <Text>{duo.username}</Text>

      <TextInput
                    placeholder='Mensagem'
                    value={message}
                    onChangeText={setMessage}
                />
                <TouchableOpacity onPress = {sendMessage}><Text>Enviar</Text></TouchableOpacity>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})