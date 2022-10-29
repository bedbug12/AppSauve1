import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Like } from "../../screen/like/Like";
import { MenuBarRoute } from "./tab-bar-route/MenuBarRoute";
import { Basket } from "../../screen/basket/Basket";
import { COULEUR_APP } from "../../constante/couleur/couleur-app/CouleurApp";
import { ProductView } from "../../screen/product/ProductView";
import { CreateShop } from '../../screen/shop/CreateShop';
import { SignIn } from "../../screen/sign-in/SignIn";
import { SignUp } from "../../screen/sign-up/SignUp";


const stack=createNativeStackNavigator();

export const RouteNav = () =>{
    
    return(
        
      <NavigationContainer> 
        <stack.Navigator>
            <stack.Screen name="MenuBarRoute" component={MenuBarRoute} options={{ headerShown: false }}/>
            <stack.Screen name="Basket" component={Basket} options={{
          
          headerStyle: {
          backgroundColor: COULEUR_APP,
          
          },headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:20,
          },
          }} />
            <stack.Screen name="Like" component={Like} options={{
          headerStyle: {
          backgroundColor: COULEUR_APP,
          
          },headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:20,
          },
          }}/>
          
            <stack.Screen name="ProductView" component={ProductView}  />
            <stack.Screen name="CreateShop" component={CreateShop} options={{
          headerStyle: {
          backgroundColor: COULEUR_APP,
          
          },headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:20,
          },
          }} />


          <stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
          <stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>


        </stack.Navigator>
          
      </NavigationContainer>
    )
}

