
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const CardDuo = (props, { route }) => {
  const navigation = useNavigation()
  return (

    <LinearGradient colors={['#242547', '#042960']}
    style={styles.usuario}>
         {/* <Image style={styles.avatar} source={{
                      uri: 'https://pngimg.com/uploads/ninja/ninja_PNG26.png'
                  }}
                   /> */}
                   <Text>{props.image}</Text>
                   <View>
      <Text style={styles.username}>{props.username}</Text>
      </View>
      <Text style={styles.horas}>{props.horaInicio}</Text>
      <Text style={styles.horas}>{props.horaFim}</Text>

      <TouchableOpacity onPress={() => { navigation.navigate('AnotherUser', { user_id: props.user_id }) }}><Text>Ver Perfil</Text></TouchableOpacity>

    </LinearGradient>

  )
}

export default CardDuo

const styles = StyleSheet.create({
  usuario: {
    borderRadius: 15,
    borderBottomRightRadius: 40,
    padding: '3%',
    marginTop: '2%',
    height: 110,
  },
  nome: {
    color: "#F5F5F5",
    marginTop: '2.5%'
  },
  username: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFF',
    padding: '1%',
    marginLeft: 15,
    alignSelf: 'flex-start',
    marginTop: '2%'
  },
  horas: {
    padding: '1%',
    marginLeft: 15,
    alignSelf: 'center',
    marginRight: '10%'

  },
avatar: {
  borderWidth: 2,
  borderRadius: 100,
  borderColor: '#FFFF',
  width: '15%',
  height: '60%',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginLeft: 5
    },
})