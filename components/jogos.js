import { Text, View, StyleSheet } from "react-native"



const Jogos = (props) => {
    return (
        <View>
            {(props.ApexLegends == true) ? <Text style ={styles.jogos}>Apex Legends</Text> : ''}
            {(props.csGo == true) ? <Text style ={styles.jogos}>Counter Strike: Global Offensive</Text> : ''}
            {(props.dota2 == true) ? <Text style ={styles.jogos}>Dota 2</Text> : ''}
            {(props.fortnite == true) ? <Text style ={styles.jogos}>Fortnite</Text> : ''}
            {(props.freeFire == true) ? <Text style ={styles.jogos}>Free Fire</Text> : ''}
            {(props.LeagueOfLegends == true) ? <Text style ={styles.jogos}>League Of Legends</Text> : ''}
            {(props.valorant == true) ? <Text style ={styles.jogos}>Valorant</Text> : ''}
        </View>

    )
}

const styles = StyleSheet.create({
    jogos: {
        padding: '3%',
        width: '40%',
        height: '6.2%',
        borderRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        marginTop: '2%',
        alignSelf: 'center',
        color: '#ffff',
        borderWidth: 2,
        borderColor: '#ffff',
        margin: 'auto'
    }

})

export default Jogos