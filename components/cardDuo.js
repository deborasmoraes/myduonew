
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const CardDuo = (props, {route}) => {
    const navigation = useNavigation()
    return (
        <View>
             <LinearGradient colors={['#242547', '#042960']}
                    style={styles.usuario}>
            <Text style={styles.nome}>{props.username}</Text>
            <Text style={styles.nome}>{props.image}</Text>
            <Text style={styles.nome}>{props.horaInicio}</Text>
            <Text style={styles.nome}>{props.horaFim}</Text>
            
            <TouchableOpacity onPress ={() =>{navigation.navigate('AnotherUser', {user_id: props.user_id})}}><Text>Ver Perfil</Text></TouchableOpacity>
           
           </LinearGradient>
        </View>
    )
}

export default CardDuo

const styles = StyleSheet.create({
    usuario: {
        justifyContent: 'center',
        borderRadius: 15,
        borderBottomRightRadius: 40,
        padding: '3%',
        marginTop: '2%',
        height: 110,
        width: 350,
        alignSelf: 'center',
        marginTop: '2%'
      },
      nome:{
        color: "#F5F5F5"
      }
})