import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, TouchableOpacity, Text,Button ,Dimensions,} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "../../header";
import Footer from "../../footer";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const AcceuilAd = (props) => {
  const Goto = () =>{
    props.navigation.push('Ajouter medecin');
  }
  const GotoMed =() => {
    props.navigation.push('liste des medecins')
  }
  const AjouGroupe = () =>{
    props.navigation.push('Ajouter un groupe')
  }
  const gotolistgrp = () =>{
    props.navigation.push('liste des groupes')
  }
  const AjouterJou = () =>{
    props.navigation.push('Ajouter un joueur')
  }
  const quitter = () =>{
    props.navigation.push('Acceuil')
  }
  
  

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}onPress={GotoMed} >
          <View style={styles.iconRow}>
            <MaterialIcons name="account-circle" style={styles.icon} />
            <View style={styles.medecinStack}>
              <Text style={styles.medecin}>Medecin</Text>
              <Text style={styles.loremIpsum}>1 nbre</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <View style={styles.icon2Stack}>
           
          <Icon name="account-supervisor-circle" style={styles.icon2}onPress={gotolistgrp}></Icon>
            <Text style={styles.groupes}>Groupes</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.button3Stack}>
        <View style={styles.button3}>
          <View style={styles.medecin5StackRow}>
            <View style={styles.medecin5Stack}>
              <Text style={styles.medecin5} onPress={Goto}>Medecin</Text>
              <FontAwesomeIcon
                name="arrow-circle-o-right"
                style={styles.icon5}
               
              ></FontAwesomeIcon>
            </View>
            <View style={styles.icon4Stack}>
            <IoniconsIcon name="ios-add-circle" style={styles.icon4} onPress={AjouterJou}></IoniconsIcon>
              <Text style={styles.groupe2}>Joueur</Text>
            </View>
          </View>
          <Text style={styles.quitter} onPress={quitter}>Quitter</Text>
        </View>
        <IoniconsIcon name="ios-add-circle" style={styles.icon3}></IoniconsIcon>
      </View>
      <View style={styles.materialIconButtonsFooter}>
      
      </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230,230,230,1)",
  },
  button: {
    width: 175,
    height: 93,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 9,
    flexDirection: "row",
  },
  icon: {
    color: "rgba(127,203,45,1)",
    fontSize: 51,
    height: 56,
    width: 51,
  },
  medecin: {
    top: 0,
    position: "absolute",
   // fontFamily: "roboto-700",
    color: "rgba(33,71,116,1)",
    height: 51,
    width: 104,
    fontSize: 24,
    left: 0,
  },
  loremIpsum: {
    top: 36,
    left: 10,
    position: "absolute",
    //fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    letterSpacing: 0,
    fontSize: 15,
  },
  medecinStack: {
    width: 104,
    height: 54,
    marginLeft: 7,
    marginTop: 11,
  },
  iconRow: {
    height: 65,
    flexDirection: "row",
    flex: 1,
    marginRight: 13,
    marginTop: 10,
  },
  button2: {
    width: 150,
    height: 139,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 13,
    marginLeft: 50,
  },
  icon2: {
    top: 0,
    left: 13,
    position: "absolute",
    color: "rgba(144,19,254,1)",
    fontSize: 68,
    height: 74,
    width: 68,
  },
  groupes: {
    top: 72,
    left: 4,
    position: "absolute",
   // fontFamily: "roboto-700",
    color: "rgba(32,70,114,1)",
    height: 34,
    width: 78,
    fontSize: 20,
  },
  icon2Stack: {
    width: 78,
    height: 106,
    marginTop: 3,
    marginLeft: 21,
  },
  buttonRow: {
    height: 139,
    flexDirection: "row",
    marginTop: 98,
    marginLeft: 19,
    marginRight: 23,
  },
  button3: {
    top: 1,
    left: 0,
    width: windowWidth-35,
    height: 196,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
  },
  medecin5: {
    left: 0,
    position: "absolute",
   // fontFamily: "roboto-regular",
   color: "rgba(126,211,33,1)",
    height: 34,
    width: 88,
    fontSize: 20,
    top: 0,
    fontWeight:'bold'
  },
  icon5: {
    position: "absolute",
    color: "rgba(208,2,27,1)",
    fontSize: 59,
    top: 33,
    height: 59,
    width: 51,
    left: 100,
  },
  medecin5Stack: {
    width: 129,
    height: 92,
    marginTop: 67,
  },
  icon4: {
    top: 0,
    left: 14,
    position: "absolute",
    color: "rgba(144,19,254,1)",
    fontSize: 58,
    height: 68,
    width: 50,
  },
  groupe2: {
    left: 15,
    position: "absolute",
  //  fontFamily: "roboto-regular",
    color: "rgba(144,19,254,1)",
    height: 34,
    width: 88,
    fontSize: 20,
    top: 63,
    fontWeight:'bold'
  },
  icon4Stack: {
    width: 88,
    height: 97,
    marginLeft: 33,
  },
  medecin5StackRow: {
    height: 159,
    flexDirection: "row",
    marginLeft: 58,
    marginRight: 11,
  },
  quitter: {
    color: "rgba(208,2,27,1)",
    height: 34,
    width: 88,
    fontSize: 20,
    marginTop: 1,
    marginLeft: 150,
    fontWeight:'bold',
  },
  icon3: {
    top: 0,
    left: 64,
    position: "absolute",
    color: "rgba(126,211,33,1)",
    fontSize: 62,
  },
  button3Stack: {
    width: 319,
    height: 197,
    marginTop: 15,
    marginLeft: 19,
  },
  materialIconButtonsFooter: {
    height: 70,
    width: 430,
    marginTop:143
  }
});

export default AcceuilAd;
