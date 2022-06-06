import React, { useState,useEffect} from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator
} from "react-native";
import {
  Button,
  TextInput,
} from "react-native-paper";

import { addMedecien } from "../../utiles/backend/medeciens";


const AdMed = ({ navigation }) => {
  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [specialite, setspecialite] = useState("");
  const [email, setemail] = useState("");
  const [motDepass, setmotDepass] = useState("");

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const resetForm = () => {
    setemail("");
    setmotDepass("");
    setnom("");
    setprenom("");
    setspecialite("");
  };

  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `;
    return status + message;
  };

  const handleSingup = () => {
      setIsLoading(true);
      addMedecien(nom, prenom, specialite, email, motDepass)
        .then(data => {
          resetForm();
          setMessage(data.message);
          setIsError(false);
          navigation.navigate("liste des medecins");
        })
        .catch(err => {
          setMessage(err.message);
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
  }

  return (
    <View style={{ margin: 10, flex: 1, justifyContent: "space-between" }}>
      <ScrollView keyboardDismissMode="onDrag">
        <TextInput
          style={{
            marginTop: 15,
            fontSize: 20,
            color: "blue",
            backgroundColor: "white",
          }}
          label="Nom"
          value={nom}
          onChangeText={setnom}
          mode="Flat"
        />
        <TextInput
          style={{
            marginTop: 15,
            fontSize: 20,
            color: "blue",
            backgroundColor: "white",
          }}
          label="Prenom"
          value={prenom}
          onChangeText={setprenom}
          mode="Flat"
        />
        <TextInput
          style={{ marginTop: 15, fontSize: 20, backgroundColor: "white" }}
          label="Specialite"
          mode="Flat"
          value={specialite}
          onChangeText={setspecialite}
        />
        <TextInput
          style={{ marginTop: 15, fontSize: 20, backgroundColor: "white" }}
          label="Email"
          mode="Flat"
          onChangeText={setemail}
          value={email}
        />
        <TextInput
          style={{ marginTop: 15, fontSize: 20, backgroundColor: "white" }}
          label="mot De passe"
          mode="Flat"
          onChangeText={setmotDepass}
          value={motDepass}
        />

        <Button
          mode="contained"
          style={{ marginTop: 20, height: 45 }}
          onPress={handleSingup}
        >
          {
            isLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={{ fontSize: 20 }}>Enregistrer</Text>
            )
          }
        </Button>
        <Button
          mode="contained"
          style={{ marginTop: 20, height: 45 }}
          onPress={resetForm}
        >
          <Text style={{ fontSize: 20 }}>annuler</Text>
        </Button>
      </ScrollView>
      <Text style={[styles.message, { color: isError ? "red" : "green" }]}>
        {message ? getMessage() : null}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
  },
  input: {},
  button: {
    backgroundColor: "#256CFF",
    padding: 15,
    alignItems: "center",
    marginVertical: 10,
  },
  message: {
    fontSize: 16,
    marginVertical: "5%",
  },
});

export default AdMed;
