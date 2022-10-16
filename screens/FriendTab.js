import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import FriendScreen from './FriendScreen';
import Invitations from './Invitations';
import ChatScreen from './ChatScreen';
const Tab = createMaterialTopTabNavigator();


const FriendTab = ()  =>{
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {backgroundColor:'#1C3551'}
        }
        }>
            <Tab.Screen name="Duo's" component={FriendScreen} />
            <Tab.Screen name="Solicitações" component={Invitations} />
            <Tab.Screen name='Chat' component={ChatScreen} />

        </Tab.Navigator>

    
    )
}


export default FriendTab
