import { Text } from "react-native"
import { View } from "react-native-animatable"

const Jogos  = (props) =>{
return(<View>

{(props.Valorant == true)?<Text>Valorant</Text>:''}
    {(props.LeagueOfLegends == true)?<Text>League Of Legends</Text>:''}
   

</View>
    
)
}

export  default Jogos