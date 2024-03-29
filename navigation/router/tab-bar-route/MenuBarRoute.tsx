import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../../screen/home/Home";
import { Search } from "../../../screen/search/Search";
import { Shop } from "../../../screen/shop/Shop";
import { History } from "../../../screen/history/History";
import { Profile } from "../../../screen/profile/Profile";
import { Ionicons, Entypo,FontAwesome5,FontAwesome } from '@expo/vector-icons';
import { HeaderButton } from "../../../component/button/header-button/HeaderButton";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COULEUR_APP } from "../../../constante/couleur/couleur-app/CouleurApp";

const tab=createBottomTabNavigator();
const stack=createNativeStackNavigator();

export const MenuBarRoute = () =>{
    
    return(
        
      <tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            let iconColor=focused?COULEUR_APP:"gray";

            if (route.name === 'Home') {
              
              return <Ionicons name="home" size={size} color={iconColor} />;

            } else if (route.name === 'Search') {
              
              return <Ionicons name="search" size={size} color={iconColor} />;

            } else if (route.name === 'Shop') {
              
              return <Entypo name="shop" size={size} color={iconColor} />;

            }else if (route.name === 'History') {
              
              return <FontAwesome5 name="clipboard-list" size={size} color={iconColor} />;

            }else if (route.name === 'Profile') {
              
              return <FontAwesome name="user" size={size} color={iconColor} />;
            }

            // You can return any component that you like here!
            
          }
        })}
      >

      <tab.Screen name="Home" component={Home} 
      options={{
          title: 'Course',
          headerStyle: {
          backgroundColor: COULEUR_APP,
          height:70,
        
          
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:28,
          },
          headerRight: () => (
              <HeaderButton />
            ),
      }}/>
      <tab.Screen name="Search" component={Search}
      options={{
          title: 'Search',
          headerStyle: {
          backgroundColor: COULEUR_APP,
          height:70,
          
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:28,
          },
          headerRight: () => (
              <HeaderButton />
            ),
      }}/>
      <tab.Screen name="Shop" component={Shop}
      options={{
          title: 'Shop',
          headerStyle: {
          backgroundColor: COULEUR_APP,
          height:70,
          
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:28,
          },
          headerRight: () => (
              <HeaderButton />
            ),
      }}/>
      <tab.Screen name="History" component={History}
      options={{
          title: 'History',
          headerStyle: {
          backgroundColor: COULEUR_APP,
          height:70,
          
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:28,
          },
          headerRight: () => (
              <HeaderButton />
            ),
      }}/>
      <tab.Screen name="Profile" component={Profile}
      options={{
          title: 'Profile',
          headerStyle: {
          backgroundColor: COULEUR_APP,
          height:70,
          
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:28,
          },
          headerRight: () => (
              <HeaderButton />
            ),
      }}/>
        
      </tab.Navigator>

    )
}

