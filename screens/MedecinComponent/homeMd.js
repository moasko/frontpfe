import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MED from "./MEd";
import ListGroupe from "./ListOfGroupe";
import ProfileMEd from "./ProfilMEd";
const Tab = createBottomTabNavigator();
const NavigationMEd = ({route,props}) => {
  return (
    <Tab.Navigator style={{ paddingTop: 20 }}>
      <Tab.Screen name="medecin" component={MED} />
      <Tab.Screen name="Groupe" component={ListGroupe} />
      <Tab.Screen name="Profile Medecinn " component={ProfileMEd} />
    </Tab.Navigator>
  );
};

export default NavigationMEd;
