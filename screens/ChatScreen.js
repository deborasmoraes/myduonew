import { StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native'
import React, { useState } from 'react'


const ChatScreen = ({route}) => {
  const [message, setMessage] = useState()
  const duo = route.params.duo
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