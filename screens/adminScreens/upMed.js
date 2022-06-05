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

const UPmed = ({ route, navigation }) => {
  const getDetails = (type) => {
    if (route.params) {
      switch (type) {
        case "nom":
          return route.params.nom;
        case "specialite":
          return route.params.specialite;
        case "email":
          return route.params.email;
        case "motDepass":
          return route.params.motDepass;
        case "prenom":
          return route.params.prenom;
      }
    }
    return "";
  };
  const [nom, setnom] = useState(getDetails("nom"));
  //const [prenom, setprenom] = useState('');
  const [specialite, setspecialite] = useState(getDetails("specialite"));
  const [email, setemail] = useState(getDetails("email"));
  const [motDepass, setmotDepass] = useState(getDetails("motDepass"));
  const [prenom, setprenom] = useState(getDetails("prenom"));
  // const [Medecins, setMedecins] = useState([]);
  // const [Modalvisible, setModalvisible] = useState(false);
  const [_id, set_id] = useState(route.params.id);
  const [error, seterror] = useState("");
   const [refreshpage, setrefreshpage] = useState(false);
  useEffect(() => {
    // console.log(data.message)
    //getUser()
  }, []);

  const Modifier = () => {
    console.log(_id);
    fetch("http://192.168.43.1:5000/medecins/" + _id + "/update", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        //id:id,
        nom: nom,
        specialite: specialite,
        email: email,
        prenom: prenom,
        // id:route.params._id
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        // alert("medecin est modifie avec succes")
        navigation.navigate("liste des medecins");
        seterror(data.message);
        setrefreshpage(true)
      })
      .catch((err) => {
        console.log("error", err);
        seterror(err);
      });
  };
  /*  const getUser = () => {
      // console.log(_id);
      fetch("http://192.168.43.1:5000/medecins/" + _id)
        .then((response) => response.json())
        .then((json) => {
   
          setNomD(json.data.nom);
          setspecialiteD(json.data.specialite);
          setemailD(json.data.email);
          setmotDepass(json.data.motDepass)
        })
        .catch((error) => console.error(error));
    };*/

  const reset = () => {
    setemail("");
    setmotDepass("");
    setnom("");
    setprenom("");
    setspecialite("");
    navigation.navigate("liste des medecins");
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
          }}
          label="Nom"
          value={nom}
          onChangeText={setnom}
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
          label="Prenom"
          mode="Flat"
          onChangeText={setprenom}
          value={prenom}
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
          onPress={reset}
        >
          <Text style={{ fontSize: 20 }}>annuler</Text>
        </Button>
      </ScrollView>
      <Snackbar visible={error.length > 0} onDismiss={() => seterror("")}>
        {error}
      </Snackbar>
    </View>
  );
};

export default UPmed;
