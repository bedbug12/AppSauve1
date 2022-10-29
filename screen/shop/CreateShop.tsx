import React, { VoidFunctionComponent } from "react";
import { ScrollView, Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { InputComp } from "../../component/input-component/InputComp";
import { COULEUR_APP } from "../../constante/couleur/couleur-app/CouleurApp";

export const CreateShop = () =>{
    return (
        <ScrollView
          style={{flex:1}}
          contentContainerStyle={{padding:4}}
        >
          <Text style={{fontWeight:"bold",fontSize:28,marginTop:5}}>
            Création de magasin
          </Text>
          <InputComp
            label="Préom"
            
            placeholder="Julian"
            
          />
          <InputComp
            label="Nom"
           
            placeholder="Tavarez"
            
          />
          
          <TouchableOpacity style={{alignSelf:"center"}}>
            <View style={{
        backgroundColor:COULEUR_APP,
        borderRadius:50,
        padding:10,
        margin:1,
        width:250,
    }}>
                <Text style={{color:"white",fontSize:28,textAlign:"center"}}>Créer</Text>
            </View>
        </TouchableOpacity>

        </ScrollView>
      );
}

