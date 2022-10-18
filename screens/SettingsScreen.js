import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const SettingsScreen = () => {
  return (

    <View style={styles.container}>

      <Text style={styles.nome}>Configurações</Text>

      <LinearGradient colors={['#242547', '#042960']}
        style={styles.destaque}>
        <Text style={{color: '#F5F5F5'}}>Alterar Senha</Text>
        </LinearGradient>

        <LinearGradient colors={['#242547', '#042960']}
        style={styles.destaque}>
        <Text style={{color: '#F5F5F5'}}>Logout</Text>
        </LinearGradient>

        <LinearGradient colors={['#242547', '#042960']}
        style={styles.destaque}>
        <Text style={{color: '#F5F5F5'}}>Desativar Conta</Text>
        </LinearGradient>

        <View style={styles.questions}>
        <Text style={{color: '#F5F5F5'}}>Encontrou um problema?</Text></View>
        <LinearGradient colors={['#242547', '#042960']}
        style={styles.destaque2}>
        <Text style={{color: '#F5F5F5'}}>Fale com o desenvolvedor</Text>
        </LinearGradient>
        <View style={styles.questions}>
        <Text style={{color: '#F5F5F5'}}>Privacidade</Text></View>
        <LinearGradient colors={['#242547', '#042960']}
        style={styles.destaque2}>
        <Text style={{color: '#F5F5F5'}}>Termos de Uso</Text>
        </LinearGradient>
        <View style={styles.questions}>
        <Text style={{color: '#F5F5F5'}}>Join Us</Text></View>
        <LinearGradient colors={['#242547', '#042960']}
        style={styles.destaque2}>
        <Text style={{color: '#F5F5F5'}}>Redes Sociais</Text>
        </LinearGradient>
    </View>


  )
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
  questions:{
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