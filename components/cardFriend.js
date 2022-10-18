import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import Firebase from "../config/firebase/firebaseConfig"
import DuoInfo from "../functions/DuoInfo"

const CardFriend = (props) =>{
    const [duoInfo, setDuoInfo] = useState([])
    const navigation  = useNavigation()
    useEffect(() => {
        const anotheruser = props.friend_id
      
        let ref =  Firebase.firestore().collection('user').where("user_id", "==", anotheruser).onSnapshot(query => {
            const data = []
            query.forEach(doc => {
                data.push({
                    ...doc.data(),
                    key: doc.id
                })
            })
            setDuoInfo({
                user_id:data[0].user_id,
                username: data[0].username,
                descricao: data[0].descricao,
                apexLegends: data[0].apexLegends,
                csGo: data[0].csGo,
                dota2: data[0].dota2,
                fortnite: data[0].fortnite,
                freeFire: data[0].freeFire,
                LeagueOfLegends: data[0].LeagueOfLegends,
                Valorant: data[0].Valorant,
                horaFim: data[0].horaFim,
                horaInicio: data[0].horaInicio
             
            });
        })
        return () => ref()
    }, [])
  

    return(
        <TouchableOpacity
        onPress={() =>{navigation.navigate('Chat', {name:'Chat', duo: duoInfo})}}
            >
        <View><Text>{duoInfo.username}</Text>
        
        </View>
        </TouchableOpacity>
    )
}

export default CardFriend