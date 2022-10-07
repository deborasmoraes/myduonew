import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'


const LoginScreen = () => {
  const { user } = useAuth()
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Text>LoginScreen</Text>
      <TouchableOpacity onPress={() => {navigation.navigate('Perfil')}}><Text>Entrar</Text></TouchableOpacity>
    </SafeAreaView>
  )
}

export default LoginScreen