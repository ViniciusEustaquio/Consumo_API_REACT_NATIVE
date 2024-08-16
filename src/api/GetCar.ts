import axios from "axios"
import { CarModel } from "../components/cardView/Props"
import { CAR_API_BASE_URL } from "../constants"


interface ApiResponse {
    cars: CarModel[]
}


export const fetchCar = async (id: number, setCarDataCallback: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    try {
        
        const response = await axios.get<ApiResponse>(CAR_API_BASE_URL)
        const carData = response.data.cars.find((car) => car.id === id) || null;
        setCarDataCallback(carData)
        console.log(response.data)
        
      
        
    } catch(error){
        console.log('Erro ao buscar dados da api', error)
        setCarDataCallback(null)
    }
}