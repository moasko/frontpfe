import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text,Dimensions } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
function Footer(props) {
    const togo =() =>{
        props.navigation.push("profilAcceuil")
    }
   return (
    <View style={styles.cont}>
      <TouchableOpacity style={styles.buttonWrapper1}>
        <MaterialCommunityIconsIcon
          name="calendar"
          style={styles.ic1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn1Text}>Consultation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activeButtonWrapper}
      onPress={togo}
      >
       
        <FontAwesomeIcon name="user-o" style={styles.activeIcon}></FontAwesomeIcon>
        <Text style={styles.activeContent}>Profil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper2}>
         <FeatherIcon name="users" style={styles.ic2}></FeatherIcon>
        <Text style={styles.btn2Text}>Groupe</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  buttonWrapper1: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  ic1: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8
  },
  btn1Text: {
    fontSize: 12,
    color: "#9E9E9E",
    backgroundColor: "transparent",
    paddingTop: 4
  },
  activeButtonWrapper: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "#3f51b5",
    fontSize: 24,
    opacity: 0.8
  },
  activeContent: {
    fontSize: 14,
    color: "#3f51b5",
    backgroundColor: "transparent",
    paddingTop: 4
  },
  buttonWrapper2: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  ic2: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8
  },
  btn2Text: {
    fontSize: 12,
    color: "#9E9E9E",
    backgroundColor: "transparent",
    paddingTop: 4
  }
});

export default Footer;
