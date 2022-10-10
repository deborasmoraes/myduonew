import React from "react";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import HomeScreen from "./screens/HomeScreen"
import DuoScreen from "./screens/DuoScreen"
import CreateProfileScreen from "./screens/CreateProfile";
import PerfilScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
const Tab = createBottomTabNavigator()

export default function ShowBottomTabs(){
    return(
        <Tab.Navigator screenOptions={({route}) =>
         ({headerShow: false, 
        tabBarShowLabel: false, 
        tabBarInactiveBackgroundColor: '#242547', 
        tabBarActiveBackgroundColor: '#242547',
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({color, size, focused}) => {
            let iconName;

            if (route.name === "PerfilTab"){
                iconName = focused ? 'account-settings' : 'account-settings-outline'
            } else if (route.name === "DuoTab"){
                iconName = focused ? 'account-circle' : 'account-circle-outline'
            }
            else if (route.name === "CreateProfile"){
                iconName = focused ? 'filter' : 'filter-outline'
            }else if (route.name === "SettingsTab"){
                iconName = focused ? 'cog' : 'cog-outline'
            }
            else if (route.name === "HomeTab"){
                iconName = focused ? 'chat-processing' : 'chat-processing-outline'
            }
            return <MaterialCommunityIcons name={iconName} size={22} color='#FFFF' />
        }})}>
             <Tab.Screen name= "CreateProfile" component={CreateProfileScreen}/>
            <Tab.Screen name ="PerfilTab" component={PerfilScreen}/>
            <Tab.Screen name= "DuoTab" component={DuoScreen}/>
            <Tab.Screen name="HomeTab" component={HomeScreen}/>
            <Tab.Screen name="SettingsTab" component={SettingsScreen}/>

        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    tabBarStyle:{
        position: 'absolute',
        borderTopWidth: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20


    }
})