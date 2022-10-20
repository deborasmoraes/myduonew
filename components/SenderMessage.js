import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native'


const SenderMessage = (props) =>{
    return(
        <Text style ={styles.text}>{props.message}</Text>
    )
}
const styles = StyleSheet.create({
    text:{color: 'blue'}
});
export default SenderMessage