import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Dimensions,
  FlatList,
  RefreshControl,ActivityIndicator,
  ScrollView
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Ionicons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MedecinProfile = ({  route , navigation }) => {
  const [medecin, setMedecin] = useState([]);
  const [id, setid] = useState(route.params.id);
  const [nom, setnom] = useState("");
  const [email, setemail] = useState("");
  const [prenom, setprenom] = useState("");
  const [motDepass, setmotDepass] = useState("");
  const [specialite, setspecialite] = useState("");
  const [image, setimage] = useState(undefined);
  const [refreshPage, setRefreshPage] = useState(false);
  const getUser = () => {
    // console.log(_id);
    fetch("http://192.168.43.1:5000/medecins/" + id)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.data.joueurs);

        setMedecin(json.data);
        setnom(json.data.nom);
        setemail(json.data.email);
        setmotDepass(json.data.motDepass);
        setspecialite(json.data.specialite);
        setmotDepass(json.data.motDepass),
        setprenom(json.data.prenom);
        setimage(json.data.avatar)
        console.log(json.data)
        setRefreshPage(false);

        //setLoading(false)
        console.log(json.data.avatar);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getUser();
   // console.log(id);
  }, []);
  const togo = () => {
    props.navigation.push("profilAcceuil");
  };
  const togrp = () => {
    props.navigation.push("Groupes");
  };
  return (
    <View style={styles.container}
    
    >
    
       
       <Icon name="ios-log-out" style={styles.iconout} onPress={()=>navigation.navigate('Acceuil')}></Icon>
       <Text style={styles.quitter}>quitter</Text>
      <View style={styles.imageRow}>
        <View style={{ justifyContent: "flex-start" }}>
          <Image
           source={{uri: image !=="" ? image : undefined }} 
            style={{
              width: 60,
              height: 60,
              borderRadius: 10,
            }}
          ></Image>
        </View>
       
        <Text style={styles.profile}>Profile</Text>
      </View>
      <View style={styles.rect}
       refreshControl={
        <RefreshControl
          refreshing={refreshPage}
          onRefresh={getUser}
        />
      }>
        <Text style={styles.nom3}>Nom : {nom}</Text>
        <Text style={styles.prenom2}>Prenom : {prenom}</Text>
        <Text style={styles.email}>Email : {email}</Text>
        <Text style={styles.specialite}>Specialité :{specialite}</Text>
        <FeatherIcon name="edit" style={styles.icon} onPress={() => navigation.navigate('Modifier Profile',{nom,email,specialite,id,motDepass,prenom})}></FeatherIcon>
      </View>
      <View style={styles.btn}>
        <View style={styles.cont}>
          <TouchableOpacity style={styles.buttonWrapper1}  >
            <MaterialCommunityIconsIcon
              name="calendar"
              style={styles.ic1}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.btn1Text}>Consultation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.activeButtonWrapper} onPress={() =>navigation.navigate('profilAcceuil')}>
            <FontAwesomeIcon
              name="user-o"
              style={styles.activeIcon}
            ></FontAwesomeIcon>
            <Text style={styles.activeContent}>Profil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWrapper2} onPress={() =>navigation.navigate('Groupes',{id:id})}>
         
            <FeatherIcon name="users" style={styles.ic2}></FeatherIcon>
            <Text style={styles.btn2Text}>Groupe</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
  },
  image: {
    width: 107,
    height: 118,
  },
  image_imageStyle: {},
  icon2: {
    color: "rgba(74,144,226,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 77,
    marginLeft: 34,
  },
  profile: {
    color: "rgba(74,144,226,1)",
    fontSize: 25,
    marginLeft: 43,
    marginTop: 18,
    alignSelf: "center",
  },
  imageRow: {
    height: 118,
    flexDirection: "row",
    marginTop: 90,
    marginLeft: 30,
    marginRight: 109,
  },
  rect: {
    width: 328,
    height: 247,
    // backgroundColor: "#E6E6E6",
    marginTop: -40,
    alignSelf: "center",
  },
  nom3: {
    color: "#121212",
    fontSize: 20,
    marginTop: 31,
    marginLeft: 40,
  },
  prenom2: {
    color: "#121212",
    fontSize: 20,
    marginTop: 13,
    marginLeft: 41,
  },
  email: {
    color: "#121212",
    fontSize: 20,
    marginTop: 18,
    marginLeft: 41,
  },
  specialite: {
    color: "#121212",
    fontSize: 20,
    marginTop: 11,
    marginLeft: 41,
  },
  icon: {
    color: "rgba(74,144,226,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 27,
    marginLeft: 270,
  },
  cont: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    shadowColor: "#111",
    width:windowWidth,
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
  activeButtonWrapper: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
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
  },
  btn2Text: {
    fontSize: 12,
    color: "#9E9E9E",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
  btn: {
    right: 10,
    left: 10,
    position: "absolute",
    bottom: 0,
    width: windowWidth,
  },
  iconout: {
    color: "rgba(208,2,27,1)",
    fontSize: 45,
    marginTop: 50,
    marginLeft: 300
  },
  quitter :{
    marginTop: 0,
    marginLeft: 300,
    color: "rgba(208,2,27,1)",
  }
});

export default MedecinProfile;
