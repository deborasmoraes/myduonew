import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native'


const ReceiverMessage = (props) =>{
    return(
        <View style={styles.container}>
        <Text style ={{color: '#FFFF'}}>{props.message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#242547',
        borderRadius: 20,
        margin: 10,
        alignSelf: 'flex-start',
        padding: 18,
        marginLeft: 15
    }
});
export default ReceiverMessage