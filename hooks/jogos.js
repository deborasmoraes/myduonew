import { Text } from "react-native"
import { View } from "react-native-animatable"

const Jogos  = (props) =>{
return(<View>

{(props.valorant == true)?<Text>Valorant</Text>:''}
    {(props.LeagueOfLegends == true)?<Text>League Of Legends</Text>:''}
    {(props.ApexLegends == true)?<Text>Apex Legends</Text>:''}
   

</View>
    
)
}

export  default Jogos