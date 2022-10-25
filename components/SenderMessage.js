import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native'


const SenderMessage = (props) =>{
    return(
        <View style={styles.container}>
        <Text style ={{color: '#FFFF'}}>{props.message}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#042690',
        borderRadius: 20,
        margin: 10,
        alignSelf: 'flex-end',
        padding: 15,
        flexDirection: 'column',
        right: 5,
        justifyContent: 'flex-end'
    }
});
export default SenderMessage