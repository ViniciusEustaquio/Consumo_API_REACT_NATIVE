import React from "react";
import { View, Text, Button, Image } from "react-native";
import { Style } from "./Style";
import Logo from "../../../assets/logo.png";
import Divider from "../Divider/Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants";
import { BuyButton } from "../buyButton/BuyButton";
import { useState, useEffect } from "react";
import { CarModel } from "./Props";
import { handleNextItem, handlePreviousItem, loadCarData } from "./Actions";

export default function CardView() {
  
  const [carData, setCarData] = useState<CarModel | null>(null);
  
  
  useEffect(() => {
    (async () => {
      await loadCarData(3, setCarData)
    })()
  }, [])
  
  
  
  const renderLogoBox = () => (
    <View style={Style.logoContanier}>
      <Image style={Style.imageLogo} source={Logo} />
    </View>
  );
  
  const CarDetails = () => (
    
    <View style={{alignItems: 'center'}}>
      <Text style={Style.carBrand}>Lamborghini</Text>
      <Text style={Style.carName}>{carData?.carName}</Text>
    </View>
    
  )
  
  const ImageCar = () => (
    
    <Image style={Style.imageCar} 
    source={{uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`}} />
    
    
  )
  
  const priceControls = () => (
    <View style={Style.priceLabelContainer}>
      <Button title="<" color={"#01A6B3"} onPress={()=> {handlePreviousItem(carData, setCarData)}}/>
      <Text style={Style.priceLabel}>{carData?.price}</Text>
      <Button title=">" color={"#01A6B3"} onPress={()=> {handleNextItem(carData, setCarData)}}/>
    </View>
  )
  
  return <View style={Style.imageContanier}>
    {renderLogoBox()}
    <Divider/>
    {CarDetails()}
    {ImageCar()}
    <Divider/>
    <BuyButton/>
    {priceControls()}
    </View>;
}
