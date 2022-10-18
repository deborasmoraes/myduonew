import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, FlatList } from 'react-native';
import CardFriend from '../components/cardFriend';
import Firebase from '../config/firebase/firebaseConfig';

const FriendScreen = () =>{
const [friends, setFriends] = useState([])
const user =  Firebase.auth().currentUser.uid

  useEffect(() =>{
     Firebase.firestore().collection('friends').where('FriendsRelation', 'array-contains', user).onSnapshot((query) =>{
      const data = []
     const  data1 = []
        query.forEach(doc =>{
          data.push({
            ...doc.data(),
             key:doc.id,
             doc_id: doc.id
             
          })
          data1.push({
            ...doc.id
             
          })
          const doc_id = doc.id
          console.log(doc_id)
        })
       
        console.log(data1);
        setFriends(data)
    }
    )
   
  },[user])

  
    return(
       <View style={{flex: 1, backgroundColor: '#00182F', padding: '5%' }}>
        
        <Text>Inicio FlatList</Text>
        <FlatList
        data={friends}
        renderItem ={({item})  =>{
        return(
          <CardFriend  friend_id = {item.FriendsRelation}/>
          )  
         
        }}
        keyExtractor = {item =>{item.id}}
        
        />
        <TouchableOpacity style={{width: 40, height: 40}} onPress={() =>{console.log(friends[0].friend_id);}}><Text style={{color: '#FFFF'}}>oi</Text></TouchableOpacity>
       </View>
       
    )
}

const styles = StyleSheet.create({

    text:{
     color: '#f5f5f5'
    }
  });
  export default FriendScreen
  