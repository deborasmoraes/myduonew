import { TextInputMask } from 'react-native-masked-text'
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable'

import { useState, useRef } from 'react';
import Firebase from '../config/firebase/firebaseConfig';
export default function SignupScreen({ navigation }) {
    const passwordOne = useRef()
    const passwordTwo = useRef()
    const idadeRef = useRef()


    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirm, setConfirm] = useState('')
    const [idade, setIdade] = useState('')
    const [msg, setMsg] = useState('')

    const Register = () => {
        Firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                navigation.navigate('Login')
            })
        

    }

    const validate = () => {
        let emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
        if (email == '') {
            setMsg("Insira um email."), false
            return
        } else if (emailRegex.test(email) == false) {
            setMsg('Insira um email válido')
            return
        }
        else if (senha == '') {
            setMsg("Insira uma senha."), false
            return
        }
        else if (senha.length < 6 || senha.length > 10) {
            setMsg("A senha deve ser maior que 6 caracteres e menor que 10 caracteres"), false
            return
        } else if (confirm == '') {
            setMsg("Digite novamente"), false
            return
        } else if (confirm != senha) {
            setMsg("Verifique novamente"), false
            return
        } else {
            Register()
        }

    }


    return (
        <LinearGradient
            colors={['#1C3551', '#242547']}
            end={{ x: 0.1, y: 0.4 }}
            style={{ height: 850 }}>

            <Image

                source={require('../assets/mazul.png')}
                style={{ width: 396, height: 300 }} />

            <Text style={styles.nome}>Sign In</Text>

            <Animatable.View
                animation="fadeInUp"
                delay={800}
                style={styles.container}>
                <Text style={styles.input0}>Email</Text>
                <TextInput
                    style={styles.input2}
                    value={email}
                    onChangeText={setEmail}
                    returnKeyType='next'
                    onSubmitEditing={() => passwordOne.current.focus()}
                    autoCapitalize="none" />
                {(msg.search('email') > -1) ? <Text>{msg}</Text> : ''}

                <Text
                    style={styles.input1}>Senha</Text>
                <TextInput
                    ref={passwordOne}
                    style={styles.input2}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                    returnKeyType='next'
                    onSubmitEditing={() => passwordTwo.current.focus()}
                    autoCapitalize="none"
                />
                {(msg.search('senha') > -1) ? <Text>{msg}</Text> : ''}

                <Text style={styles.input1}>Confirme sua senha</Text>
                <TextInput
                    ref={passwordTwo}
                    style={styles.input2}
                    onChangeText={setConfirm}
                    value={confirm}
                    secureTextEntry={true}
                    returnKeyType='next'
                />
                {(msg.search('Verifique') > -1) ? <Text>{msg}</Text> : ''}
                {(msg.search('Digite') > -1) ? <Text>{msg}</Text> : ''}

                <Text style={styles.input1}>Ano de Nascimento</Text>

                <TextInputMask
                    ref={idadeRef}
                    style={styles.input2}
                    type='datetime'
                    options={{ format: 'DD/MM/YYYY' }}
                    onChangeText={setIdade}
                    value={idade}
                    returnKeyType='done'
                />




            </Animatable.View>

            <TouchableOpacity
                onPress={validate}
                style={styles.botao1}
            ><Text style={{ color: '#FFFF' }}>Registre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>
                navigation.navigate('Login', { nome: 'Login' })}>
                <Text style={{ color: '#FFFF', textAlign: 'center', marginTop: '2%' }}>Acessar conta existente</Text>
            </TouchableOpacity>


        </LinearGradient>
    )
}
;

const styles = StyleSheet.create({
    nome: {
        fontWeight: 'bold',
        fontSize: 35,
        color: '#FFFF',
        padding: '0.5%',
        marginLeft: '2%',
        alignSelf: 'center'
    },
    input0: {
        width: '75%',
        marginTop: '10%',
        color: '#FFFF',
        alignSelf: 'center',


    },
    input1: {
        width: '75%',
        marginTop: '4%',
        color: '#FFFF',
        alignSelf: 'center'

    },
    input2: {
        borderBottomWidth: 1,
        width: '75%',
        alignSelf: 'center',
        borderColor: 'grey',
        borderStyle: 'dashed',
    },
    botao1: {
        backgroundColor: '#00182F',
        borderRadius: 20,
        width: '65%',
        height: '5%',
        alignItems: 'center',
        alignSelf: 'center',
        padding: '0.5%',
        justifyContent: 'center',
        marginTop: '10%'
    },
})