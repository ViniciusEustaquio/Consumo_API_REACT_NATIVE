import { StyleSheet } from "react-native";



export const Style = StyleSheet.create({
    container: {
        backgroundColor: "#01A6B3",
        padding: 10,
        width: "80%",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },
    
    button: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    
    buttonText:{
    color: "#fff",
    fontWeight: 'bold',
    fontStyle: 'italic'
    },
    
    icon: {
       marginRight: 10, 
    }
})