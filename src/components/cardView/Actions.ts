import { fetchCar } from "../../api/GetCar"
import { CarModel } from "./Props"




export const handlePreviousItem = async (carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    
    let response = null;
    
    try{
        if(carData && carData?.id > 1){
            
            response = await fetchCar(carData.id - 1, setCarData)
        }
        
        if(response){
            setCarData(response)
        }

    }catch(error){
        console.log('error', error)
        setCarData(null)
    }
    
}




export const handleNextItem = async (carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    let response = null;
    
    try{
        if(carData && carData?.id < 10){
            
            response = await fetchCar(carData.id + 1, setCarData)
        }
        
        if(response){
            setCarData(response)
        }

    }catch(error){
        console.log('error', error)
        setCarData(null)
    }
    
    
    
    
}




export const loadCarData = async (id: number, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    
    try{
        await fetchCar(id, setCarData)
    }catch(error){
        console.log('Erro', error)
    }
    
    
}