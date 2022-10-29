import React from "react"
import { View , Text , Image, Button } from "react-native"
import { COULEUR_APP } from "../../constante/couleur/couleur-app/CouleurApp"

export const Basket = () =>{
    return (
        <View>
            
            <View>
            <View style={{flexDirection:"row",marginTop:10,padding:10,alignItems:"center",backgroundColor:"white",height:150,}} >
            
                <Image source={{uri:'https://www.mobicool.com/ui/productimages/98/13/dometic_cool-can-10_9600003942_69813_11.png?mw=580&mh=580&hash=274C18E840DFD8E457D2387BA6F840B0' }} style={{width:100,height:100}} />
                <View style={{margin:5}}>
                    <Text style={{fontSize:20,}}>Coca Cola</Text>
                    <View style={{flexDirection:"row",margin:1,alignItems:"center"}}> 
                        <Text style={{fontWeight:"bold",fontSize:20,color:COULEUR_APP}}>250F</Text>
                        <Text style={{marginLeft:30,color:"grey"}}>poucentage</Text>
                    </View>
                </View>
        
            </View>

            <View style={{backgroundColor:"white",marginBottom:10,padding:10}}><Button title="Supprimer" /></View>

            </View>


            <View style={{backgroundColor:"white",padding:10,marginTop:50,}}>
                <Text style={{fontWeight:"bold",fontSize:24,}}>Details du prix</Text>
                <View style={{flexDirection:"row",margin:10,alignItems:"center"}}> 
                        <Text style={{fontSize:16,}}>Prix</Text>
                        <Text style={{marginLeft:280,}}>250</Text>
                    </View>

                    <View style={{flexDirection:"row",margin:10,marginTop:2,alignItems:"center"}}> 
                        <Text style={{fontSize:16,}}>Montant livraison</Text>
                        <Text style={{marginLeft:200,}}>---</Text>
                    </View>

                    <View style={{flexDirection:"row",margin:10,marginTop:20,alignItems:"center"}}> 
                        <Text style={{fontSize:16,}}>Montant Total</Text>
                        <Text style={{marginLeft:220,}}>250</Text>
                    </View>
            </View>


        </View>
    )
}