import { View, Text, SafeAreaView } from 'react-native'
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
    </SafeAreaView>
  )
}

export default LoginScreen