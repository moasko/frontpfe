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


const UpdateProfileJou = ({navigation,route}) => {
    const [Nom, setNom] = useState(route.params.nom);
    const [prenom, setprenom] = useState(route.params.prenom);
    const [email, setemail] = useState(route.params.email);
    const [motDepass, setmotDepass] = useState(route.params.motDepass);
    const [id, setid] = useState(route.params.id);
    const [error, seterror] = useState("");
    const [emaill, setemaill] = useState(route.params.email);
    const Modifier = () => {
        const TrimNom = Nom.trim();
        const TrimPrenom = prenom.trim();
        const EmailTrim = email.trim();
        const emailtrim = emaill.trim();
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(EmailTrim) !== true){
            seterror("email non valide")
        }
        else {
         setemaill(EmailTrim)
        }
       
        // console.log(_id);
        fetch("http://192.168.43.1:5000/joueurs/" + id, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            nom: TrimNom,
            prenom: TrimPrenom,
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
            navigation.navigate("Profil Joueur", {
              nom: Nom,
              email: email,
              id: id,
              motDepass: motDepass,
              prenom: prenom,
            });
          })
          .catch((err) => {
            console.log("error", err);
            seterror(err)
            //setvisible(false)
          });
      };
      useEffect(() => {
        
        console.log(id);
      }, []);
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
            value={emaill}
            onChangeText={setemaill}
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
              navigation.navigate("Profil Joueur", {
                nom: Nom,
                email: email,
                id: id,
                motDepass: motDepass,
                prenom: prenom,
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
}
 
export default UpdateProfileJou;