import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Alert,
  ScrollView,
} from "react-native";
import { Card } from "react-native-paper";

const Details = ({ route, props }) => {
  const getDetails = (type) => {
    if (route.params) {
      switch (type) {
        case "nom":
          return route.params.nom;
        case "AnneCreation":
          return route.params.AnneCreation;
      }
    }
    return "";
  };
  // console.log(props.navigation.nom);
  const [nom, setnom] = useState("");
  const [AnneCreation, setanneCreation] = useState(getDetails("AnneCreation"));
  const [id, set_id] = useState(route.params.id);
  const [groupe, setgroupe] = useState([]);
  const [joueurs, setjoueurs] = useState([]);
  const [Nomjou, setNomjou] = useState("");
  const [NomjouD, setNomjouD] = useState("");
  const [emailjou, setemailjou] = useState("");
  const [emailjouD, setemailjouD] = useState("");
  const [motDepassJou, setmotDepassJou] = useState("");
  const [motdepassD, setmotdepassD] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [idjou, setidjou] = useState(null);

  const getUser = () => {
    // console.log(_id);
    fetch("http://192.168.1.166:5000/groupes/" + id)
      .then((response) => response.json())
      .then((json) => {
        setgroupe(json);
        // console.log(json.data.joueurs);
        setnom(json.data.nom);
        setanneCreation(json.data.AnneCreation);
        //setidjou(json.data.joueurs.id)

        setjoueurs(json.data.joueurs);
        console.log(json.data);
      })
      .catch((error) => console.error(error));
  };

  const getJou = () => {
    // console.log(_id);
    fetch("http://192.168.1.166:5000/joueurs/")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setNomjouD(nom);
        setidjou(json._id);
        console.log(id);
        setemailjou(json.email);
        setmotdepassD(json.motDepass);
        console.log(json.email);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    //afficherGrp();
    getUser();
    //console.log(nom);
    getJou();
  }, []);

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            alignItems: "center",
            justifyContent: "center",
            fontSize: 25,
            color: "blue",
            fontWeight: "bold",
          }}
        >
          Nom:
          {nom}
        </Text>
        <Text
          style={{
            alignItems: "center",
            justifyContent: "center",
            fontSize: 25,
            color: "blue",
            fontWeight: "bold",
          }}
        >
          Annee de creation : {AnneCreation}{" "}
        </Text>

        <SafeAreaView style={styles.container}>
          <FlatList
            keyExtractor={(item) => item._id}
            style={{ width: 300, height: 1000 }}
            data={joueurs}
            renderItem={({ item }) => {
              return (
                <View style={styles.listItem}>
                  <View style={{ alignItems: "center", flex: 1 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      {" "}
                      Nom : {item.nom}
                    </Text>
                    <Text style={{ fontSize: 20 }}> Email : {item.email}</Text>
                  </View>
                </View>
              );
            }}
          />
        </SafeAreaView>
      </View>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F7F7F7',
    marginTop: 30,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "90%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Details;
