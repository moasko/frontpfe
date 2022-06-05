import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import {
  Button,
  Colors,
  Snackbar,
  Subheading,
  TextInput,
} from "react-native-paper";

const AjouttJoueur = ({ navigation, route }) => {
  const baseUrl = "https://nodeback.onrender.com"
  const [_id, setidgrp] = useState(route.params.id);
  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [groupe, setgroupe] = useState("");
  const [numero, setnumero] = useState(0);
  const [email, setemail] = useState("");
  const [motDepass, setmotDepass] = useState("");
  const [isError, setIsError] = useState(true);
  const [message, setMessage] = useState("");
  const [error, seterror] = useState("");
  const getMessage = () => {
    const status = !isError ? `Error: ` : `Success: `;
    return status + message;
  };

  const Signup = () => {
    fetch(`${baseUrl}/joueurs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nom: nom,
        prenom: prenom,
        email: email,
        motDepass: motDepass,
        groupe: _id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        console.log(data);
        setIsError(false);
        console.log(isError);
        navigation.navigate('liste des joueurs',{idgrp:_id})
        //alert("medecin est enregistre avec succes")
      })
      .catch((err) => {
        console.log("error", err);
        setIsError(true);
        console.log(isError);
      });
  };
  const reset = () => {
    setnom("");
    setprenom("");
    setemail("");
    setmotDepass("");
  };
  const getUser = () => {
    // console.log(_id);
    fetch(`${baseUrl}/groupes/` + _id)
      .then((response) => response.json())
      .then((json) => {
         console.log(json.data.nom);
        setgroupe(json.data.nom)
   
        //console.log(json.data);
      })
      .catch((error) =>{ console.error(error);
        })
     
      
  };
  useEffect(() => {
    getUser();
    console.log(_id);
  }, []);
  return (
    <View style={{ margin: 10, flex: 1, justifyContent: "space-between" }}>
      <ScrollView keyboardDismissMode="onDrag">
        <TextInput
          style={{ marginTop: 15, fontSize: 20, backgroundColor: "white" }}
          label="Nom"
          mode="Flat"
          value={nom}
          onChangeText={setnom}
        />
        <TextInput
          style={{ marginTop: 15, fontSize: 20, backgroundColor: "white" }}
          label="Prenom"
          mode="Flat"
          value={prenom}
          onChangeText={setprenom}
        />
        <TextInput
          style={{ marginTop: 15, fontSize: 20, backgroundColor: "white" }}
          label="Email"
          mode="Flat"
          value={email}
          onChangeText={setemail}
        />

        <TextInput
          style={{ marginTop: 15, fontSize: 20, backgroundColor: "white" }}
          label="Mot de passe"
          mode="Flat"
          value={motDepass}
          onChangeText={setmotDepass}
        />
          <TextInput
          style={{ marginTop: 15, fontSize: 20, backgroundColor: "white" }}
          label="groupe"
          mode="Flat"
          value={groupe}
          
        />
        <Button
          mode="contained"
          style={{ marginTop: 20, height: 45 }}
          onPress={Signup}
        >
          <Text style={{ fontSize: 20 }}>Enregistrer</Text>
        </Button>
        <Button
          mode="contained"
          style={{ marginTop: 20, height: 45 }}
          onPress={reset}
        >
          <Text style={{ fontSize: 20 }}>annuler</Text>
        </Button>
      </ScrollView>
    </View>
  );
};

export default AjouttJoueur;
