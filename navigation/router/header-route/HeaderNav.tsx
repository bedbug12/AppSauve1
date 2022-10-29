import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Like } from "../../../screen/like/Like";
import { Basket } from "../../../screen/basket/Basket";

const stack= createNativeStackNavigator();

export const HeaderNav = () =>{
   return(
    <stack.Navigator>
        <stack.Screen name="Like" component={Like}/>
        <stack.Screen name="Basket" component={Basket}/>  
    </stack.Navigator>
) 
}