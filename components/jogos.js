import { Text, View, StyleSheet } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';


const Jogos = (props) => {
    return (
        <View>
            <View>
            {(props.ApexLegends == true) ? <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}><Text style={{color: '#FFFF'}}>Apex Legends</Text></LinearGradient>: ''}</View>
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
        borderWidth: 1,
        borderColor: '#FFFF',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
        
    }
})

export default Jogos