import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Firebase from "../config/firebase/firebaseConfig"
import { LinearGradient } from 'expo-linear-gradient';

import extractDuo from "../functions/pickduo"

const CardFriend = (props) =>{
    const [duoInfo, setDuoInfo] = useState([])
    const navigation  = useNavigation()
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
            console.log(data);
            setDuoInfo({
                doc_id: data[0].u ,
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
        <LinearGradient colors={['#242547', '#042960']}
              style={styles.usuario} >
        <View><Text style={styles.nome}>{duoInfo.username}</Text>
        <TouchableOpacity
        onPress={() =>{navigation.navigate('Chat', {name:'Chat', duo: duoInfo})}}
            >
        </TouchableOpacity>
        </View>
        </LinearGradient>
    )
}

export default CardFriend
const styles = StyleSheet.create({
    usuario: {
        justifyContent: 'center',
        borderRadius: 20,
        borderBottomRightRadius: 40,
        padding: '3%',
        marginTop: '3%',
        height: 80,
        width: 350,
        alignSelf: 'center',
        marginTop: '2%'
      },
      nome:{
        color: "#F5F5F5",
        marginLeft: 25
      }
})