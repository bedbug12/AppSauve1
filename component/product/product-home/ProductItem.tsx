import { PropsOf } from "@emotion/react";
import { useNavigation } from "@react-navigation/native";
import React, { ReactChildren } from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { COULEUR_APP } from "../../../constante/couleur/couleur-app/CouleurApp";
import { DataProduct } from '../../../data/data-product/DataProduct';
import { ProductView } from "../../../screen/product/ProductView";


interface ProductProps{
    image:string | undefined,
    title:string | undefined,
    seller:string | undefined,
    price:string | undefined,
}


export const ProductItem: React.FunctionComponent<ProductProps> = ({image,title,seller,price}) =>{

    const navigation=useNavigation();

    return (
        <TouchableOpacity onPress={()=>navigation.navigate(ProductView as never)}>
        <View style={{margin:14,width:150}}>
            <Image source={{uri: image}} style={{width:150,height:150}} />
            <View style={{backgroundColor:"white"}}>
                <Text style={{margin:10,}}>{title}</Text>
                <View style={{flexDirection:"row",}}>
                    <Text style={{margin:10,color:"grey"}}>{seller}</Text>
                    <Text style={{margin:1,marginLeft:50,fontSize:20,color:COULEUR_APP}}>{price}</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    )
}