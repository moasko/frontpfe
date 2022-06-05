import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
} from "react";
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
import { FancyAlert } from "react-native-expo-fancy-alerts";

const MettreAjourCon = ({ route, navigation }) => {
  const editor = useRef();
  const [idMed, setidMed] = useState(route.params.idMEd);
  const [idJou, setidJou] = useState(route.params.id);
  const [idcon, setidcon] = useState(route.params.idCon);
  const [resume, setresume] = useState(route.params.Resume);
  const [nomMed, setnomMed] = useState("");
  const [nomJou, setnomJou] = useState("");
  const [consultation, setconsultation] = useState([]);
  const [visible, setvisible] = useState(false);
  const getUser = () => {
    // console.log(_id);
    fetch("http://192.168.43.1:5000/joueurs/" + idJou)
      .then((response) => response.json())
      .then((json) => {
        // setJoueurs(json.data);
        // console.log(json.data.nom);
        setnomJou(json.data.nom);
      })
      .catch((error) => console.error(error));
  };
  const getMEd = () => {
    // console.log(_id);
    fetch("http://192.168.43.1:5000/medecins/" + idMed)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.data.nom);
        // setmedecin(json.data);
        setnomMed(json.data.nom);
      })
      .catch((error) => console.error(error));
  };
  const Modifier = () => {
    // console.log(_id);
    fetch("http://192.168.43.1:5000/consultations/" + idcon, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        joueur:idJou,
        medecin: idMed,
        resume: resume,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setconsultation(data)
         //setresume(resume)
        //setvisible(true)
        // alert("medecin est modifie avec succes")
        //navigation.navigate("Consultation",{idcon,idMed,idJou});
      })
      .catch((err) => {
        console.log("error", err);
        setvisible(false);
      });
  };
  useEffect(() => {
    console.log("------------------");
    console.log(idJou);
    getUser();
    // console.log(joueurinfo);
    getMEd();
    Modifier();
    
  }, []);
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
  return (
    <View style={{ margin: 30, flex: 1, justifyContent: "space-between" }}>
      <Subheading>
        {" "}
        <Text
          style={{
            fontWeight: "bold",
            color: "blue",
            marginLeft: 59,
            fontSize: 25,
          }}
        >
          {" "}
          {nomMed}{" "}
        </Text>
      </Subheading>
      <Subheading>
        {" "}
        <Text
          style={{
            fontWeight: "bold",
            color: "blue",
            margin: 40,
            fontSize: 25,
          }}
        >
          Joueur :{" "}
        </Text>
        {nomJou}
      </Subheading>

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
            initialContentHTML={resume}
            value={resume}
            onChange={setresume}
            placeholder="Commencez a ecrire..."
            useContainer
          />
          <Button
            mode="contained"
            style={{ marginTop: 20, height: 45 }}
            onPress={Modifier}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Enregistrer
            </Text>
          </Button>
          {!visible && (
            <FancyAlert
              visible={visible}
              icon={
                <View
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "red",
                    borderRadius: 50,
                    width: "100%",
                  }}
                >
                  <Text>🤓</Text>
                </View>
              }
              style={{ backgroundColor: "white" }}
            >
              <Text style={{ marginTop: -16, marginBottom: 32 }}>modifiee</Text>
            </FancyAlert>
          )}
          <Button
            mode="contained"
            style={{ marginTop: 20, height: 45 }}
            onPress={() =>
              navigation.navigate("Consultation", { idcon, idMed, idJou })
            }
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Annuler</Text>
          </Button>
        </KeyboardAvoidingView>
      </ScrollView>
      {visible && <Snackbar>eee</Snackbar>}
    </View>
  );
};

export default MettreAjourCon;
