import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";


const Header = ({route}) => {

  const AfficherjouById = (_id) =>{
    //console.log(token);
      fetch("http://192.168.1.166:5000/joueurs/"+_id, 
      {
          method:'GET',
          headers:{
              'content-type' : 'application/json',
            //  "Authorization": `Bearer ${token}`,
          },
          
      }).then(res => res.json())
      .then(data => {
          console.log(data)
         setRefreshPage(true);

      }).catch(err =>{
          console.log("error",err)
      })
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Ionicons name="ios-menu" size={32} />
      </TouchableOpacity>
      <Text style={{fontSize:20,fontWeight:'bold'}}>profil</Text>
      <Text style={{ width: 50 }}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default Header;
