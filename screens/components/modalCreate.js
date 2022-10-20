import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'

const ModalCreate = () => {
    const [modal, setModal] = useState(true)
    return (
        <View style={styles.container}>
            <Modal visible = {modal}
            animationType ={'fade'}
            style={{ backgroundColor: '#0000'}}
            >
            <Text style={styles.nome}>Olá! Seja bem-vindo(a) ao <Text style={styles.nome2}> MyDuo!</Text></Text>

            <Text style={styles.nome}>Crie seu perfil, escolha os seus jogos preferidos e encontre seu Duo agora mesmo!</Text>
            <TouchableOpacity onPress = {() =>{setModal(false)}}><Text style={styles.nome2}>Vamos nessa!</Text></TouchableOpacity>

            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#0000'
  
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#F5F5F5',
        padding: '0.5%',
        marginLeft: '2%',
        textAlign: 'center'
      },
      nome2: {
        fontWeight: 'bold',
        fontSize: 35,
        color: '#F5F5F5',
        padding: '0.5%',
        marginLeft: '2%',
        textAlign: 'center'
      }
})
export default ModalCreate
