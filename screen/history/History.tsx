import React from "react"
import { View, Text, Button, Image } from 'react-native';
import { COULEUR_APP } from '../../constante/couleur/couleur-app/CouleurApp';

export const History = () =>{
    return (
        <View>



            <View style={{flexDirection:"row",alignItems:"center",margin:10,marginTop:30}}>
                <Text style={{fontSize:28,fontWeight:"bold",}}>Transactions</Text>
                <View style={{backgroundColor:'#E0FFFF',borderRadius:5,marginLeft:10,padding:8}}>
                    <Text style={{fontSize:20,color:COULEUR_APP,}}>Janvier 2020</Text>
                </View>

            </View>
            


            <View style={{flexDirection:"row",marginBottom:10,marginTop:10,padding:10,alignItems:"center",backgroundColor:"white",alignSelf:"center"}} >
            
                <Image source={{uri:'https://www.mobicool.com/ui/productimages/98/13/dometic_cool-can-10_9600003942_69813_11.png?mw=580&mh=580&hash=274C18E840DFD8E457D2387BA6F840B0' }} style={{width:50,height:50}} />
                <View style={{margin:5}}>
                    <Text>Coca Cola</Text>
                    <View style={{flexDirection:"row",margin:1,alignItems:"center"}}> 
                        <Text style={{fontWeight:"bold",fontSize:20,color:COULEUR_APP}}>250F</Text>
                        <Text style={{marginLeft:10,color:"grey"}}>poucentage</Text>
                    </View>
                </View>
            
                <View style={{marginLeft:100,backgroundColor:COULEUR_APP,borderRadius:50}}><Button title="Suivre" /></View>
            </View>

        </View>
    )
}