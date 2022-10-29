import React, { Children } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COULEUR_APP } from "../../../constante/couleur/couleur-app/CouleurApp";
import { Ionicons } from '@expo/vector-icons';

interface ButtonProps{
    children:string;
}

export const LocationButton: React.FunctionComponent<ButtonProps> = ({children}) =>{
    return (
        <TouchableOpacity>
            <View style={styles.button}>
            <Ionicons name="location-sharp" size={16} color="white" />
                <Text style={{color:"white",marginLeft:3,fontSize:16}}>{children}</Text>
            </View>
        </TouchableOpacity>
        
    )
}
const styles=StyleSheet.create({
    button:{
        backgroundColor:COULEUR_APP,
        borderColor:"white",
        borderWidth:1,
        color:"red",
        borderRadius:50,
        padding:6,
        margin:1,
        marginLeft:6,
        marginRight:6,
        width:110,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
        
    }
})