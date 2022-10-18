import { StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native'
import React, { useState } from 'react'
import Firebase from '../config/firebase/firebaseConfig'


const ChatScreen = ({route}) => {
  const [message, setMessage] = useState()
  const duo = route.params.duo
  // const sendMessage = () =>{
  //   Firebase.firestore().collection('friends').
  // }
  
  
  return (
    <View>
      
      <Text>{duo.username}</Text>

      <TextInput
                    placeholder='Mensagem'
                    value={message}
                    onChangeText={setMessage}
                />
                <TouchableOpacity><Text>Enviar</Text></TouchableOpacity>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})