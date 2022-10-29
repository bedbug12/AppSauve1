import { useNavigation } from "@react-navigation/native";
import React, { Children } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COULEUR_APP } from "../../../constante/couleur/couleur-app/CouleurApp";
import { CreateShop } from '../../../screen/shop/CreateShop';

interface ButtonProps{
    children:string;
}


export const CreateShopButton: React.FunctionComponent<ButtonProps> = ({children}) =>{

    const navigation=useNavigation();

    return (
        <TouchableOpacity onPress={()=>navigation.navigate(CreateShop as never)}>
            <View style={styles.button}>
                <Text style={{color:"white",fontSize:28,textAlign:"center"}}>{children}</Text>
            </View>
        </TouchableOpacity>
        
    )
}
const styles=StyleSheet.create({
    button:{
        backgroundColor:COULEUR_APP,
        borderRadius:50,
        padding:10,
        margin:1,
        width:250,
    }
})