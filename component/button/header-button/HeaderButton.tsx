import React from "react";
import { View } from "react-native";
import { BasketButton } from "../basket-button/BasketButton";
import { LikeButton } from "../like-button/LikeButton";

export const HeaderButton = () =>{
    return(
        <View style={{flexDirection:"row",alignItems:"center"}}>
            <LikeButton />
            <BasketButton />
        </View>
    )
}