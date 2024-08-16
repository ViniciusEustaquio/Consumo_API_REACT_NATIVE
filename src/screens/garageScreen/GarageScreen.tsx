import { View, Text } from "react-native";
import { style } from "./style";
import CardView from "../../components/cardView/CardView";





export default function GarageScreen() {
    return (
        <View style={style.contanier}>
            <View style={style.cameraBox}>
                
                
                <View style={style.triangleCorner}></View>
                <View style={[style.triangleCorner, style.topRight]}></View>
                <View style={[style.triangleCorner, style.BottomRight]}></View>
                <View style={[style.triangleCorner, style.BottomLeft]}></View>
            <CardView />
            </View>
        </View>
        
    )
}