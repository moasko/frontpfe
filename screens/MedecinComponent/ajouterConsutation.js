import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import {
  Button,
  Colors,
  Snackbar,
  Subheading,
  TextInput,
} from "react-native-paper";

const AjoutConsultation = ({ route, navigation }) => {
  const editor = useRef();
  const [joueurinfo, setJoueurs] = useState([]);
  const [id, setid] = useState(route.params.id);
  const [nom, setnom] = useState("");
  const [idMed, setidMed] = useState(route.params.idMEd);
  const [medecin, setmedecin] = useState([]);
  const [Nomjou, setNomjou] = useState("");
  const [resume, setresume] = useState("");
  const getUser = () => {
    // console.log(_id);
    fetch("http://192.168.43.1:5000/joueurs/" + id)
      .then((response) => response.json())
      .then((json) => {
        setJoueurs(json.data);
        console.log(json.data.nom);
        setNomjou(json.data.nom);
      })
      .catch((error) => console.error(error));
  };
  const getMEd = () => {
    // console.log(_id);
    fetch("http://192.168.43.1:5000/medecins/" + idMed)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.data.nom);
        setmedecin(json.data);
        setnom(json.data.nom);
      })
      .catch((error) => console.error(error));
  };
  const Signup = () => {
    fetch("http://192.168.43.1:5000/consultations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        joueur: id,
        medecin: idMed,
        resume: resume,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // setIsError(true);
        // setMessage(data.message);
        //console.log(data)
        //alert("medecin est enregistre avec succes")
        navigation.navigate("Consultation", { id, idMed });
      })
      .catch((err) => {
        console.log("error", err);
        //setIsError(false);
      });
  };

  useEffect(() => {
    console.log("------------------");
    console.log(id);
    getUser();
    // console.log(joueurinfo);
    getMEd();
    //Signup();
  }, []);
  const Reset = () => {
    setnom("");
    setNomjou("");
    navigation.navigate("Consultation", { id, idMed });
  };
  return (
    <View style={{ margin: 30, flex: 1, justifyContent: "space-between" }}>
      <TextInput
        label="Medecin"
        value={nom}
        mode="outlined"
        style={{ backgroundColor: "rgba(255,255,255,1)" }}
      />
      <TextInput
        label="joueur"
        value={Nomjou}
        mode="outlined"
        style={{ backgroundColor: "rgba(255,255,255,1)", marginTop: 20 }}
      />
      <Subheading>
        {" "}
        <Text style={{ fontWeight: "bold", color: "blue" }}>Resume</Text>
      </Subheading>
      <RichToolbar editor={editor} />
      <ScrollView keyboardDismissMode="onDrag">
        <KeyboardAvoidingView
          behavior={"position"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={250}
        >
          <RichEditor
            style={{ flex: 1 }}
            ref={editor}
            onChange={setresume}
            placeholder="Commencez a ecrire..."
            useContainer
          />
          <Button
            mode="contained"
            style={{ marginTop: 20, height: 45 }}
            onPress={Signup}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Enregistrer
            </Text>
          </Button>
        </KeyboardAvoidingView>
      </ScrollView>
      <Snackbar>eee</Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    alignItems: "center",
    justifyContent: "center",
  },
  placeholder: {
    color: "#121212",
    height: 60,
    width: 320,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 23,
    marginTop: 150,
    marginLeft: 25,
  },
  placeholder1: {
    color: "#121212",
    height: 60,
    width: 320,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 23,
    marginTop: 20,
    marginLeft: 25,
  },
  button: {
    width: 125,
    height: 50,
    backgroundColor: "rgba(74,144,226,1)",
  },
  enregistrer: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 19,
    fontWeight: "bold",
  },

  enregistrerStack: {
    width: 96,
    height: 24,
    marginTop: 13,
    marginLeft: 14,
  },
  button1: {
    width: 125,
    height: 50,
    backgroundColor: "rgba(74,144,226,1)",
    marginLeft: 11,
    marginTop: 4,
  },
  annuler: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 9,
    marginLeft: 28,
    fontWeight: "bold",
  },
  buttonRow: {
    height: 51,
    flexDirection: "row",
    marginTop: 33,
    marginLeft: 59,
    marginRight: 42,
  },
});
export default AjoutConsultation;
