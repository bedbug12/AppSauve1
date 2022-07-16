import React, { Children } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
interface ButtonProps{
    children:string;
}

export const LocationButton: React.FunctionComponent<ButtonProps> = ({children}) =>{
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={{color:"white"}}>{children}</Text>
            </View>
        </TouchableOpacity>
        
    )
}
const styles=StyleSheet.create({
    button:{
        backgroundColor:"#45B39D",
        borderColor:"white",
        borderWidth:1,
        color:"red",
        borderRadius:50,
        padding:6,
        margin:1,
        width:120
        
    }
})