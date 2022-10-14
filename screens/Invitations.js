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
          console.log(data);
        })
        return () => ref()
    }, [])
  
  
    return(

        <View>
        <Text>Sem solicitações de amizade.</Text>
        </View>
    )
}

export  default Invitations