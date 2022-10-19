
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const CardDuo = (props, { route }) => {
  const navigation = useNavigation()
  return (

    <LinearGradient colors={['#242547', '#042960']}
      style={styles.usuario}>
      <Text style={styles.avatar}>{props.image}</Text>
      <View style={styles.username}><Text style={styles.nome}>{props.username}</Text></View>
      <View style={styles.horas}><Text style={styles.nome}>{props.horaInicio}</Text></View>
      <Text style={styles.nome}>{props.horaFim}</Text>

      <TouchableOpacity onPress={() => { navigation.navigate('AnotherUser', { user_id: props.user_id }) }}><Text>Ver Perfil</Text></TouchableOpacity>

    </LinearGradient>

  )
}

export default CardDuo

const styles = StyleSheet.create({
  usuario: {
    flexDirection: 'column',
    alignSelf: 'center',
    borderRadius: 15,
    borderBottomRightRadius: 40,
    padding: '3%',
    marginTop: '2%',
    height: 110,
    width: 335,
    padding: '3%',
    alignContent: 'center',

  },
  nome: {
    color: "#F5F5F5",
    marginTop: '2.5%'
  },
  username: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFFF',
    padding: '1%',
    marginLeft: 15,
    alignSelf: 'flex-start'
  },
  horas: {
    padding: '1%',
    marginLeft: 15,
    alignSelf: 'flex-start'

  },
  avatar: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: '#FFFF',
    width: 60,
    height: 60,
    justifyContent: 'center',
    marginLeft: 5,
    marginTop: '2%'
  },

  // usuario: {
  //   justifyContent: 'center',
  //   borderRadius: 15,
  //   borderBottomRightRadius: 40,
  //   padding: '3%',
  //   marginTop: '2%',
  //   height: 110,
  //   width: 350,
  //   alignSelf: 'center'
  // },
})