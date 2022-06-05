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



const UpdateExam = ({route,navigation}) => {
const [idmed, setidmed] = useState(route.params.idMEd);
const [idjou, setidjou] = useState(route.params.idjou);
const [idcons, setidcons] = useState(route.params.idCon);
const [glycemie, setglycemie] = useState(route.params.glyc);
const [id, setid] = useState(route.params.idantt);
const [taille, settaille] = useState(route.params.tai);
const [Poids, setpoids] = useState(route.params.poids);
const [temperature, settemperature] = useState(route.params.temp);
const [saturationOxy, setsaturationOxy] = useState(route.params.satOx);
const [TensionArterielle, setTensionArterielle] = useState(route.params.tsart);
const [error, seterror] = useState("");
    const Modifier = () =>{
      const TrimmedTemp = temperature;
      const Trimmetaille = taille;
      const trimedTenion = TensionArterielle;
      const Trimmedglycemie = glycemie;
      const TrimmedSaturationOx = saturationOxy;
      const TrimmedPoids = Poids;
     
        // console.log(_id);
           fetch("http://192.168.43.1:5000/exams/"+id, 
           {
               method:'PUT',
               headers:{
                   'content-type' : 'application/json'
               },
               body : JSON.stringify({
                tempreture: TrimmedTemp,
                Poids: TrimmedPoids,
                taille: Trimmetaille,
                tensionArterielle: trimedTenion,
                saturationOxygene:TrimmedSaturationOx,
                Glycemie:Trimmedglycemie ,
                Consultation: idcons,
               })
           }).then(res => res.json())
           .then(data => {
               console.log(data)
              // setconsultation(data)
              // setresume(resume)
              //setvisible(true)
             // alert("medecin est modifie avec succes")
             navigation.navigate('Antecedents medicaux',{id : idjou,_idMEd :idmed})
 
           }).catch(err =>{
               console.log("error",err)
               //setvisible(false)
           })
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
              min:0 ,
            }}
            label="Temperature"
            value={temperature.toString()}
            onChangeText={settemperature}
            mode="Flat"
            keyboardType="numeric"
            
          />
          <TextInput
            style={{ marginTop: 15, fontSize: 20, backgroundColor: "white" }}
            label="Poids"
            mode="Flat"
            value={Poids.toString()}
            onChangeText={setpoids}
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
            value={TensionArterielle.toString()}
            onChangeText={setTensionArterielle}
            keyboardType="numeric"
          />
          <TextInput
            style={{ marginTop: 15, fontSize: 20, backgroundColor: "white" }}
            label="Glycemie"
            mode="Flat"
            value={glycemie.toString()}
            onChangeText={setglycemie}
            keyboardType="numeric"
          />
          <TextInput
            style={{ marginTop: 15, fontSize: 20, backgroundColor: "white" }}
            label="Saturation oxygene"
            mode="Flat"
            value={saturationOxy.toString()}
            onChangeText={setsaturationOxy}
            keyboardType="numeric"
          />
          <Button
            mode="contained"
            style={{ marginTop: 20, height: 45 }}
            onPress={Modifier}
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
}
 
export default UpdateExam;