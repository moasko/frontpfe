
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignAd from "./screens/adminScreens/signad";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginMEd from "./screens/MedecinComponent/signmed";
import LOginJou from "./screens/joueurComponent/signj";
const {Navigator,Screen} =  createNativeStackNavigator();


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
     <Tab.Navigator>
      <Tab.Screen name="Espace admin" component = {SignAd} />
      <Tab.Screen name='Espace joueur' component={LOginJou}/>
      <Tab.Screen name='Espace medecin' component={LoginMEd}/>
    </Tab.Navigator>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;