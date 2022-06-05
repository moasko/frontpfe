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

const Examen = ({ route, navigation }) => {
  const [idcons, setidcon] = useState(route.params.idcons);
  const [idmed, setidMEd] = useState(route.params.idmed);
  const [idjou, setID] = useState(route.params.idjou);
  const [temperature, settemperature] = useState(0);
  const [poids, setpoids] = useState(0);
  const [taille, settaille] = useState(0);
  const [tesionArterielle, settesionArterielle] = useState(0);
  const [glycemie, setglycemie] = useState(0);
  const [SaturationOxy, setSaturationOxy] = useState(0);
  const [error, seterror] = useState("");
  const EnregistrerOrdonnance = () => {
    const re = /^[0-9\b]+$/;
    const TrimmedTemp = temperature;
    const Trimmetaille = taille;
    const trimedTenion = tesionArterielle;
    const Trimmedglycemie = glycemie;
    const TrimmedSaturationOx = SaturationOxy;
    const TrimmedPoids = poids;
   /* if(isNaN(TrimmedTemp) || isNaN(Trimmetaille) || isNaN(trimedTenion)|| isNaN(Trimmedglycemie)|| isNaN(TrimmedSaturationOx) || isNaN(TrimmedPoids)){
      seterror('Pardon mais il faut entrez des numeros 😑😑')
      return;
    }*/
   /* if(TrimmedTemp <0 || Trimmetaille<0 || trimedTenion<0 || Trimmedglycemie<0 || TrimmedSaturationOx<0 || TrimmedPoids<0){
      seterror('entrer  des valeurs positive 😑')
      return;
    }
    if(!TrimmedTemp.length || !Trimmetaille.length || !trimedTenion.length || !Trimmedglycemie.length || !TrimmedSaturationOx.length || !trimedTenion.length){
      seterror('Remplissez tous le formulaire svp ');
      return;
    }
    if(!re.test(TrimmedTemp) || !re.test(Trimmetaille) || !re.test(trimedTenion) || re.test(Trimmedglycemie) || !re.test(TrimmedSaturationOx) || !re.test(trimedTenion) || !re.test(TrimmedPoids)){
      seterror('Remplissez tous le formulaire svp ');
    }*/
    
        fetch("http://192.168.43.1:5000/exams", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            tempreture: TrimmedTemp,
            Consultation: idcons,
            Joueurs: idjou,
            medecin: idmed,
            Glycemie: Trimmedglycemie,
            saturationOxygene: TrimmedSaturationOx,
            tensionArterielle: trimedTenion,
            taille: Trimmetaille,
            Poids: TrimmedPoids,
          }),
        })
          .then((res) => {
            res.json()
            //setvisible(false)
           
           
          })
          .then((data) => {
            // setIsError(true);
            // setMessage(data.message);
            //console.log(data)
            //alert("medecin est enregistre avec succes")
           //.navigate("liste des ordonnances",{idcons,idmed,idjou})
          })
          .catch((err) => {
            console.log("error", err);
            //setIsError(false);
            seterror(err)
            //setvisible(true)
          });
      };
     
  useEffect(() => {
    EnregistrerOrdonnance();
    console.log(error);
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
            min:0 ,
          }}
          label="Temperature"
          value={temperature.toString()}
          onChangeText={settemperature}
          mode="Flat"
          numeric
          keyboardType="numeric"
          
        />
        <TextInput
          style={{ marginTop: 15, fontSize: 20, backgroundColor: "white" }}
          label="Poids"
          mode="Flat"
          value={poids.toString()}
          onChangeText={setpoids}
          numeric
          keyboardType="numeric"
        />
        <TextInput
          style={{ marginTop: 15, fontSize: 20, backgroundColor: "white" }}
          label="Taille"
          mode="Flat"
          value={taille.toString()}
          onChangeText={settaille}
          keyboardType="numeric"
        />
        <TextInput
          style={{ marginTop: 15, fontSize: 20, backgroundColor: "white" }}
          label="Tension Arterielle"
          mode="Flat"
          value={tesionArterielle.toString()}
          onChangeText={settesionArterielle}
          keyboardType="numeric"
        />
        <TextInput
          style={{ marginTop: 15, fontSize: 20, backgroundColor: "white" }}
          label="Glycemie"
          mode="Flat"
          value={glycemie.toString()}
          onChangeText={setglycemie}
          keyboardType="numeric"
          maxLength={5}
        />
        <TextInput
          style={{ marginTop: 15, fontSize: 20, backgroundColor: "white" }}
          label="Saturation oxygene"
          mode="Flat"
          value={SaturationOxy.toString()}
          onChangeText={setSaturationOxy}
          keyboardType="numeric"
        />
        <Button
          mode="contained"
          style={{ marginTop: 20, height: 45 }}
          onPress={EnregistrerOrdonnance}
        >
          <Text style={{ fontSize: 20 }}>Enregistrer</Text>
        </Button>
        <Button mode="contained" style={{ marginTop: 20, height: 45 }}>
          <Text style={{ fontSize: 20 }}>annuler</Text>
        </Button>
      </ScrollView>
      <Snackbar visible={error.length > 0} onDismiss={() => seterror('')} style={{fontSize:20,fontWeight :'bold'}}>{error} 🙂🤠😎</Snackbar>
    </View>
  );
};

export default Examen;
