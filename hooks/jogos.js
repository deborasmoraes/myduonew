import { Text } from "react-native"
import { View } from "react-native-animatable"

const Jogos  = (props) =>{
return(<View>

{(props.valorant == true)?<Text>Valorant</Text>:''}
    
    {(props.ApexLegends == true)?<Text>Apex Legends</Text>:''}
    {(props.csGo == true)?<Text>Counter Strike: Global Offensive</Text>:''}
    {(props.dota2 == true)?<Text>Dota 2</Text>:''}
    {(props.fortnite == true)?<Text>Fortnite</Text>:''}
    {(props.freeFire == true)?<Text>Free Fire</Text>:''}
    {(props.LeagueOfLegends == true)?<Text>League Of Legends</Text>:''}
    {(props.valorant == true)?<Text>Valorant</Text>:''}

   

</View>
    
)
}

export  default Jogos