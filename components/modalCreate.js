import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'

const ModalCreate = () => {
    const [modal, setModal] = useState(true)
    return (
        <View>
            <Modal visible = {modal}
            animationType ={'fade'}
            >
            <Text>Olá! Seja bem-vindo(a) ao <Text> MyDuo!</Text></Text>

            <Text>Crie seu perfil, escolha os seus jogos preferidos e encontre seu Duo agora mesmo!</Text>
            <TouchableOpacity onPress = {() =>{setModal(false)}}><Text>Vamos nessa!</Text></TouchableOpacity>

            </Modal>
        </View>
    )
}

export default ModalCreate
