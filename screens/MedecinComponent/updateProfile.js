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
  Alert,
} from "react-native";
import {
  Button,
  Colors,
  Snackbar,
  Subheading,
  TextInput,
} from "react-native-paper";

const UpProfile = ({ navigation, route }) => {
  const [error, seterror] = useState("");
  const [Nom, setNom] = useState(route.params.nom);
  const [prenom, setprenom] = useState(route.params.prenom);
  const [specialite, setspecialite] = useState(route.params.specialite);
  const [Email, setEmail] = useState(route.params.email);
  const [id, setid] = useState(route.params.id);
  const [motDepss, setmotDepss] = useState(route.params.motDepass);
  const Modifier = () => {
    const TrimNom = Nom.trim();
    const TrimPrenom = prenom.trim();
    const specialiteTrim = specialite.trim();
    const EmailTrim = Email.trim();

    // console.log(_id);
    fetch("http://192.168.43.1:5000/medecins/" + id + "/update", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nom: TrimNom,
        prenom: TrimPrenom,
        specialite: specialiteTrim,
        email: EmailTrim,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setconsultation(data)
        // setresume(resume)
        //setvisible(true)
        // alert("medecin est modifie avec succes")
        navigation.navigate("profilAcceuil", {
          nom: Nom,
          email: Email,
          specialite: specialite,
          id: id,
          motDepass: motDepss,
          prenom: prenom,
        });
      })
      .catch((err) => {
        console.log("error", err);
        //setvisible(false)
      });
  };
  return (
    <View style={{ margin: 10, flex: 1, justifyContent: "space-between" }}>
      <ScrollView keyboardDismissMode="onDrag">
        <TextInput
          style={{
            marginTop: 15,
            fontSize: 20,
            color: "blue",
            backgroundColor: "white",
            min: 0,
          }}
          label="Nom"
          value={Nom}
          onChangeText={setNom}
          mode="Flat"
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
          value={Email}
          onChangeText={setEmail}
        />
        <TextInput
          style={{ marginTop: 15, fontSize: 20, backgroundColor: "white" }}
          label="Specialite"
          mode="Flat"
          value={specialite}
          onChangeText={setspecialite}
        />
        <Button
          mode="contained"
          style={{ marginTop: 20, height: 45 }}
          onPress={Modifier}
        >
          <Text style={{ fontSize: 20 }}>Enregistrer</Text>
        </Button>
        <Button
          mode="contained"
          style={{ marginTop: 20, height: 45 }}
          onPress={() =>
            navigation.navigate("profilAcceuil", {
              nom: Nom,
              email: Email,
              specialite: specialite,
              id: id,
              motDepass: motDepss,
              prenom,
            })
          }
        >
          <Text style={{ fontSize: 20 }}>annuler</Text>
        </Button>
      </ScrollView>
      <Snackbar
        visible={error.length > 0}
        onDismiss={() => seterror("")}
        style={{ fontSize: 20, fontWeight: "bold" }}
      >
        {error} 🙂🤠😎
      </Snackbar>
    </View>
  );
};

export default UpProfile;
