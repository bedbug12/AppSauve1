import React from "react";
import { View, StyleSheet } from "react-native";
import { SearchBar } from '../search-bar/SearchBar';


export const HeaderHome = () =>{
    return (
        <View style={styles.container}>
            <SearchBar />
        </View>
    )

}

const styles= StyleSheet.create({
    container:{
        backgroundColor: "#45B39D",
       
        height:80
    }
});