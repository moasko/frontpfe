import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Caption} from "react-native-paper";
import Modal from "react-native-modal";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;



const ConsultationJoueur = ({navigation,route}) => {
    const [id, setid] = useState(route.params.id);
    const [loading, setLoading] = useState(true);
    const [Consulta, setConsultations] = useState([]);
    const [Error, setError] = useState("");
    const getUser = () => {
        // console.log(_id);
        fetch("http://192.168.43.1:5000/joueurs/" + id)
          .then((response) => response.json())
          .then((json) => {
            setLoading(false);
            // console.log(json.data.joueurs);
            setConsultations(json.data.consultation);
            // console.log(json.data.consultation);
          })
          .catch((e) => {
            console.error(e);
            setError("An error occurred, please try again later.");
            setLoading(false);
          });
      };
      useEffect(() => {
        getUser();
        // check();
      }, []);
    return ( 
        <View style={styles.container}>
        {!loading && !Consulta.length && (
          <Caption style={{ textAlign: "center", marginTop: 10 }}>
           vous n'avez aucune consultation 😇😇😇
          </Caption>
        )}
        <FlatList
          keyExtractor={(item) => item._id}
          data={Consulta}
          renderItem={({ item }) => {
            console.log(item._id);
  
            return (
              <View style={styles.rect1}>
                <View style={styles.loremIpsum1Row}>
                  <Text style={styles.loremIpsum1}>{item.createdAt}</Text>
                  <TouchableOpacity
                    style={styles.button1}
                    onPress={() =>
                      navigation.navigate("votre liste d ordonnance", {
                        idCons :item._id,
                      
                      })
                    }
                  >
                    <Text style={styles.voir1}>Ordonnance</Text>
                  </TouchableOpacity>
                  
                </View>
                <Text style={styles.ordonnance1}>
                  <Text style={{ fontWeight: "bold" }}>Medecin : </Text>
                  {item.medecin.nom}
                </Text>
                <Text style={styles.examen1}></Text>
               
              </View>
            );
          }}
        />
  
       
      </View>
     );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(255,255,255,1)",
    },
    rect1: {
      width: windowWidth - 25,
      height: 143,
      backgroundColor: "rgba(255,255,255,1)",
      shadowColor: "rgba(155,155,155,1)",
      shadowOffset: {
        width: 3,
        height: 3,
      },
      elevation: 5,
      shadowOpacity: 1,
      shadowRadius: 0,
      borderRadius: 4,
      marginTop: 12,
      alignSelf: "center",
    },
    loremIpsum1: {
      color: "red",
      fontSize: 20,
      fontWeight:'bold'
    },
    button1: {
      width: 70,
      height: 24,
      backgroundColor: "rgba(74,144,226,1)",
      marginLeft: 30,
      marginTop: 12,
    },
    voir1: {
      color: "rgba(255,255,255,1)",
      fontSize:12,
      marginTop: 1,
      fontWeight:'bold'
     // marginLeft: 10,
    },
    loremIpsum1Row: {
      height: 36,
      flexDirection: "row",
      marginTop: 6,
      marginLeft: 11,
      marginRight: 7,
    },
    ordonnance1: {
      color: "#121212",
      fontSize: 17,
      marginTop: 1,
      marginLeft: 11,
    },
    examen1: {
      color: "#121212",
      fontSize: 17,
      marginTop: 9,
      marginLeft: 11,
    },
    resume1: {
      color: "#121212",
      fontSize: 17,
      marginTop: 10,
      marginLeft: 50,
    },
    icon1: {
      color: "rgba(208,2,27,1)",
      fontSize: 40,
      height: 43,
      width: 40,
      marginLeft: 136,
    },
    icon2: {
      color: "rgba(74,144,226,1)",
      fontSize: 40,
      height: 40,
      width: 40,
      marginLeft: 9,
    },
    resume1Row: {
      height: 43,
      flexDirection: "row",
      marginLeft: 11,
      marginRight: 28,
    },
    icon: {
      color: "rgba(74,144,226,1)",
      fontSize: 65,
      marginTop: 5,
      marginLeft: 330,
    },
    modal: {
      margin: 0,
      backgroundColor: "white",
      height: 100,
      flex: 0,
      bottom: 0,
      position: "absolute",
      width: "100%",
    },
  });
export default ConsultationJoueur;