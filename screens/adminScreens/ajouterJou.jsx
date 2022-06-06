import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  Alert,
  TouchableOpacity,
  Modal,
  Dimensions,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectDropdown from "react-native-select-dropdown";
import { Dropdown } from "react-native-element-dropdown";
import Picker from "react-native";


const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const AjouterJou = () => {
  const baseUrl = "https://nodeback.onrender.com"
  const [nom, setnom] = useState("");
  const [email, setemail] = useState("");
  const [motDepass, setmotDepass] = useState("");
  const [groupes, setgroupes] = useState([]);
  const [prenom, setprenom] = useState("");
  const [groupe, setgroupe] = useState("");
  const [isLoading,setIsloading]=useState(false);

  const Signup = () => {
  
    fetch(`${baseUrl}/joueurs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nom: nom,
        email: email,
        motDepass: motDepass,
        groupe: groupe,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // setMessage(data.message);
        console.log(data);
        //setIsError(false);
        // console.log(isError);
        //alert("medecin est enregistre avec succes")
      })
      .catch((err) => {
        console.log("error", err);
        //setIsError(true);
        // console.log(isError);
      });
  };
  const reset = () => {
    setnom("");
    setemail("");
  };
  const afficher = (token) => {
    fetch(`${baseUrl}/groupes`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setgroupes(response.data);
      });
  };
  useEffect(() => {
    afficher();
  }, []);

  /* const changeModalVisiblity = (bool) => {
    setisModalVisible(bool);
  };*/
  // console.log(isModalVisible);
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nom "
          style={styles.input}
          placeholderTextColor="#666666"
          value={nom}
          onChangeText={setnom}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="email "
          style={styles.input}
          placeholderTextColor="#666666"
          value={email}
          onChangeText={setemail}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="mot de passe"
          style={styles.input}
          placeholderTextColor="#666666"
          onChangeText={setmotDepass}
          value={motDepass}
        />
      </View>
      <SelectDropdown
         style={styles.input}
        value={groupe}
        data={groupes}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          setgroupe(selectedItem);
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem.nom;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item.nom;
        }}
      />

      <Pressable style={styles.button} onPress={Signup}>
        <Text>Enregistrer</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={reset}>
        <Text>Annuler</Text>
      </Pressable>
    </SafeAreaView>
  );
};

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
    marginVertical: "5%",
  },
  text: {
    marginVertical: 20,
    fontSize: 20,
  },
  tchop: {
    backgroundColor: "white",
    alignSelf: "stretch",
    paddingHorizontal: 20,
  },
  container: {
    // flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewStyle: {
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    width: "92%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemStyle: {
    fontSize: 10,
    //fontFamily: "Roboto-Regular",
    color: "#007aff",
  },
  pickerStyle: {
    width: "100%",
    height: 40,
    color: "#007aff",
    fontSize: 14,
    // fontFamily: "Roboto-Regular"
  },
  textStyle: {
    fontSize: 14,
    // fontFamily: "Roboto-Regular"
  },
});

export default AjouterJou;
