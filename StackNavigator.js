import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import HomeScreen from './screens/HomeScreen'
import DuoScreen from './screens/DuoScreen'
import LoginScreen from './screens/LoginScreen'
import PerfilScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'
import SignupScreen from './screens/registerScreen'
import CreateProfileScreen from './screens/CreateProfile'
import ChatScreen from './screens/ChatScreen'
import ShowBottomTabs from './Bottomtab'

import useAuth from './hooks/useAuth'
import AnotherUserScreen from './screens/ProfileAnotherUser'



const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    const user = false

    return (
        <Stack.Navigator screenOptions={{
            headerShown: 'false'
        }
        }>
            
            <Stack.Screen name='Login' component={LoginScreen} />
            
            <Stack.Screen name = 'Registrar' component = {SignupScreen} options={{headerShown: false}}/>
            <Stack.Screen  name ='CreateProfile' component  = {CreateProfileScreen}/>
            <Stack.Screen name='Perfil' component={PerfilScreen} />
            <Stack.Screen name='Home' component={ShowBottomTabs} options={{headerShown: false}}/>
            <Stack.Screen name='Duo' component={DuoScreen} />
            <Stack.Screen name='Chat' component={ChatScreen} />
            <Stack.Screen name='Settings' component={SettingsScreen}/>
            <Stack.Group screenOptions={{presentation:'card'}}>
            <Stack.Screen name= 'AnotherUser' component ={AnotherUserScreen}/>
            </Stack.Group>
            
            
        </Stack.Navigator>
         
        
    )
}

export default StackNavigator