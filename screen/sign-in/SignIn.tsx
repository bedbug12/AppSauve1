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
  Keyboard
} from "react-native";
import { COULEUR_APP } from "../../constante/couleur/couleur-app/CouleurApp";
import { MenuBarRoute } from "../../navigation/router/tab-bar-route/MenuBarRoute";
import { SignUp } from "../sign-up/SignUp";

 
export const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigation=useNavigation();
 
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
      <View style={styles.container}>
        
        <StatusBar style="auto" />

        <View>
            <Text style={styles.title}>Bienvenue</Text>
        </View>

        <View>
            <Text style={styles.description}>Connectez vous à votre compte</Text>
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="E-mail/numero de téléphone."
            placeholderTextColor="#FFF"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Mot de passe."
            placeholderTextColor="#FFF"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn}
        onPress={()=>{navigation.navigate(MenuBarRoute as never)}}
        >
          <Text style={styles.loginText}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{navigation.navigate(SignUp as never)}}
        >
          <Text style={styles.register}>Vous n'avez pas de compte ? S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COULEUR_APP,//tu peux remplacer par la variable de couleur
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
    marginLeft: 20,
    color : "white"
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
    marginBottom: 30,
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
  }
});