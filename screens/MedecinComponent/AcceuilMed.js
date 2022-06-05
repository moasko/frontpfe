import React,{useState} from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text,Dimensions,Button } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MED from "./MEd";
import ListGroupe from "./ListOfGroupe";
import ProfileMEd from "./ProfilMEd";
const Tab = createBottomTabNavigator();
const AcceuilMed = ({navigation,route}) => {
    
     console.log(route.params.id);
    
    var imgr = 'data:image/jpeg;base64,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'
    const Width =Dimensions.get('window').height
    const toprofil = () =>{
        props.navigation.push('profile Medecin')
    }
    return (
    <View style={styles.container}>
      <View style={styles.materialIconTextButtonsFooter}>
       
      </View>

      
  
    
   
  </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  materialIconTextButtonsFooter: {
    height: 56,
    width: 375,
    marginTop: 670,
    alignSelf: "center",
  },
  button: {
    width: Dimensions.get('window').height,
    height: 70,
    backgroundColor: "rgba(74,144,226,1)",
    flexDirection: "row",
    marginTop: -708,
  },
  image: {
    width: 57,
    height: 68,
    borderRadius: 100,
  },
  medecin: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 89,
    marginTop: 22,
  },
  imageRow: {
    height: 68,
    flexDirection: "row",
    flex: 1,
    marginRight: 127,
    marginLeft: 11,
    marginTop: 2,
  },
  container1: {
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
  icon1: {
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
    maxWidth: Dimensions.get('window').height,
    alignItems: "center"
  },
  icon2: {
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
export default AcceuilMed;
