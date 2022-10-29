import React from "react";
import { View, Text, Image, Button, ScrollView } from 'react-native';
import { COULEUR_APP } from '../../constante/couleur/couleur-app/CouleurApp';



export const ProductView = () =>{

    return <View style={{backgroundColor:"#F5F5F5"}}>
        
        <ScrollView>
        <Image source={{uri:'https://www.mobicool.com/ui/productimages/98/13/dometic_cool-can-10_9600003942_69813_11.png?mw=580&mh=580&hash=274C18E840DFD8E457D2387BA6F840B0'}} style={{width:370,height:200}} />
        


        <View style={{backgroundColor:"white"}}>
            <Text style={{fontWeight:"bold",fontSize:20,margin:10}}>Coca Cola</Text>
            <View style={{flexDirection:"row",margin:10,alignItems:"center"}}> 
                <Text style={{fontWeight:"bold",fontSize:20,color:COULEUR_APP}}>250F</Text>
                <Text style={{marginLeft:50}}>poucentage</Text>
            </View>
        </View>
        


        <View style={{flexDirection:"row",marginBottom:10,marginTop:10,padding:10,alignItems:"center",backgroundColor:"white",}} >
            <Text>Sanou alimentation</Text>
            <View style={{marginLeft:170,backgroundColor:COULEUR_APP,borderRadius:50}}><Button title="Suivre" /></View>
        </View>



        <View style={{backgroundColor:"white",marginBottom:10,padding:10,}}>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vitae, consequatur amet molestias officia aspernatur repellat modi animi repudiandae ex mollitia, expedita obcaecati neque consequuntur tenetur nam aperiam ea minima.</Text>
        </View>




        <View style={{backgroundColor:"white",marginBottom:10,padding:10,}}>
            <Text style={{fontWeight:"bold",fontSize:20,margin:10}}>Details</Text>
            <View style={{flexDirection:"row",margin:10}}>
                <View style={{flexDirection:"column",}}>
                    <Text>Etat</Text>
                    <Text>Type de prix</Text>
                    <Text>Category</Text>
                    <Text>Lieux</Text>
                </View>
                <View style={{flexDirection:"column",marginLeft:50}}>
                    <Text>Biologique</Text>
                    <Text>fixe</Text>
                    <Text>Boisson</Text>
                    <Text>Ouakam auchan</Text>
                </View>
            </View>
        </View>


        <View style={{backgroundColor:"white",marginBottom:10,padding:10,}}>
                <Text style={{fontWeight:"bold",fontSize:20,margin:10}}>Details Supplementaire</Text>
                <View style={{flexDirection:"row",margin:10}}>
                    <Text>Details de Livraison</Text>
                    <Text style={{marginLeft:50,width:120}}>
                        livraison à domicile disponible, paiement à la livraison
                    </Text>
                </View>
            </View>




            <View  style={{backgroundColor:COULEUR_APP,width:300,borderRadius:50,alignSelf:"center",height:50,justifyContent:"center"}}>
            <Button  title="Ajouter  au panier"/>
        </View> 




        </ScrollView>
        

               


    </View> 

}