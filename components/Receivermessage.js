import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native'


const ReceiverMessage = (props) =>{
    return(
        <Text style ={styles.text}>{props.message}</Text>
    )
}
const styles = StyleSheet.create({
    text:{color: 'red'}
});
export default ReceiverMessage