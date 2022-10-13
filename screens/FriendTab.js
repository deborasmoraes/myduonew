import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import FriendScreen from './FriendScreen';
import Invitations from './Invitations';

const Tab = createMaterialTopTabNavigator();


const FriendTab = ()  =>{
    return (<View>
        <Tab.Navigator
            initialRouteName="Amigos"
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: '#add8e6', alignItems: 'center' },
            }}
        >
            <Tab.Screen name="Amigos" component={FriendScreen} />
          
            <Tab.Screen name="Invitations" component={Invitations} />
            
        </Tab.Navigator>

        
        </View>
    )
}
const styles = StyleSheet.create({
    infos: {
        backgroundColor: '',
    },
});

export default FriendTab
