import React, { Children } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";
import { Basket } from "../../../screen/basket/Basket";
import { HeaderNav } from "../../../navigation/router/header-route/HeaderNav";
import { COULEUR_APP } from "../../../constante/couleur/couleur-app/CouleurApp";

export const BasketButton: React.FunctionComponent = () =>{
    const navigation =useNavigation();
    return (
        <TouchableOpacity onPress={()=>navigation.navigate(Basket as never)}>
            <View style={{margin:10}}>
                <Ionicons name="cart" size={26} color="white" />
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
        width:120
        
    }
})