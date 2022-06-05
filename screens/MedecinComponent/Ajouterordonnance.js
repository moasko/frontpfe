import React, {useState,useEffect} from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    SafeAreaView,
    ScrollView,
    Keyboard, KeyboardAvoidingView,
  } from "react-native";
import { Button, Colors, Snackbar, Subheading, TextInput } from 'react-native-paper';
  

const AjoutOrdonnance = ({route,navigation}) => {
    const [idcons, setidcon] = useState(route.params.idcons);
    const [idmed, setidMEd] = useState(route.params.idmed);
    const [ordonnances, setordonnances] = useState([]);
    const [chrirugiee, setchrirugiee] = useState("");
    const [traitements, settraitements] = useState("");
    const [anlyses, setanlyses] = useState("");
    const [radios, setradios] = useState("");
    const [vaccins, setvaccins] = useState("");
    const [pathologies, setpathologies] = useState("");
    const [idjou, setID] = useState(route.params.idjou);
    const [error, seterror] = useState('');
    const [visible, setvisible] = useState(false);

    const check = (txt) =>{
      if(!txt.trim()){
        seterror ('entrer une valeur ')
      } 
      else {
        setchrirugiee(txt)
      }
    }


  const EnregistrerOrdonnance = () => {
    const trimmedchrirugiee = chrirugiee.trim();
    const   trimmedtraitements = traitements.trim();
	 const  trimmedAnalyse = anlyses.trim();
	 const  trimmedradios = radios.trim();
	 const  trimmedvaccins = vaccins.trim();
	 const  trimmedpathologies = pathologies.trim();
	  
    if (!trimmedchrirugiee.length || !trimmedtraitements.length || !trimmedAnalyse.length || !trimmedradios.length || !trimmedvaccins.length || !trimmedpathologies.length ) {
      seterror('svp Remplissez tout le formulaire si  une n est pas demande juste entrez rien');
      setvisible(true)
     return;
    }
        fetch("http://192.168.43.1:5000/ordonnances", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
              traitement:traitements,
              Analyse : anlyses ,
              Pathologie:pathologies,
              Vaccin:vaccins,
              Consultation:idcons,
              
              chirurgie:chrirugiee,
              Radio:radios,  
          }),
        })
          .then((res) => {
            res.json()
            setvisible(false)
           
           
          })
          .then((data) => {
            // setIsError(true);
            // setMessage(data.message);
            //console.log(data)
            //alert("medecin est enregistre avec succes")
           navigation.navigate("liste des ordonnances",{idcons,idmed,idjou})
          })
          .catch((err) => {
            console.log("error", err);
            //setIsError(false);
            seterror('ssss')
            setvisible(true)
          });
      };
     
      
  useEffect(() => {
   EnregistrerOrdonnance();
 
  }, []);
    return ( 
        <View style={{margin: 10, flex: 1, justifyContent: 'space-between'}}>
             <ScrollView keyboardDismissMode='onDrag'>
             <TextInput style={{marginTop:15,fontSize:20,color:'blue',backgroundColor:'white'}} label="Traitement"  value={traitements}   onChangeText={settraitements}  mode="Flat"  />
             <TextInput style={{marginTop:15,fontSize:20,backgroundColor:'white'}} label="Radio" mode="Flat" value={radios} onChangeText={setradios}/>
             <TextInput style={{marginTop:15,fontSize:20,backgroundColor:'white'}} label="Analyse"  mode="Flat" value={anlyses} onChangeText={setanlyses} />
             <TextInput style={{marginTop:15,fontSize:20,backgroundColor:'white'}} label="Vaccin"  mode="Flat" value={vaccins} onChangeText={setvaccins} />
             <TextInput style={{marginTop:15,fontSize:20,backgroundColor:'white'}}  label="Pathologie"  mode="Flat" value={pathologies} onChangeText={setpathologies} />
             <TextInput style={{marginTop:15,fontSize:20,backgroundColor:'white'}} label="chirurgie"  mode="Flat"  value={chrirugiee} onChangeText={setchrirugiee}/>
             <Button  mode="contained" style={{marginTop: 20,height:45}} onPress={EnregistrerOrdonnance}>
            <Text style={{fontSize:20}}>Enregistrer</Text>
          </Button>
          <Button  mode="contained" style={{marginTop: 20,height:45}}>
            <Text style={{fontSize:20}}>annuler</Text>
          </Button>
        
        </ScrollView>
        <Snackbar visible={error.length > 0} onDismiss={() => seterror('')}>{error}</Snackbar>
        </View>
      
     );
}

export default AjoutOrdonnance;