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
     <TouchableOpacity
     onPress={ () => user = true}
     ><Text>Clica ai</Text></TouchableOpacity>
    </SafeAreaView>
  )
}

export default LoginScreen