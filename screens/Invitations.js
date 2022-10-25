import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import Firebase from '../config/firebase/firebaseConfig';

const Invitations = () =>{
    const [friends, setFriends] = useState()
    useEffect(() => {
        const user  = Firebase.auth().currentUser.uid
        let ref = Firebase.firestore().collection('user').doc(user).collection('added').onSnapshot(query =>{
            const data   = []
            query.forEach(doc =>{
                data.push({
                    ...doc.data(),
                    key: doc.id
                })
            })
       
        })
        return () => ref()
    }, [])
  
  
    return(

        <View style={styles.container}>
        <Text style={styles.nome}>Sem solicitações de amizade.</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#00182F',
      justifyContent: 'center',
      alignItems: 'center'
  
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#F5F5F5',
        padding: '0.5%',
        marginLeft: '2%',
        textAlign: 'center'
      },
})
export  default Invitations