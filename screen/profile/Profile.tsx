import { useNavigation } from "@react-navigation/native";
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COULEUR_APP } from "../../constante/couleur/couleur-app/CouleurApp";
import { SignIn } from "../sign-in/SignIn";



export const Profile = () =>{

    const navigation=useNavigation();

    return (
        <View style={styles.container}>
            <View style={{flexDirection:"row",alignItems:"center",margin:20,padding:10}}>
                <View style={{backgroundColor:"white",borderRadius:50,height:100,width:100}}></View>
                <View>
                    <Text style={{fontSize:16,marginLeft:15,marginBottom:5,color:"white"}}>Nom Prenom</Text>
                    <Text style={{fontSize:16,marginLeft:15,marginBottom:5,color:"white"}}>Numero</Text>
                    <Text style={{fontSize:16,marginLeft:15,marginBottom:5,color:"white"}}>Adresse MAil</Text>
                </View>
            </View>
            <View style={{backgroundColor:"white",alignContent:"center",borderRadius:10,height:270,width:330,margin:22,padding:15,marginTop:15,alignSelf:"center"}}>
                <Text style={styles.text}>Editer le profile</Text>
                <Text style={styles.text}>Langue et Devise</Text>
                <Text style={styles.text}>Feedback</Text>
                <Text style={styles.text}>referer un  ami</Text>
                <Text style={styles.text}>termes et conditons</Text>

                <TouchableOpacity onPress={()=>{navigation.navigate(SignIn as never)}}>
                    <Text style={[styles.text,{color:COULEUR_APP}]}>Se deconnecter</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}


const styles= StyleSheet.create({
    container:{
        backgroundColor: COULEUR_APP,
        height:300,
    },
    text:{
        fontSize:20,
        margin:10
    }
});