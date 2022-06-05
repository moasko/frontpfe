import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions ,Button,Alert} from "react-native";
import { FlatList } from "react-native";
import Footer from "./footer";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ListGroupee = ({navigation,route}) => {
  const [_id, set_id] = useState(route.params.id);
  const [groupe, setgroupe] = useState([]);

  const afficher = (token) => {
    fetch("http://192.168.43.1:5000/groupes", {
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
        setgroupe(response.data);
      });
  };
  useEffect(() => {
    afficher();
    console.log(_id)
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item._id}
        style={{ flex: 1 }}
        data={groupe}
        
        renderItem={({ item }) => {
          //console.log(_id);
          return (
            <View style={styles.rect}>
              <Text style={styles.loremIpsum}  onPress= {() => navigation.navigate('Groupes details',{id : item._id,_id},{item}) }>{item.nom}</Text>
              <Text style={styles.loremIpsum3}>{item.AnneCreation}</Text>
            </View>
          );
        }}
      />
      
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
  },
  rect: {
    width: windowWidth - 12,
    height: 115,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 23,
    marginLeft: 6,
  },
  loremIpsum: {
    color: "rgba(30,98,178,1)",
    fontSize: 25,
    marginTop: 19,
    marginLeft: 15,
    fontWeight:'bold'
  },
  loremIpsum3: {
    color: "#121212",
    fontSize: 20,
    marginTop: 23,
    marginLeft: 300,
  },
  btn:{
    right: 10,
    left: 10,
    position: 'absolute',
    bottom: 0,
  }
});


export default ListGroupee;
