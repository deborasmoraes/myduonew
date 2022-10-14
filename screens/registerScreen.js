import { TextInputMask } from 'react-native-masked-text'
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable'

import { useState } from 'react';
import Firebase from '../config/firebase/firebaseConfig';
export default function SignupScreen({ navigation }) {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [idade, setIdade] = useState('')
    const [msg, setMsg] = useState('')

    const Register = () => {
        Firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                const user = userCredential
                console.log(user);
            })
            .catch((error) => {
                console.log(error.message);
            })

    }



    return (
        <LinearGradient
            colors={['#1C3551', '#242547']}
            end={{ x: 0.1, y: 0.4 }}
            style={{height: 850}}>
            
            <Image

            source={require('../assets/mazul.png')}
            style={{ width: 396, height: 300}} />

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
                />


                <Text
                 style={styles.input1}>Senha</Text>
                <TextInput 
                style={styles.input2}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />
                 <Text style={styles.input1}>Confirme sua senha</Text>
            <TextInput
            style={styles.input2}
                onChangeText={setSenha}
                value={senha}
                secureTextEntry={true}
            />
            <Text style={styles.input1}>Ano de Nascimento</Text>
            <TextInputMask
            style={styles.input2}
                type='datetime'
                options={{ format: 'DD/MM/YYYY' }}
                onChangeText={setIdade}
                value={idade}
                 />
            </Animatable.View>

            <TouchableOpacity
                onPress={Register}
                style={styles.botao1}
            ><Text style={{color: '#FFFF'}}>Registre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>
                            navigation.navigate('Login', { nome: 'Login' })}>
                <Text style={{color: '#FFFF', textAlign: 'center', marginTop: '2%'}}>Acessar conta existente</Text>
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
        borderStyle:'dashed',
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