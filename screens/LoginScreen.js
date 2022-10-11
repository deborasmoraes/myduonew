import { StyleSheet, Text, TextInput,  View, Image, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import  {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable'
import React, { useLayoutEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'
import Firebase from '../config/firebase/firebaseConfig';

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [msg, setMSG] = useState('')
  
  const { user } = useAuth()
  const navigation = useNavigation()  

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const login = () =>{
      Firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(() =>{
        navigation.navigate('Home', { nome: 'Home'})
       
      })
      .catch(() =>{setMSG("Email ou senha inválidos."); console.log(msg);})
    }

    const validate = () =>{
      let emailRegex  = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ 
      if (email == '' || emailRegex.test(email)){
        return( setMSG("insira um email válido"), false)
        }
        if (senha == ''){
          return( setMSG("insira uma senha válida"), false)
          }
          true
    }
    function logarGoogle() {
      const provider = new Firebase.auth.GoogleAuthProvider()
      Firebase.auth().signInWithPopup(provider)
          .then((result) => {
              console.log(result.user)
              console.log(result.user.photoURL)
              setUrlFoto(result.user.photoURL)
          })
          .catch((error) => {
              console.log(error.message)
          })
  }
function callFunctions(){
  validate()
  login()
}


  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#042960', '#242547']} style={{height:'100%'}}>
            <View>
                <ImageBackground
                    source={require('../assets/minicial.png')}
                    style={styles.m}>
                    <Animatable.Image
                        animation="fadeInUp"
                        delay={400}
                        source={require('../assets/myduo.png')}
                        style={styles.logo}
                        resizeMode='center'
                    >
                    </Animatable.Image>
                    <Animatable.View
                        animation="fadeInLeft"
                        delay={800}>
                        <Text style={styles.login}>Login</Text>

                        <View style={styles.container}>
                            <Text style={styles.input1}>Email</Text>
                            <TextInput
                                style={styles.input2}
                                value = {email}
                                onChangeText = {setEmail}
                            />
                            

                            <Text style={styles.input1}>Senha</Text>
                            <TextInput style={styles.input2}
                            value = {senha}
                            onChangeText = {setSenha}
                            secureTextEntry = {true}
                            />
                            <Text>{msg}</Text>
                        </View>
                    </Animatable.View>
                    <Animatable.View
                    animation="fadeInUp"
                    delay={800}>
                        <TouchableOpacity
                            style={styles.botao1}
                            
                            onPress = {callFunctions}
                        >
                    
                            <Text style={{ color: '#FFFF', alignSelf: 'center' }}>Entrar</Text>
                        </TouchableOpacity>
                       
                        <TouchableOpacity
                            style={styles.botao2}
                            onPress={() => navigation.navigate('Redefinir', { nome: 'Redefinir' })}
                        >
                            <Text>Esqueci a senha</Text>
                        </TouchableOpacity>
                        <View style={styles.container}>
                            <Text style={{ textAlign: 'center', marginTop: '5%' }}>Ou continue com</Text>
                            <TouchableOpacity style={styles.botao3}><Text style={{ color: '#FFF' }}
                            onPress = {logarGoogle}
                            
                            >Google</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.botao3}><Text style={{ color: '#FFF' }}>Facebook</Text></TouchableOpacity>

                            <Text style={styles.container2}>Não possui conta?</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Registrar', { nome: 'Registrar' })}><Text>Criar agora</Text></TouchableOpacity>
                        </View>
                    </Animatable.View>
                </ImageBackground>


            </View>
            
            </LinearGradient>
            
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
  },
  m: {
      width: '100%',
      height: '71.1%',
      shadowOffset: { width: 0.1, height: 0.2 },
      shadowColor: '#385672'
  },
  logo: {
      alignSelf: 'center',
      width: '9%',
      height: '8%',
      padding: '4%',
      marginTop: '17%'
  },
  login: {
      fontSize: 35,
      justifyContent: 'flex-end',
      alignSelf: 'center',
      marginTop: '36%',
      marginBottom: '9%',
      fontWeight: 'bold'
  },
  input1: {
      width: '80%',
      marginTop: '3%',

  },
  input2: {
      borderBottomColor: '00182F',
      borderBottomWidth: 1,
      width: '80%',
      alignSelf: 'center',
      padding: '0.5%'
  },
  botao1: {
      backgroundColor: '#00182F',
      borderRadius: 20,
      width: '65%',
      height: '11%',
      alignSelf: 'center',
      padding: '3%',
      justifyContent: 'flex-start',
      marginTop: '9%'
  },
  botao2: {
      color: 'rgba(0, 24, 47, 0.82)',
      alignSelf: 'center',
      marginTop: '4%'
  },
  botao3: {
      backgroundColor: '#00182F',
      borderRadius: 20,
      width: '40%',
      height: '14.5%',
      marginTop: '3%',
      alignItems: 'center',
      justifyContent: 'center'
  },
  container2: {
      textAlign: 'center',
      marginTop: '14%'

  },
  gradient: {
      height: '100%',
      width: '100%'
  }


})

export default LoginScreen