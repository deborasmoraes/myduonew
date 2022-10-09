import React from "react";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeScreen from "./screens/HomeScreen"
import DuoScreen from "./screens/DuoScreen"
import CreateProfileScreen from "./screens/CreateProfile";
import PerfilScreen from "./screens/ProfileScreen";
const Tab = createBottomTabNavigator()

export default function ShowBottomTabs(){
    return(
        <Tab.Navigator>
             <Tab.Screen name="CreateProfile" component={CreateProfileScreen}/>
            <Tab.Screen name = "perfil" component={PerfilScreen}/>
            <Tab.Screen name="HomeTab" component={HomeScreen}/>
            <Tab.Screen name="DuoTab" component={DuoScreen}/>
        </Tab.Navigator>
    )
}