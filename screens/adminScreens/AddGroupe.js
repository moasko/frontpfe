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
  Alert
  
} from "react-native";
import {
  Button,
  Colors,
  Snackbar,
  Subheading,
  TextInput,
} from "react-native-paper";


const AddGroupe = () => {
    const [nom, setNom] = useState("");
    const [AnneCreation, setAnneCreation] = useState(0);
    const [isError, setIsError] = useState(true);
    const [message, setMessage] = useState('');
   const [error, seterror] = useState("");
    const getMessage = () => {
        const status = !isError ? `Error: `: `Success: ` ;
        return status + message;
    }

    
    const Signup = () => {
      /*const TrimedAnn = AnneCreation;
      if(isNaN(TrimedAnn)){
        Alert('is not a number')
        return;
      }*/
        fetch("http://192.168.43.1:5000/groupes", 
        {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify({
               nom : nom,
                AnneCreation:AnneCreation,
              
            })
        }).then(res => res.json()
    
        )
        .then(data => {
        
          setMessage(data.message);
            console.log(data)
           setIsError(false);
           console.log(isError);
           //alert("medecin est enregistre avec succes")
          
        }).catch(err =>{
            console.log("error",err)
            setIsError(true);
            console.log(isError);
        })
    }
    const reset = () => {
        setNom('');
       setAnneCreation(0);

    }

  return (

    <View style={{margin: 10, flex: 1, justifyContent: 'space-between'}}>
    <ScrollView keyboardDismissMode='onDrag'>
    <TextInput style={{marginTop:15,fontSize:20,color:'blue',backgroundColor:'white'}} label="Annee de creation" value={AnneCreation.toString()}
        onChangeText={setAnneCreation}  mode="Flat" numeric keyboardType="numeric"  maxLength={4} />
    <TextInput style={{marginTop:15,fontSize:20,backgroundColor:'white'}} label="Nom" mode="Flat" value={nom}
          onChangeText={setNom} />
   
    <Button  mode="contained" style={{marginTop: 20,height:45}} onPress={Signup}>
   <Text style={{fontSize:20}}>Enregistrer</Text>
 </Button>
 <Button  mode="contained" style={{marginTop: 20,height:45}} onPress={reset}>
   <Text style={{fontSize:20}}>annuler</Text>
 </Button>

</ScrollView>
<Snackbar visible={error.length > 0} onDismiss={() => seterror('')}>{error}</Snackbar>
</View>
  );
};



export default AddGroupe;
