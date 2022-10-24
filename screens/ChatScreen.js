import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState, useLayoutEffect } from 'react'
import Firebase from '../config/firebase/firebaseConfig'
import { serverTimestamp } from '@firebase/firestore'
import SenderMessage from '../components/SenderMessage'
import ReceiverMessage from '../components/Receivermessage'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'
const ChatScreen = ({ route }) => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {backgroundColor:'#00182F'},
      headerTitleStyle:{color: '#FFFF'},
      headerTintColor: '#FFFF'
    });
  }, []);
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])
  const duo = route.params.duo
  const loggedUser = Firebase.auth().currentUser.uid

  const sendMessage = () => {
    Firebase.firestore().collection('friends').doc(duo.doc_id).collection('messages').doc().set({
      timestamp: serverTimestamp(),
      user_id: loggedUser,
      message: message
    })
    setMessage('')
  }
  useEffect(() => {
    Firebase.firestore().collection('friends').doc(duo.doc_id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(query => {
      const data = []
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
    <View style={{ flex: 1, backgroundColor: '#00182F' }}>

      <Text style={{ backgroundColor: '#242547', height: 30, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, justifyContent: 'center', textAlign: 'center', color: '#FFFF'}}>{duo.username}</Text>

      <FlatList
        style={styles.lista}
        data={chat}
        renderItem={({ item }) => {
          return (
            (item.user_id === loggedUser) ?  <SenderMessage message={item.message} /> : <ReceiverMessage message={item.message}/>
          )

        }}
        inverted ={-1}
        keyExtractor={item => item.id}

      />
      <View style={styles.alinhar}>
      <LinearGradient colors={['#242547', '#042960']}
        style={styles.usuario}>
        <TextInput
          placeholder='Mensagem'
          value={message}
          onChangeText={setMessage}
          multiline={true}
          numberOfLines={4}
          /></LinearGradient>
    <TouchableOpacity onPress={sendMessage} style={{alignSelf: 'flex-end', bottom: 30, marginLeft: 20}}><Image 
            source={require('../assets/myduo.png')}
            style={{ width: 30, height: 30, alignContent: 'flex-end', right: 10, bottom: 5}} /></TouchableOpacity> 
    </View>
    </View >
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  lista: {
    alignSelf: 'flex-start'
  },
  usuario:{
    borderRadius: 20,
    padding: '3%',
    height: 60,
    width: 320,
    marginBottom: 20,
    marginLeft: 15
  },
  alinhar: {
    flexDirection: 'row',
  },
})