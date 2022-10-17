import { Text, View, StyleSheet } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';


const Jogos = (props) => {
    return (
        <View>
            <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
            {(props.ApexLegends == true) ? <Text style={{color: '#FFFF'}}>Apex Legends</Text> : ''}</LinearGradient>
            <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
            {(props.csGo == true) ? <Text style={{color: '#FFFF'}}>Counter Strike</Text> : ''}</LinearGradient>
            <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
            {(props.dota2 == true) ? <Text style={{color: '#FFFF'}}>Dota 2</Text> : ''}</LinearGradient>
            <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
            {(props.fortnite == true) ? <Text style={{color: '#FFFF'}}>Fortnite</Text> : ''}</LinearGradient>
            <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
            {(props.freeFire == true) ? <Text style={{color: '#FFFF'}}>Free Fire</Text> : ''}</LinearGradient>
            <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
            {(props.LeagueOfLegends == true) ? <Text style={{color: '#FFFF'}}>League Of Legends</Text> : ''}</LinearGradient>
            <LinearGradient colors={['#242547', '#042960']} style={styles.jogos}>
            {(props.valorant == true) ? <Text style={{color: '#FFFF'}}>Valorant</Text> : ''}</LinearGradient>
        </View>

    )
}

const styles = StyleSheet.create({
    jogos: {
        padding: '1%',
        width: 135,
        height: 40,
        borderRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        marginTop: '2%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#FFFF',
        justifyContent: 'center'
    }
})

export default Jogos