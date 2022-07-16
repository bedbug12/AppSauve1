import React, { Children } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const LikeButton: React.FunctionComponent = () =>{
    return (
        <TouchableOpacity>
            <View >
             <AntDesign name="heart" size={20} color="white" />
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