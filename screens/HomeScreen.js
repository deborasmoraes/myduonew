import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Duo')}></TouchableOpacity>
    </View>
    </SafeAreaView>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});