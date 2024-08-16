import { StyleSheet } from "react-native"



export const Style = StyleSheet.create({
    imageContanier: {
        flex: 1,
        width: "100%",
        height: "100%",
        overflow: 'hidden',
        borderRadius: 8
        
    },
    
    logoContanier: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    },
    
    imageLogo: {
        flex: 1,
        width: "65%",
        resizeMode: 'contain'
    },
    
    carBrand: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 18,
        fontStyle: 'italic'     
    },
    carName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    
    imageCar: {
        flex: 1,
        marginBottom: 10,
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    
    priceLabelContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingBottom: 10,
        alignItems: 'center', 
        marginTop: 10
    },
    
    priceLabel: {
        color: '#fff',
        fontSize: 22
    }
    
    
    
    
}) 