import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import DuoScreen from './screens/DuoScreen'
import LoginScreen from './screens/LoginScreen'
import PerfilScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'
import SignupScreen from './screens/registerScreen'
import CreateProfileScreen from './screens/CreateProfile'

import ShowBottomTabs from './Bottomtab'

import useAuth from './hooks/useAuth'


const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    const user = useAuth()

    return (
        <Stack.Navigator>
            
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name = 'Registrar' component = {SignupScreen}/>
            <Stack.Screen  name ='CreateProfile' component  = {CreateProfileScreen}/>
            <Stack.Screen name='Perfil' component={PerfilScreen} />
            <Stack.Screen name='Home' component={ShowBottomTabs} />
            <Stack.Screen name='Duo' component={DuoScreen} />
            <Stack.Screen name='Settings' component={SettingsScreen} />

        </Stack.Navigator>
    )
}

export default StackNavigator