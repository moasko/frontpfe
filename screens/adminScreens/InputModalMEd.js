import React,{useState} from 'react';
import { View, TextInput, StyleSheet, Pressable, Text,Modal} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


const InputModal = ({setModalvisible,Modalvisible}) => {
    const [nom, setnom] = useState('');
    //const [prenom, setprenom] = useState('');
    const [specialite, setspecialite] = useState('');
    const [email, setemail] = useState('');
    const [motDepass, setmotDepass] = useState('');
    const handleCloseModal = () =>{
        setModalvisible(false)
    }
    const Modifier = () =>{
        fetch("http://192.168.43.1:5000/medecins/:id", 
        {
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify({
                nom : nom,
                specialite:specialite,
                email : email,
                motDepass : motDepass,
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data)
           alert("medecin est modifie avec succes")
        }).catch(err =>{
            console.log("error",err)
        })
    }
   
    
    const reset = () => {
        setemail('');
        setmotDepass('');
        setnom('');
        setprenom('');
        setspecialite('');

    }
   
    return ( 
        <Modal
        animationType='slide'
        transparent={true}
        visible={Modalvisible}
        onRequestClose={handleCloseModal}>
        <SafeAreaView style={styles.root}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nom et prenom"
            style={styles.input}
            value={nom}
            onChangeText={setnom}
          />
        </View>
  
        
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Specialite"
            style={styles.input}
            onChangeText={setspecialite}
            value={specialite}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={setemail}
            value={email}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Mot de passe"
            style={styles.input}
            onChangeText={setmotDepass}
            value={motDepass}
          />
        </View>
        <Pressable style={styles.button} onPress={Modifier}>
          <Text>Enregistrer</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={reset}>
          <Text>Annuler</Text>
        </Pressable>
      </SafeAreaView>
      </Modal>
     );
}
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
        marginVertical: '5%',
    },
  });
 
export default InputModal;