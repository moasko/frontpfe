import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { Caption} from "react-native-paper";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const DetailsG = ({ route, navigation }) => {
  const [id, setid] = useState(route.params.id);
  const [nom, setnom] = useState("");
  const [email, setemail] = useState("");
  const [prenom, setprenom] = useState("");
  const [joueurs, setjoueurs] = useState([]);
  const [loading, setLoading] = useState(true);
 const [_idMEd, set_idMEd] = useState(route.params._id);

  const getUser = () => {
    // console.log(_id);
    fetch("http://192.168.43.1:5000/groupes/" + id)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.data.joueurs);

        setjoueurs(json.data.joueurs);
        setLoading(false)
        //console.log(json.data);
      })
      .catch((error) =>{ console.error(error);
        setLoading(false);})
      
  };
  
 
  useEffect(() => {
    getUser();
    setLoading(true)
    console.log(loading);
  // console.log(route.params._id);
  }, []);
  return (
    <View style={styles.container}>
     {!loading && !joueurs.length && (
    <Caption style={{ textAlign: "center", marginTop: 13,fontWeight:'bold',fontSize:17,marginLeft:10 }}>
     Pas de joueur dans ce groupe 😇😇😇
    </Caption>
  )}
      <FlatList
        keyExtractor={(item) => item._id}
        style={{ flex: 1 }}
        data={joueurs}
        renderItem={({ item }) => {
         // console.log(item._id);
          return (
            <View style={styles.buttonFiller}>
            <View style={styles.rect1}>
           
              <View style={styles.loremIpsum5Row}>
              <Text style={styles.loremIpsum5}>{item.nom}</Text>
                
              </View>
              <View style={styles.loremIpsum8Row}>
                <Text style={styles.loremIpsum8}>{item.email}</Text>
                <TouchableOpacity style={styles.button2} onPress= {() => navigation.navigate('Antecedents medicaux',{id : item._id,_idMEd}) }>
                  <Text style={styles.antecedentsMedicaux}>
                    antecedents medicaux
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.button3} onPress= {() => navigation.navigate('Consultation',{id : item._id,_idMEd}) }>
                <Text style={styles.informationDeBase}>Liste des consultations</Text>
              </TouchableOpacity>
            </View>
          </View>
          );
        }}
      />
    
      <ActivityIndicator/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,1)",
  },
  button: {
    width: 157,
    height: 64,
    backgroundColor: "#E6E6E6",
    marginLeft: 500,
    marginTop: 79
  },
  rect1: {
    width:windowWidth -20,
    height: 175,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowColor: "rgba(74,74,74,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 13
  },
  loremIpsum5: {
    color: "rgba(19,105,206,1)",
    fontSize: 30,
    fontWeight:'bold'
  },
  button1: {
    width: 157,
    height: 37,
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 9,
    marginLeft: 69
  },
  loremIpsum: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginTop: 6,
    marginLeft: 5,
    fontWeight:'bold'
  },
  loremIpsum5Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 11,
    marginRight: 20
  },
  loremIpsum8: {
    color: "#121212",
    fontSize: 12,
    marginTop: 12,
    fontWeight:'bold'
  },
  button2: {
    width: 157,
    height: 37,
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 9,
    marginLeft:55
  },
  antecedentsMedicaux: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginTop: 10,
    marginLeft: 3,
    fontWeight:'bold'
  },
  loremIpsum8Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 21,
    marginRight: 20
  },
  button3: {
    width: 157,
    height: 37,
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 9,
    marginTop: 6,
    marginLeft: 189
  },
  informationDeBase: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginTop: 9,
    marginLeft: 6,
   fontWeight:'bold'
  },
  buttonFiller: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  }
});

export default DetailsG;
