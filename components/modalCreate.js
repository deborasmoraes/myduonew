import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'

const ModalCreate = () => {
    const [modal, setModal] = useState(true)
    return (
        <View>
            <Modal visible = {modal}
            animationType ={'fade'}
            >
            <Text>Olá! Seja Bem vindo(a) ao <Text>MYDUO!</Text></Text>

            <Text>Essa é a tela de login, crie seu perfil, escolha os seus jogos preferidos e encontre seu duo agora mesmo!</Text>
            <TouchableOpacity onPress = {() =>{setModal(false)}}><Text>Vamos nessa!</Text></TouchableOpacity>

            </Modal>
        </View>
    )
}

export default ModalCreate
