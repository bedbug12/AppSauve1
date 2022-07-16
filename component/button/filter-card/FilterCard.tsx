import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CategoryButton } from '../category-button/CategoryButton';
import { FilterButton } from '../filter-button/FilterButton';
import { LocationButton } from '../location-button/LocationButton';

export const FilterCard = () =>{
    return (
        <View style={Styles.container}>
            <CategoryButton>Categories</CategoryButton>
            <LocationButton>Localisation</LocationButton>
            <FilterButton>Trier par</FilterButton>
        </View>
    )
}
const Styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        alignSelf:"center",
        margin:10,
        marginTop:20
    }
})
