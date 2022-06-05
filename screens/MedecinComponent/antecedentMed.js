import React, { useState, useEffect, memo } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  Button,
  ScrollView,
  TouchableOpacity,
  RefreshControl,ActivityIndicator,
 
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Caption } from "react-native-paper";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AntecedentMed = ({ route, navigation }) => {
  const [AntecedentMed, setAntecedentMed] = useState([]);
  const [id, setid] = useState(route.params.id);
  const [loading, setLoading] = useState(true);
  const [med, setmed] = useState(route.params._idMEd);
  const [Visible, setVisible] = useState(false);
  const [idant, setidant] = useState("");
  const [error, setError] = useState("");
  const [refreshPage, setRefreshPage] = useState(false);

  const getUser = () => {
    // console.log(_id);
    fetch("http://192.168.43.1:5000/joueurs/" + id)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.data.joueurs);
        setLoading(false);
        setAntecedentMed(json.data.examen);
        // console.log(json.data.examen);
        setRefreshPage(false);
      })
      .catch((e) => {
        console.error(e);
        setError("An error occurred, please try again later.");
        setLoading(false);
      });
  };
  const deleteMed = (idant) => {
    //console.log(token);
    fetch("http://192.168.43.1:5000/exams/" + idant, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        //  "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        //id:id,
        id: idant,
        // id:route.params._id
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        alert('Antécédent médical supprimé ')
        setRefreshPage(false);
        
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  useEffect(() => {
    //console.log(id);
    getUser();
  }, []);
  return (
    <View style={styles.container}>
      {!loading && !AntecedentMed.length && (
        <Caption style={{ textAlign: "center", marginTop: 20, fontSize: 20 }}>
          Pas d'antecedetns medicaux pour ce joueur
        </Caption>
      )}
      <FlatList
        keyExtractor={(item) => item._id}
        data={AntecedentMed}
        renderItem={({ item }) => {
          console.log("-----------------------");
          console.log(item.medecin);
          return (
            <View style={styles.rect1}>
              <View style={styles.loremIpsum1Row}>
                <Text style={styles.loremIpsum1}>{item.createdAt}</Text>
                <TouchableOpacity></TouchableOpacity>
              </View>

              <Text style={styles.examen1}>
                <Text style={{ fontWeight: "bold" }}> Glycemie : </Text>{" "}
                {item.Glycemie}
              </Text>
              <Text style={styles.examen1}>
                <Text style={{ fontWeight: "bold" }}>Poids : </Text>{" "}
                {item.Poids} kg
              </Text>
              <Text style={styles.examen1}>
                <Text style={{ fontWeight: "bold" }}> Taille : </Text>{" "}
                {item.taille} cm
              </Text>
              <Text style={styles.examen1}>
                <Text style={{ fontWeight: "bold" }}>Tempreture : </Text>{" "}
                {item.tempreture} °C
              </Text>
              <Text style={styles.examen1}>
                <Text style={{ fontWeight: "bold" }}>
                  Tension Arterielle :{" "}
                </Text>
                {item.tensionArterielle}
              </Text>
              <Text style={styles.examen1}>
                <Text style={{ fontWeight: "bold" }}>
                  Saturation oxygene :{" "}
                </Text>
                {item.saturationOxygene}
              </Text>
              <View style={styles.resume1Row}>
                <Text style={styles.resume1}></Text>
                {!Visible && item.medecin == med && (
                  <EntypoIcon
                    name="trash"
                    style={styles.icon1}
                    onPress={() => deleteMed(item._id)}
                  ></EntypoIcon>
                )}
                {!Visible && item.medecin == med && (
                  <FeatherIcon
                    name="edit"
                    style={styles.icon2}
                    onPress={() =>
                      navigation.navigate("Modifier Antecedent medicaux", {
                        idCon: item.Consultation,
                        idMEd: item.medecin,
                        idjou: item.Joueurs,
                        glyc: item.Glycemie,
                        satOx: item.saturationOxygene,
                        tsart: item.tensionArterielle,
                        tai: item.taille,
                        poids: item.Poids,
                        temp: item.tempreture,
                        idantt: item._id,
                      })
                    }
                  ></FeatherIcon>
                )}
              </View>
            </View>
          );
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshPage}
            onRefresh={getUser}
          />
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
  },
  rect1: {
    width: windowWidth - 25,
    height: 300,
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
    color: "#121212",
    fontSize: 20,
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
    fontSize: 17,
    marginTop: 3,
    marginLeft: 19,
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
});

export default memo(AntecedentMed);
