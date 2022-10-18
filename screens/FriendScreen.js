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
             key:doc.id
             
          })
          data1.push({
            ...doc.id
             
          })
         
        })
        console.log(data1);
        setFriends(data)
    })
   
  },[user])

  
    return(
      <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#00182F', padding: '7%' }}>
       <View>
        <TouchableOpacity onPress={() =>{console.log(friends[0].friend_id);}}><Text>oi</Text></TouchableOpacity>
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
        
       </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    text:{
     color: '#f5f5f5'
    }
  });
  export default FriendScreen
  