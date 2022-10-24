import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Linking } from 'react-native';
import Firebase from '../config/firebase/firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import modaltermo from '../components/modaltermo';

const SettingsScreen = () => {
  const navigate = useNavigation()
  return (

    <View style={styles.container}>

      <Text style={styles.nome}>Configurações</Text>
      <TouchableOpacity
      
      >
        <LinearGradient colors={['#242547', '#042960']}
          style={styles.destaque}>
          <Text style={{ color: '#F5F5F5' }}>Alterar Senha</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress = {LogOut}>
      <LinearGradient colors={['#242547', '#042960']}
        style={styles.destaque}>
        <Text style={{ color: '#F5F5F5' }}>Logout</Text>
      </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity>
      <LinearGradient colors={['#242547', '#042960']}
        style={styles.destaque}>
        <Text style={{ color: '#F5F5F5' }}>Desativar Conta</Text>
      </LinearGradient>
      </TouchableOpacity>

      <View style={styles.questions}>
        <Text style={{ color: '#F5F5F5' }}>Encontrou um problema?</Text></View>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:deboracvd@hotmail.com')}>
      <LinearGradient colors={['#242547', '#042960']}
        style={styles.destaque2}>
        <Text style={{ color: '#F5F5F5' }}>Fale com o desenvolvedor</Text>
      </LinearGradient>
      </TouchableOpacity>
      <View style={styles.questions}>
        <Text style={{ color: '#F5F5F5' }}>Privacidade</Text></View>
        <TouchableOpacity onPress={() => {modaltermo(true)}}>
      <LinearGradient colors={['#242547', '#042960']}
        style={styles.destaque2}>
        <Text style={{ color: '#F5F5F5' }}>Termos de Uso</Text>
      </LinearGradient>
      </TouchableOpacity>
      <View style={styles.questions}>
        <Text style={{ color: '#F5F5F5' }}>Join Us</Text></View>
        <TouchableOpacity>
      <LinearGradient colors={['#242547', '#042960']}
        style={styles.destaque2}>
        <Text style={{ color: '#F5F5F5' }}>Redes Sociais</Text>
      </LinearGradient>
      </TouchableOpacity>
    </View>


  )
}

const LogOut = () => {
  Firebase.auth().signOut()
  window.location.reload()
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#00182F',
    justifyContent: 'center',
    alignItems: 'center'

  },
  destaque: {
    height: 45,
    justifyContent: 'center',
    padding: 3,
    borderRadius: 40,
    marginTop: '7%',
    alignItems: 'center',
    width: 320
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#F5F5F5',
    padding: '0.5%',
    marginLeft: '2%',
    textAlign: 'center'
  },
  questions: {
    marginTop: '4%'
  },
  destaque2: {
    width: 320,
    height: 45,
    justifyContent: 'center',
    padding: 3,
    borderRadius: 40,
    marginTop: '4%',
    alignItems: 'center',
  },
})

export default SettingsScreen