import React from "react";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, ImageBackground, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";

import HomeScreen from "./screens/HomeScreen"
import DuoScreen from "./screens/DuoScreen"
import CreateProfileScreen from "./screens/CreateProfile";
import PerfilScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { LinearGradient } from "expo-linear-gradient";
import FriendTab from "./screens/FriendTab";
import EncontrarScreen from "./screens/EncontrarScreen";
const Tab = createBottomTabNavigator()

export default function ShowBottomTabs(){
    return(
        <Tab.Navigator screenOptions={({route}) =>
         ({headerShown: false,
        tabBarShowLabel: false, 
        tabBarInactiveBackgroundColor: '#242547', 
        tabBarActiveBackgroundColor: '#242547',
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({color, size, focused}) => {
            let iconName;

            if (route.name === "PerfilTab"){
                iconName = focused ? 'account-settings' : 'account-settings-outline'
            } else if (route.name === "DuoTab"){
                iconName = focused ? 'filter' : 'filter-outline'
            }
            else if (route.name === "DuoTab"){
                iconName = focused ? 'filter' : 'filter-outline'
            }else if (route.name === "SettingsTab"){
                iconName = focused ? 'cog' : 'cog-outline'
            }
            else if (route.name === "FriendTab"){
                iconName = focused ? 'chat-processing' : 'chat-processing-outline'
            }
            return <MaterialCommunityIcons name={iconName} size={22} color='#FFFF' />
        }})}>
   
            <Tab.Screen name ="PerfilTab" component={PerfilScreen}/>
            <Tab.Screen name= "DuoTab" component={DuoScreen}/>
            <Tab.Screen name= "Encontrar" component={EncontrarScreen}
            options={() => ({
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <LinearGradient style={styles.iconTabRound} colors={['#1C3551', '#242547']}> 
                          
                            <Image source={require('./assets/myduo.png')} style={{width: 29, height: 27}}></Image>
                            
                        </LinearGradient>
                    </View>
                )
            })}/>
            <Tab.Screen name="FriendTab" component={FriendTab} options={{headerShown: true, title: 'Discover' , headerStyle: { backgroundColor: '#242547', height: 85} , headerTitleAlign: 'center', headerTitleStyle: {color: '#F5F5F5'}}} />
            <Tab.Screen name="SettingsTab" component={SettingsScreen}/>

        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    tabBarStyle:{
        position: 'absolute',
        borderTopWidth: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 65

    },
    iconTabRound:{
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        shadowColor: '#9C27B0',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 5
  }
})