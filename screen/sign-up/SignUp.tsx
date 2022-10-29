import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Alert
} from "react-native";
import { COULEUR_APP } from "../../constante/couleur/couleur-app/CouleurApp";
import { SignIn } from "../sign-in/SignIn";



 
export const SignUp = () => {

    const navigation=useNavigation();
    
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
      <View style={styles.container}>
        
        <StatusBar style="auto" />
        
        <View>
            <Text style={styles.title}>Bienvenue</Text>
        </View>

        <View>
            <Text style={styles.description}>Inscrivez Vous à votre compte</Text>
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Prénom"
            placeholderTextColor="#FFF"
            onChangeText={(prenom) => setPrenom(prenom)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Nom"
            placeholderTextColor="#FFF"
            onChangeText={(nom) => setNom(nom)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="E-mail/numero de téléphone"
            placeholderTextColor="#FFF"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Mot de passe"
            placeholderTextColor="#FFF"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Retaper le Mot de passe"
            placeholderTextColor="#FFF"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={()=>{Alert.alert("0 comptes ajoutes","non pris en charge")}}>
          <Text style={styles.loginText}>creer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate(SignIn as never)}}>
          <Text style={styles.forgot_button}> Avez vous un compte s'identifer?</Text>
        </TouchableOpacity>
        
        
      </View>
    </TouchableWithoutFeedback>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: COULEUR_APP,//tu peux remplacer par la variable de couleur
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    borderColor: "white",
    borderWidth: 1,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
    color : "white",
  },
 
  forgot_button: {
    fontSize : 16,
    height: 30,
    marginBottom: 0,
    marginTop: 30,
    color :"#FFF"
  },
  register:{
    fontSize : 16,
    height: 30,
    marginBottom: 0,
    marginTop: 30,
    color :"#FFF"
  },
  title :{
    fontWeight : "bold",
    fontSize: 24,
    height: 30,
    marginBottom: 30,
    marginTop: 80,
    color :"#FFF"
  },
  description:{
    fontSize : 16,
    height: 30,
    marginBottom: 10,
    marginTop: 30,
    color :"#FFF"
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FFF",
  },
  loginText : {
    color : COULEUR_APP,//tu peux remplacer par la variable de couleur
    fontSize : 16,
  },
  scroll :{
    backgroundColor : COULEUR_APP,//tu peux remplacer par la variable de couleur
    width: "100%"
  }
});