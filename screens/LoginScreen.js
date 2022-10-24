import { StyleSheet, Text, TextInput, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable'
import React, { useLayoutEffect, useState, useEffect, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import Firebase from '../config/firebase/firebaseConfig';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


const LoginScreen = () => {
    
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [msg, setMSG] = useState('')

    
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const login = () => {
        Firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(() => {
                let user = Firebase.auth().currentUser.uid
                Firebase.firestore().collection('user').doc(user).onSnapshot((query) =>{
                    if(query.exists == true){
                        navigation.navigate('Home', {nome: 'Home'})
                    }else{navigation.navigate('CreateProfile', {nome: 'Home'})
                }
                })

            })
            .catch(() => { setMSG("Email ou senha inválidos.");})
    }

    const validate = () => {
        let emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
        if (email == '' ) {
             setMSG("Insira um email."), false
             return
        }else if(emailRegex.test(email) == false) {
            setMSG('Insira um email válido')
            return
        }
         else if (senha == '') {
             setMSG("Insira uma senha."), false
             return
        }
         else if (senha.length < 6 || senha.length > 10)  {
            setMSG("a senha deve ser maior que 6 caracteres e menor que 10 caracteres"), false
            return
       }else{
        login()
       }
      
       
    }


    const [fontsLoaded] = useFonts({
        'FredokaOneRegular': require("../assets/fonts/FredokaOne-Regular.ttf")})
    

        useEffect(() => {
          async function prepare(){
            await SplashScreen.preventAutoHideAsync();
          }
          prepare()
        }, [])
    
        const onLayout = useCallback(async () =>{
          if (fontsLoaded){
            await SplashScreen.hideAsync();
          }
        }, [fontsLoaded])
    
        if(!fontsLoaded) return null
    const loginGoogle = () =>{
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then(() => {
            let user = Firebase.auth().currentUser.uid
            Firebase.firestore().collection('user').doc(user).onSnapshot((query) =>{
                if(query.exists == true){
                    navigation.navigate('Home', {nome: 'Home'})
                }else{navigation.navigate('CreateProfile', {nome: 'Home'})
            }
            })

        })
        .catch(error =>{console.log(error);})
    }

    return (

        <LinearGradient
       
            colors={['#1C3551', '#242547']}
            end={{ x: 0.1, y: 0.4 }}>
            <Image 
            source={require('../assets/mazul.png')}
            style={{ width: 396, height: 275 }} />

            <Animatable.Text 
            onLayout={onLayout}
            style={styles.login}
            animation="fadeInUp"
                delay={550}>Login</Animatable.Text>
            <Animatable.View 
            animation="fadeInUp"
            delay={800}
            style={styles.container}>
                <Text style={styles.input1}>Email</Text>
                <TextInput
                    style={styles.input2}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />


                <Text
                 style={styles.input1}>Senha</Text>
                <TextInput 
                style={styles.input2}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
                {(validate)? <Text>{msg}</Text>:''}
            </Animatable.View>

            <Animatable.View
                animation="fadeInUp"
                delay={800}>
                <TouchableOpacity
                    style={styles.botao1}
                    onPress={validate}
                >

                    <Text 
                    style={{ color: '#FFFF', 
                    textAlign: 'center',  }}>
                        Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botao2}
                    onPress={() =>
                        navigation.navigate('Redefinir', { nome: 'Redefinir' })}
                >
                    <Text style={{ color: 'grey' }}>Esqueci a senha</Text>
                </TouchableOpacity>
                <View style={styles.container}>
<<<<<<< HEAD
=======
                    <Text
                        style={{
                            textAlign: 'center',
                            marginTop: '1%',
                            color: '#FFFF'
                        }}>
                        Ou continue com</Text>
                    <TouchableOpacity
                        onPress={loginGoogle}
                        style={styles.botao3}>
                        
                        <Text
                            style={{ color: '#FFF' }}
                            
                        >Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botao3}>
                        <Text
                            style={{ color: '#FFF' }}>
                            Facebook</Text>
                    </TouchableOpacity>

>>>>>>> f17d066c380b73f9f3d47d6f26bfa8ddf7152d49
                    <Text style={styles.container2}>Não possui conta?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Registrar', { nome: 'Registrar' })}><Text style={{color:'#FFFF'}}>Criar agora</Text></TouchableOpacity>
                </View>
            </Animatable.View>





        </LinearGradient>


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
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#FFFF'
    },
    input1: {
        width: '75%',
        marginTop: '8%',
        color: '#FFFF'

    },
    input2: {
        borderBottomWidth: 1,
        width: '75%',
        alignSelf: 'center',
        borderColor: 'grey',
        borderStyle:'dashed'
    },
    botao1: {
        backgroundColor: '#00182F',
        borderRadius: 20,
        width: '65%',
        height: '15%',
        alignSelf: 'center',
        padding: 2,
        justifyContent: 'center',
        marginTop: '7%'
    },
    botao2: {
        color: '#FFFFF',
        alignSelf: 'center',
        marginTop: '4%'
    },
    botao3: {
        backgroundColor: '#00182F',
        borderRadius: 20,
        width: '40%',
        height: '15.8%',
        padding: '0.5%',
        marginTop: '3%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container2: {
        textAlign: 'center',
        marginTop: '20%',
        color: '#FFFF',
        padding: '0.5%'
    },
    gradient: {
        height: '100%',
        width: '100%'
    }


})

export default LoginScreen