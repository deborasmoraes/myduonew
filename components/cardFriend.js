import { useEffect, useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import Firebase from "../config/firebase/firebaseConfig"

import extractDuo from "../functions/pickduo"

const CardFriend = (props) =>{
    const [duoInfo, setDuoInfo] = useState([])

    useEffect(() => {
        const anotheruser = props.friend_id
        const currentUser  = Firebase.auth().currentUser.uid
      
        let ref =  Firebase.firestore().collection('user').where("user_id", "==", extractDuo(anotheruser,currentUser)).onSnapshot(query => {
            const data = []
            query.forEach(doc => {
                data.push({
                    ...doc.data(),
                    key: doc.id
                })
            })
            setDuoInfo({
                username: data[0].username,
                descricao: data[0].descricao,
                user_id:data[0].user_id
             
            });
        })
        return () => ref()
    }, [])
  

    return(
        <TouchableOpacity>
        <View><Text>{duoInfo.username}</Text>
        
        </View>
        </TouchableOpacity>
    )
}

export default CardFriend