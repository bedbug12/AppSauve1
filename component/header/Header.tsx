import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { CategoryButton } from '../button/category-button/CategoryButton';
import { FilterButton } from "../button/filter-button/FilterButton";
import { LocationButton } from "../button/location-button/LocationButton";
import { SearchBar } from '../search-bar/SearchBar';
import { FilterCard } from '../button/filter-card/FilterCard';
import { COULEUR_APP } from "../../constante/couleur/couleur-app/CouleurApp";

export const Header = () =>{
    return (
        <View style={styles.container}>
            
            <SearchBar />
            <FilterCard />
        </View>
    )

}

const styles= StyleSheet.create({
    container:{
        backgroundColor: COULEUR_APP,
        borderColor:COULEUR_APP,
        height:130
    }
});