import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';


const Jogos = (props) => {
    return (
        <View>
            <View>
            {(props.ApexLegends == true) ? <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}><TouchableOpacity style={{color: '#FFFF'}}>Apex Legends</TouchableOpacity></LinearGradient>: ''}</View>
            <View>
            {(props.csGo == true) ? <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}><Text style={{color: '#FFFF'}}>Counter Strike</Text></LinearGradient>: ''}</View>
            <View>
            {(props.dota2 == true) ? <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}><Text style={{color: '#FFFF'}}>Dota 2</Text></LinearGradient>: ''}</View>
            <View>
            {(props.fortnite == true) ? <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}><Text style={{color: '#FFFF'}}>Fortnite</Text></LinearGradient> : ''}</View>
            <View>
            {(props.freeFire == true) ? <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}><Text style={{color: '#FFFF'}}>Free Fire</Text></LinearGradient>: ''}</View>
            <View>
            {(props.LeagueOfLegends == true) ? <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}><Text style={{color: '#FFFF'}}>League Of Legends</Text></LinearGradient> : ''}</View>
            <View>
            <View>
            {(props.Overwatch == true) ? <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}><TouchableOpacity style={{color: '#FFFF'}}>Overwatch 2</TouchableOpacity></LinearGradient>: ''}</View>
            {(props.valorant == true) ? <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}><Text style={{color: '#FFFF'}}>Valorant</Text></LinearGradient>: ''}</View>
        </View>

    )
}

const styles = StyleSheet.create({
    jogos: {
        padding: 5,
        borderRadius: 20,
        borderBottomRightRadius: 20,
        width: 320,
        height:45,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '2%'
        
    }
})

export default Jogos