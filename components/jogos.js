import { Text, View, StyleSheet } from "react-native"



const Jogos = (props) => {
    return (
        <View>
            {(props.ApexLegends == true) ? <Text style={{color: '#FFFF'}}>Apex Legends</Text> : ''}
            {(props.csGo == true) ? <Text style={{color: '#FFFF'}}>Counter Strike: Global Offensive</Text> : ''}
            {(props.dota2 == true) ? <Text style={{color: '#FFFF'}}>Dota 2</Text> : ''}
            {(props.fortnite == true) ? <Text style={{color: '#FFFF'}}>Fortnite</Text> : ''}
            {(props.freeFire == true) ? <Text style={{color: '#FFFF'}}>Free Fire</Text> : ''}
            {(props.LeagueOfLegends == true) ? <Text style={{color: '#FFFF'}}>League Of Legends</Text> : ''}
            {(props.valorant == true) ? <Text style={{color: '#FFFF'}}>Valorant</Text> : ''}
        </View>

    )
}

const styles = StyleSheet.create({
    jogos: {
        padding: '3%',
        width: '20%',
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