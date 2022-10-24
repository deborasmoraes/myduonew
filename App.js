import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
export default function App() {
  return (
  <NavigationContainer>
      {/* <AuthProvider> */}
      <StackNavigator/>
      {/* </AuthProvider> */}
      <Toast/>
    </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
