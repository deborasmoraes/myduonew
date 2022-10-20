import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native'
import React, { useEffect, useState } from 'react'
import Firebase from '../config/firebase/firebaseConfig'
import { serverTimestamp } from '@firebase/firestore'
import SenderMessage from '../components/SenderMessage'
import ReceiverMessage from '../components/Receivermessage'

const ChatScreen = ({route}) => {
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])
  const duo = route.params.duo
  const loggedUser = Firebase.auth().currentUser.uid

  const sendMessage = () =>{
    Firebase.firestore().collection('friends').doc(duo.doc_id).collection('messages').doc().set({
      timestamp: serverTimestamp(),
      user_id: loggedUser,
      message: message
    })
    setMessage('')
  }
  useEffect(() =>{
    Firebase.firestore().collection('friends').doc(duo.doc_id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(query =>{
      const data  = []
      query.forEach(doc => {
        data.push({
          ...doc.data(),
          key: doc.id
        })
      })
    setChat(data)
    })
  }, [])
  
  
  return (
    <View>
      
      <Text>{duo.username}</Text>

    <FlatList
      data={chat}
      renderItem = {({item}) =>{ 
        return(
          (item.user_id === loggedUser)?<SenderMessage message ={item.message} />:<ReceiverMessage message  ={item.message}/>
        )
        
      }}
      keyExtractor ={item =>item.id}
    
    />
    <View>
      <TextInput
                    placeholder='Mensagem'
                    value={message}
                    onChangeText={setMessage}
                />
                {(message != '')?<TouchableOpacity onPress = {sendMessage}><Text>Enviar</Text></TouchableOpacity>:''}
                </View>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})