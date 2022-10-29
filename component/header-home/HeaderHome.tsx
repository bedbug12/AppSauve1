import React from "react";
import { View, StyleSheet } from "react-native";
import { SearchBar } from '../search-bar/SearchBar';
import { COULEUR_APP } from '../../constante/couleur/couleur-app/CouleurApp';


export const HeaderHome = () =>{
    return (
        <View style={styles.container}>
            <SearchBar />
        </View>
    )

}

const styles= StyleSheet.create({
    container:{
        backgroundColor: COULEUR_APP,
       
        height:80,
    }
});