import React from "react";
import { View,TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const SearchBar =()=>{
    return( 
        <View  style={styles.container}>
            <View style={{justifyContent:"center"}}>
                <Feather name="search" size={20} color="#45B39D"/>
            </View>
            <View style={styles.input}> 
                <TextInput 
                    placeholder="Search Product"
                    style={{fontSize:20}}
                    />
            </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      width:250,
      borderRadius:50,
      padding: 10,
      backgroundColor:"white",
      
    },
    container:{
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:"white",
        borderRadius:50,
        width:300,
        alignSelf:"center",
        marginTop:20
    }
})