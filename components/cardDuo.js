
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const CardDuo = (props) => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>{props.username}</Text>
            <Text>{props.image}</Text>
            <Text>{props.horaInicio}</Text>
            <Text>{props.horaFim}</Text>
            
            <TouchableOpacity onPress ={() =>{navigation.navigate('AnotherUser', {user_id: props.user_id})}}><Text>Ver Perfil</Text></TouchableOpacity>
           
        </View>
    )
}

export default CardDuo
