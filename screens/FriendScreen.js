import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';

const FriendScreen = () =>{
    return(
      <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#00182F', padding: '7%' }}>
        <Text style={ styles.text}>Ainda não fez nenhum amigo :c</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    text:{
     color: '#f5f5f5'
    }
  });
  export default FriendScreen
  