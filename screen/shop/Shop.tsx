import React from "react"
import { View, Text, Image } from 'react-native';
import { CreateShopButton } from '../../component/button/create-shop-button/CreateShopButton';

export const Shop = () =>{
    return (
        <View style={{alignItems:"center",alignContent:"center",justifyContent:"center",flex:1}}>
             <CreateShopButton>
                Créer un magasin
             </CreateShopButton>
        </View>
    )
}