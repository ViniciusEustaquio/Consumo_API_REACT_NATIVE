import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    contanier: {
        flex: 1,
        width: "100%",
        backgroundColor: "#1E1E20",
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    cameraBox: {
        borderWidth: 2,
        width: 350,
        height: "90%",
        borderColor: "#fff",
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 10
    },
    
    triangleCorner: {
        position: 'absolute',
        width:0,
        height: 0,
        borderStyle: 'solid',
        borderTopWidth: 20,
        borderTopColor: "#fff",
        borderRightWidth: 20,
        borderRightColor: "transparent",
    },   
    topRight: {
        top: 0,
        right: 0,
        transform: [{rotate: "90deg"}],
        
    },   
    BottomLeft: {
        bottom: 0,
        left: 0,
        transform: [{rotate: "-90deg"}],
        
    }, 
    BottomRight: {
        bottom: 0,
        right: 0,
        transform: [{rotate: "180deg"}],
        
    }
})