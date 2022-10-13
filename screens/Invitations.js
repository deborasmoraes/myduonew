import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect } from 'react';
const Invitations = () =>{
    useEffect(() => {
        const user  = Firebase.auth().currentUser.uid
        let ref = Firebase.firestore().collection('user').where("user_id", "==", user).onSnapshot(query =>{
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

        <View>
        <Text>Sem solicitações de amizade.</Text>
        </View>
    )
}

export  default Invitations