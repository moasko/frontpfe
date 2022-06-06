import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Text, FlatList, Dimensions, Button, TouchableOpacity,Alert, RefreshControl, ScrollView, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";

import { getMedeciensListe,deleteMedecien } from "../../utiles/backend/medeciens";

const windowWidth = Dimensions.get("window").width;

const ListMed = ({ navigation }) => {
  const [medecinsList, setMedecinsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshPage, setRefreshPage] = useState(false);




  const fetchData = useCallback(() => {
    setIsLoading(true);
    getMedeciensListe().then(data => {
      setMedecinsList(data);
      setIsLoading(false);
    })
      .catch(err => {
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [])

 const confirmDelete = (id) => {
    Alert.alert(
      "Confirmation",
      "Voulez-vous vraiment supprimer ce medecin ?",
      [
        {
          text: "Annuler",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () =>{
          deleteMedecien(id)
          .then(data => {
            onRefresh();
          })
        }}
      ],
      { cancelable: false }
    );
  }

  const onRefresh = useCallback(() => {
    setIsLoading(true);
    setRefreshPage(true);
    getMedeciensListe().then(data => {
      setMedecinsList(data);
      setIsLoading(false);
      setRefreshPage(false);
    })
      .catch(err => {
        setIsLoading(false);
        setRefreshPage(false);
      })
      .finally(() => {
        setIsLoading(false);
        setRefreshPage(false);
      })
  }, [])

useEffect(() => {
  let screenFocused = navigation.addListener("focus", () => {
    fetchData();
  });
  return screenFocused;
}, [navigation]);


useEffect(() => {
  fetchData();
   }, [])


  const renderItem = ({ item }) => {
    return (
      <View style={styles.rect1}>
        <View style={styles.loremIpsum1Row}>
          <Text style={styles.loremIpsum1}><Text style={{ fontWeight: 'bold' }}>Nom : </Text>{item.nom}</Text>
        </View>
        <Text style={styles.ordonnance1}><Text style={{ fontWeight: 'bold' }}>Prenom  : </Text> {item.prenom}</Text>
        <Text style={styles.examen1}><Text style={{ fontWeight: 'bold' }}>Email : </Text>{item.email}</Text>
        <Text style={styles.examen1}><Text style={{ fontWeight: 'bold' }}>Specialite  : </Text> {item.specialite}</Text>
        <View style={styles.resume1Row}>
          <EntypoIcon name="trash" style={styles.icon1} onPress={() => confirmDelete(item._id)}></EntypoIcon>
          <FeatherIcon name="edit" style={styles.icon2} onPress={() =>
            navigation.navigate("Modifier un medecin", {
              id: item._id,
              nom: item.nom,
              email: item.email,
              specialite: item.specialite,
              prenom: item.prenom
            })
          }></FeatherIcon>
        </View>
      </View>)
  }



  return (

    <View style={styles.container}>
      {refreshPage ? <ActivityIndicator /> : null}

      {
        isLoading ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size={"large"} color="blue" />
        </View> :
          <FlatList
            keyExtractor={(item) => item._id}
            data={medecinsList}
            renderItem={renderItem}
            refreshControl={
              <RefreshControl
                refreshing={refreshPage}
                onRefresh={onRefresh}
              />
            } />
      }
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
    height: 200,
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
    marginTop: 20,
    alignSelf: "center"
  },
  loremIpsum1: {
    color: "#121212",
    fontSize: 20,
    // marginLeft:20
  },
  button1: {
    width: 70,
    height: 24,
    backgroundColor: "rgba(74,144,226,1)",
    marginLeft: 30,
    // marginTop: 12
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
    fontSize: 20,
    height: 24,
    width: 24,
    marginLeft: 136
  },
  icon2: {
    color: "rgba(74,144,226,1)",
    fontSize: 20,
    height: 20,
    width: 20,
    marginLeft: 9
  },
  resume1Row: {
    height: 43,
    flexDirection: "row",
    marginLeft: 11,
    marginRight: 28,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  icon: {
    color: "rgba(74,144,226,1)",
    fontSize: 65,
    marginTop: 5,
    marginLeft: 330,
  },
  btn: {
    right: 10,
    left: 10,
    position: "absolute",
    bottom: 0,
    width: windowWidth,
    marginTop: 20,
  },
  cont: {
    //backgroundColor: "#FFF",
    flexDirection: "row",
    shadowColor: "#111",
    width: windowWidth,
  },
  buttonWrapper1: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
  },
  ic1: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8,

  },
  btn1Text: {
    fontSize: 12,
    color: "#9E9E9E",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "#3f51b5",
    fontSize: 24,
    opacity: 0.8,
  },
  activeContent: {
    fontSize: 14,
    color: "#3f51b5",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
  buttonWrapper2: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
  },
  ic2: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8,
    marginLeft: 300,
  },
  btn2Text: {
    fontSize: 12,
    color: "#9E9E9E",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
});
export default ListMed;
