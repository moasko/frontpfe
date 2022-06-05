import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity ,FlatList,Dimensions} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const ConsultationMedCon = ({ route, navigation }) => {
    const [id, setid] = useState(route.params.id);
  const [Consultations, setConsultations] = useState([]);
  const [medecin, setmedecin] = useState([]);
    const getUser = () => {
        // console.log(_id);
        fetch("http://192.168.1.166:5000/consultations")
          .then((response) => response.json())
          .then((json) => {
            // console.log(json.data.joueurs);
            setConsultations(json.data);
           // console.log(json.data);
          })
          .catch((error) => console.error(error));
      };
      const getMed = () => {
        // console.log(_id);
        fetch("http://192.168.1.166:5000/medecins" +id)
          .then((response) => response.json())
          .then((json) => {
            // console.log(json.data.joueurs);
            setmedecin(json.data);
           // console.log(json.data);
          })
          .catch((error) => console.error(error));
      };
      
      
  useEffect(() => {
   console.log(id);
    getUser();
   // getMed();
  }, []);
    return ( 
        <View style={styles.container}>
       
            <FlatList
             keyExtractor={(item) => item._id}
             data={Consultations}
             renderItem={({ item }) => {
              
                return (
                    <View style={styles.rect1}>
                    <View style={styles.loremIpsum1Row}>
                    <Text style={styles.loremIpsum1}>{item.createdAt}</Text>
                    <TouchableOpacity style={styles.button1}>
                      <Text style={styles.voir1}>Voir</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.ordonnance1}>Ordonnance  :</Text>
                  <Text style={styles.examen1}>Examen :</Text>
                  <View style={styles.resume1Row}>
                    <Text style={styles.resume1}>Resume :</Text>
                    <EntypoIcon name="trash" style={styles.icon1}></EntypoIcon>
                    <FeatherIcon name="edit" style={styles.icon2}></FeatherIcon>
                  </View>
                </View>
                   )
              }}/>
         
      </View>
     );
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    rect1: {
      width: windowWidth -25,
      height: 143,
      backgroundColor: "rgba(255,255,255,1)",
      shadowColor: "rgba(155,155,155,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 5,
      shadowOpacity: 1,
      shadowRadius: 0,
      borderRadius: 4,
      marginTop: 12,
      alignSelf: "center"
    },
    loremIpsum1: {
      color: "#121212",
      fontSize: 20
    },
    button1: {
      width: 70,
      height: 24,
      backgroundColor: "rgba(74,144,226,1)",
      marginLeft: 145,
      marginTop: 12
    },
    voir1: {
      color: "rgba(255,255,255,1)",
      fontSize: 17,
      marginTop: 3,
      marginLeft: 19
    },
    loremIpsum1Row: {
      height: 36,
      flexDirection: "row",
      marginTop: 6,
      marginLeft: 11,
      marginRight: 7
    },
    ordonnance1: {
      color: "#121212",
      fontSize: 17,
      marginTop: 1,
      marginLeft: 11
    },
    examen1: {
      color: "#121212",
      fontSize: 17,
      marginTop: 9,
      marginLeft: 11
    },
    resume1: {
      color: "#121212",
      fontSize: 17,
      marginTop: 10
    },
    icon1: {
      color: "rgba(208,2,27,1)",
      fontSize: 40,
      height: 43,
      width: 40,
      marginLeft: 136
    },
    icon2: {
      color: "rgba(74,144,226,1)",
      fontSize: 40,
      height: 40,
      width: 40,
      marginLeft: 9
    },
    resume1Row: {
      height: 43,
      flexDirection: "row",
      marginLeft: 11,
      marginRight: 28
    }
  });
export default ConsultationMedCon;