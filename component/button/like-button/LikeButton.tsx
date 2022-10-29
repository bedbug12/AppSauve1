import React, { Children } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Like } from "../../../screen/like/Like";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HeaderNav } from '../../../navigation/router/header-route/HeaderNav';
import { COULEUR_APP } from "../../../constante/couleur/couleur-app/CouleurApp";

export const LikeButton: React.FunctionComponent = () =>{
    const navigation= useNavigation();
    return (
        <TouchableOpacity onPress={()=>navigation.navigate( Like as never)}>
            <View >
             <AntDesign name="heart" size={20} color="white" />
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