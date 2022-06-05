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

const ModifierGroupe = ({route,navigation}) => {
    const getDetails =(type) =>{
        if(route.params){
            switch(type){
                case "nom":
                    return route.params.nom
                case "AnneCreation":
                    return route.params.AnneCreation
               
               
            }
        }
        return ""
    }
    const [nom, setnom] = useState(getDetails("nom"));
    const [AnneCreation, setAnneCreation] = useState(getDetails("AnneCreation"));
    const [_id, set_id] = useState(route.params.id);
   const [error, seterror] = useState("");
    


    const Modifier = () =>{
        console.log(_id);
          fetch("http://192.168.43.1:5000/groupes/"+_id, 
          {
              method:'PUT',
              headers:{
                  'content-type' : 'application/json'
              },
              body : JSON.stringify({
                //id:id,
                  nom : nom,
                  AnneCreation:AnneCreation,
                  
               // id:route.params._id
              })
          }).then(res => res.json())
          .then(data => {
              console.log(data)
             alert("medecin est modifie avec succes");
             navigation.navigate('liste des groupes');
          }).catch(err =>{
              console.log("error",err)
          })
      }
     
      
      const reset = () => {
        setnom('');
        setAnneCreation("")
        navigation.navigate('liste des groupes');
  
      }
  return (
    <View style={{margin: 10, flex: 1, justifyContent: 'space-between'}}>
      <ScrollView keyboardDismissMode='onDrag'>
      <TextInput style={{marginTop:15,fontSize:20,color:'blue',backgroundColor:'white'}} label="Annee de creation" value={AnneCreation.toString()}
          onChangeText={setAnneCreation}  mode="Flat"  keyboardType="numeric" />
      <TextInput style={{marginTop:15,fontSize:20,backgroundColor:'white'}} label="Nom" mode="Flat"  value={nom}
          onChangeText={setnom} />
     
      <Button  mode="contained" style={{marginTop: 20,height:45}} onPress={Modifier}>
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


export default ModifierGroupe;
