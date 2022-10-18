import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LinearGradient } from 'expo-linear-gradient';

import FriendScreen from './FriendScreen';
import Invitations from './Invitations';
import ChatScreen from './ChatScreen';
const Tab = createMaterialTopTabNavigator();



const FriendTab = ()  =>{
    return (
      
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: {color: "#F5F5F5", textTransform: "capitalize"},
            tabBarStyle: {backgroundColor:'#1C3551'},
            tabBarIndicatorStyle:{backgroundColor:'#f5f5f5'}
        }
        }>
            <Tab.Screen name="Duo's" component={FriendScreen} />
            <Tab.Screen name="Solicitações" component={Invitations} />
            

        </Tab.Navigator>
     

    
    )
}


export default FriendTab
