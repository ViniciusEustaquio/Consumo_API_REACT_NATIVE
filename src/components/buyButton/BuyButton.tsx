import { View, TouchableOpacity, Text } from "react-native";
import { Style } from "./Style";
import AntDesign from "@expo/vector-icons/AntDesign";

export const BuyButton = () => {
  return (
    <View style={Style.container}>
      <TouchableOpacity style={Style.button}>
          <AntDesign style={Style.icon} name="shoppingcart" size={24} color="#fff"/> 
          <Text style={Style.buttonText}>Buy This</Text>
      </TouchableOpacity>
    </View>
  );
};
