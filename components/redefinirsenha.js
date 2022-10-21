import { StyleSheet, Text, TextInput, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView, TextInputComponent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable'
import React, { useLayoutEffect, useState, useEffect, useCallback } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'
import Firebase from '../config/firebase/firebaseConfig';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

const redefinir = () => {
   
const [alteraSenha, setAlteraSenha] = useState('')
const [confAlteraSenha, setconfAlteraSenha] = useState('')

const resetpassword = () =>{


}

const redefinirSenha = () => {
    if (alteraSenha == '') {
        setMsg("Insira uma nova senha."), false
         return
    }
     else if (alteraSenha.length < 6 || alteraSenha.length > 10)  {
        setMsg("A senha deve ser maior que 6 caracteres e menor que 10 caracteres"), false
        return
   
}

}

return(
    <View>
        <TextInput placeholder='Insira sua nova senha'
        value={alteraSenha}
        onChangeText={setAlteraSenha}
        
        />

        <TextInput placeholder='Confirme a senha'
        value={confAlteraSenha}
        onChangeText={setconfAlteraSenha}
        
        />
        {(redefinirSenha)? <Text>{msg}</Text>:''}


    <TouchableOpacity
    onPress={resetpassword}
    > <Text>Aterar Senha</Text>
    
    </TouchableOpacity>
        
   
    </View>

    

    
)

}
                

export default redefinir
                