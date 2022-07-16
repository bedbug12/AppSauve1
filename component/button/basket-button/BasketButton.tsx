import React, { Children } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const BasketButton: React.FunctionComponent = () =>{
    return (
        <TouchableOpacity>
            <View style={{margin:10}}>
                <Ionicons name="cart" size={26} color="white" />
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