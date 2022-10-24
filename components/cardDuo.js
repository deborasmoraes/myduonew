
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const CardDuo = (props, { route }) => {
  const navigation = useNavigation()
  return (

    <LinearGradient colors={['#242547', '#042960']}
      style={styles.usuario}>
      <View style={styles.alinhar}>
        <Image style={styles.avatar} source={{
          uri: 'https://pngimg.com/uploads/ninja/ninja_PNG26.png'
        }}
        />
        <Text>{props.image}</Text>

        <Text style={styles.username}>{props.username}</Text>
      </View>

      <View style={styles.alinhar}>

        <Text style={styles.horas}>{props.horaInicio}</Text>
        <Text style={styles.horas2}>{props.horaFim}</Text>
        <View style={{ alignItems: 'flex-end'}}>
          <TouchableOpacity
            style={{ textAlign: 'center', alignItems: 'center', backgroundColor: '#FFFF', width: 50, height: 30, borderRadius: 40, padding: 3, bottom: 18, marginLeft: 70, marginTop: 1 }}
            onPress={() => { navigation.navigate('AnotherUser', { user_id: props.user_id }) }}><Text>GO</Text></TouchableOpacity>
        </View>

      </View>
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
    marginTop: '2%'
  },
  horas: {
    marginLeft: 80,
    alignSelf: 'stretch',
    fontSize: 15,
    color: '#FFFF',
    padding: 1
  },
  horas2: {
    marginLeft: 30,
    alignSelf: 'stretch',
    fontSize: 15,
    color: '#FFFF',
  },
  avatar: {
    borderWidth: 2,
    borderRadius: 100,
    width: '16%',
    height: '130%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 5,
    marginTop: 15,

  },
  alinhar: {
    flexDirection: 'row',
  },
})