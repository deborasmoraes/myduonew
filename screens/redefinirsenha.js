import { StyleSheet, Text, TextInput, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import React, { useState, useLayoutEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Firebase from '../config/firebase/firebaseConfig';
import { useNavigation } from '@react-navigation/native';

const Redefinirscreen = () =>{
const navigation = useNavigation()
const [confirmPassword, setconfirmPassword] = useState('')
const [password, setPassword] = useState('')
useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    });
}, []);

const showToast = (text) =>{
    ToastAndroid.show(text, ToastAndroid.LONG, ToastAndroid.CENTER)
}

const redefinir = () => {
    Firebase.auth().currentUser.updatePassword(password).then(() =>{
        showToast('Senha alterada com sucesso!')
        navigation.goBack()})
      
}





const validate = () => {
    if (password == '') {
        showToast("Insira uma nova senha."), false
         return
    }
      if (password.length < 6 || password.length > 10)  {
        showToast("A senha deve ser maior que 6 caracteres e menor que 10 caracteres"), false
        return
      }
    if(password != confirmPassword){
        showToast("as senhas devem ser iguais!")
        return
    }
    if (confirmPassword == ''){
        showToast("Confirme sua senha!")
        return
    }
    redefinir()
}




return(
    <LinearGradient
       
    colors={['#1C3551', '#242547']}
    end={{ x: 0.1, y: 0.4 }}>
    <Image 
    source={require('../assets/mazul.png')}
    style={{ width: 396, height: 275 }} />
<Text style = {styles.login}>Redefinir Senha</Text>

        <Text style={styles.input1}>Nova senha</Text>
        <TextInput
            style={styles.input2}
            value={password}
            onChangeText={setPassword}
            secureTextEntry ={true}
        />


        <Text
         style={styles.input1}>Confirmar Senha</Text>
        <TextInput 
        style={styles.input2}
            value={confirmPassword}
            onChangeText={setconfirmPassword}
            secureTextEntry={true}
            autoCapitalize="none"
        />
        
  

        <TouchableOpacity
            style={styles.botao1}
            onPress={validate}
        >

            <Text 
            style={{ color: '#FFFF', 
            textAlign: 'center',  }}>
                Alterar senha</Text>
        </TouchableOpacity>
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
        color: '#FFFF',
        marginTop: '10%'
    },
    input1: {
        width: '75%',
        marginTop: '10%',
        color: '#FFFF'

    },
    input2: {
        borderBottomWidth: 1,
        width: '75%',
        alignSelf: 'center',
        borderColor: 'grey',
        borderStyle:'dashed',
        marginTop: 2
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
        marginTop: '6%'
    },
    botao3: {
        backgroundColor: '#00182F',
        borderRadius: 20,
        width: '40%',
        height: '15.8%',
        padding: '0.5%',
        marginTop: '6%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container2: {
        textAlign: 'center',
        marginTop: 48,
        color: '#FFFF',
        padding: '4%',
    },
    gradient: {
        height: '100%',
        width: '100%'
    }


})

export default Redefinirscreen

                


                