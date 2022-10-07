import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';

import Icon from '@expo/vector-icons';
import { render } from 'react-dom';

const PerfilScreen = () => {
    const [trueFalse, setTrueFalse] = useState(true)
    const [descricao, setDescricao] = useState("lorem ipsum")
    const navigation = useNavigation()
  
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    return (
        <ScrollView
         style={styles.geral}>
            <View>
                <View>
                    <Text style={styles.nome}>Perfil</Text>

                    {(trueFalse === true) ? <TouchableOpacity
                        onPress={() => { setTrueFalse(false) }}
                    ></TouchableOpacity> : <TouchableOpacity
                        onPress={() => { setTrueFalse(true) }}
                    ><Text>Salvar</Text></TouchableOpacity>}
                </View>

                <View>
                    <LinearGradient
                        colors={['#838993', '#042960']}>

                        <Image source={{
                            uri: 'https://pngimg.com/uploads/ninja/ninja_PNG26.png'
                        }}
                        />
                
                        <TouchableOpacity><Text>Foto</Text></TouchableOpacity>

                        <Text>Username</Text>

                        {(trueFalse === true) ? <Text>{descricao}</Text> : <TextInput
                            onChangeText={setDescricao}
                            defaultValue={descricao}></TextInput>}
                    </LinearGradient>
                </View>
                <Text style={styles.nome}>Sobre mim</Text>
                <View>
                    <LinearGradient
                        colors={['#838993', '#042960']}>
                        <TextInput />
                    </LinearGradient>
                </View>
                <Text style={styles.nome}>Plataformas</Text>
                <View>
                    <LinearGradient colors={['#838993', '#042960']}>
                        <Text>PC</Text>
                    </LinearGradient>
                </View>
                <Text style={styles.nome}>Jogos favoritos</Text>

                <View>
                    <LinearGradient colors={['#838993', '#042960']}>
                        {(trueFalse === true) ? <Text>flatlist aqui</Text> : <TouchableOpacity
                            onPress={() => { navigation.navigate("Jogos") }}><Text>Editar Jogos</Text>
                        </TouchableOpacity>}
                    </LinearGradient>
                </View>
                <Text style={styles.nome}>Disponibilidade</Text>

                <View>
                    <Text style={styles.nome}>Inicio</Text>
                    <Text>HoraInicio</Text>

                    <Text style={styles.nome}>Fim</Text>
                    <Text>HoraFim</Text>
                </View>
                {(trueFalse === true) ? <TouchableOpacity
                    onPress={() => { setTrueFalse(false) }}
                ><Text>Editar</Text></TouchableOpacity> : <TouchableOpacity
                    onPress={() => { setTrueFalse(true) }}
                ><Text>Salvar</Text></TouchableOpacity>}


            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '20%',
    },
    geral: {
        backgroundColor: '#00182F',
        padding: '7%',
        flex: 1
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFFF',
        marginTop: '5%'
    },
})
export default PerfilScreen