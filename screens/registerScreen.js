import { TextInputMask } from 'react-native-masked-text'
import {Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useState } from 'react';
import Firebase from '../config/firebase/firebaseConfig';
export default function SignupScreen({ navigation }) {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [idade, setIdade] = useState('')
    const [msg, setMsg] = useState('')

    const Register = () =>{
        Firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then((userCredential) =>{
            const user =userCredential
            console.log(user);
        })
        .catch((error) =>{
            console.log(error.message);
        })
    
    }


  
    return (
        <View>
            <Text>Registre</Text>

            <Text>Nome:</Text>
            <TextInput
                onChangeText={setNome}
                value={nome}
                placeholder='insira seu nome completo' />


            <Text>Email</Text>
            <TextInput
                onChangeText={setEmail}
                value={email}
                placeholder='insira seu email' />

            <Text>Senha</Text>
            <TextInput
                onChangeText={setSenha}
                value={senha}
                secureTextEntry={true}
                placeholder='insira sua senha' />

            <Text>Ano de Nascimento</Text>
            <TextInputMask
                type='datetime'
                options={{ format: 'DD/MM/YYYY' }

                }
                onChangeText={setIdade}
                value={idade}
                placeholder='Insira sua data de nascimento' />

            <TouchableOpacity
                onPress = {Register}
            ><Text>Registre-se</Text></TouchableOpacity>
            <Text>{msg}</Text>

        </View>
    )
}




