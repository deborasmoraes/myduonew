
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

const CardDuo = (props, {route}) => {
    const navigation = useNavigation()
    return (
        <View>
            <ScrollView>
            <Text>{props.username}</Text>
            <Text>{props.image}</Text>
            <Text>{props.horaInicio}</Text>
            <Text>{props.horaFim}</Text>
            
            <TouchableOpacity onPress ={() =>{navigation.navigate('AnotherUser', {user_id: props.user_id})}}><Text>Ver Perfil</Text></TouchableOpacity>
           
           </ScrollView>
        </View>
    )
}

export default CardDuo
