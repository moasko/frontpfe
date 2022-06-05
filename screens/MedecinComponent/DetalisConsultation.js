import React,{useState,useEffect} from 'react';
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";




const DetalisCons = ({route,navigation}) => {
    const [idjou, setidjou] = useState(route.params.id);
    const [idcons, setidcons] = useState(route.params.idCons);
    const [idmed, setidmed] = useState(route.params.idMEd);
    const [NomJou, setNomJou] = useState("");
    const [NomMed, setNomMed] = useState("");
    const [Joueurs, setJoueurs] = useState([]);
    const [medecins, setmedecins] = useState([]);
    const [consultation, setconsultation] = useState([]);
    const [dateCon, setdateCon] = useState(route.params.dateCr);
   const  dateCons = route.params.dateCr
    const getUser = () => {
        // console.log(_id);
        fetch("http://192.168.43.1:5000/joueurs/" + idjou)
          .then((response) => response.json())
          .then((json) => {
            setJoueurs(json.data);
            //console.log(json.data.consultations);
            setNomJou(json.data.nom);
          })
          .catch((error) => console.error(error));
      };
      const getMEd = () => {
        // console.log(_id);
        fetch("http://192.168.43.1:5000/medecins/" + idmed)
          .then((response) => response.json())
          .then((json) => {
             //console.log(json.data.nom);
            setmedecins(json.data);
            setNomMed(json.data.nom);
          })
          .catch((error) => console.error(error));
      };
      const getCons = () => {
        // console.log(_id);
        fetch("http://192.168.43.1:5000/consultations/" + idcons)
          .then((response) => response.json())
          .then((json) => {
              console.log("---------------------");
            console.log(json.data._id);
           setidcons(json.data._id);
          })
          .catch((error) => console.error(error));
      };
      useEffect(() => {
        getUser();
        getMEd();
        getCons();
      // console.log(route.params.idCons);
        // check();
      }, []);
    return (
        <View style={styles.container}>
        <Text style={styles.date09122000}>Date : {dateCons}</Text>
        <Text style={styles.joueurNomjou}>Joueur : {NomJou}</Text>
        <Text style={styles.joueurNomjou1}>Medecin  : {NomMed}</Text>
        <View style={styles.icon1Stack}>
          <Icon name="file-document-outline" style={styles.icon1} onPress={() =>navigation.navigate("liste des ordonnances",{idcons,idmed,idjou})}></Icon>
          <Text style={styles.loremIpsum1}>Liste des ordonnances</Text>
        </View>
        <View style={styles.icon3ColumnRow}>
        <View style={styles.icon3Column}>
          <IoniconsIcon
            name="ios-add-circle"
            style={styles.icon3}
            onPress={() =>
                navigation.navigate("Ajouter une ordonnance", { idcons, idmed,idjou })
              }
          ></IoniconsIcon>
          <Text style={styles.ordonnance}>ordonnance</Text>
        </View>
        <IoniconsIcon name="ios-add-circle" style={styles.icon2}
        onPress={() =>
            navigation.navigate("Examen", { idcons, idmed,idjou })
          }>
        </IoniconsIcon>
        <Text style={styles.examen}>Examen</Text>
      </View>
     
      </View>
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(255,255,255,1)",
    },
    date09122000: {
      color: "rgba(74,144,226,1)",
      fontSize: 25,
      marginTop: 50,
      alignSelf: "center",
      fontWeight:'bold',
      textDecorationLine:'underline'
    },
    joueurNomjou: {
      color: "#121212",
      fontSize: 20,
      marginTop: 27,
      marginLeft: 107,
    

    },
    joueurNomjou1: {
      color: "#121212",
      fontSize: 20,
      marginTop: 19,
      marginLeft: 107,
     
    },
    icon1: {
      left: 35,
      position: "absolute",
      color: "rgba(126,211,33,1)",
      fontSize: 71,
      top: 0
    },
    loremIpsum1: {
      top: 69,
      left: 30,
      position: "absolute",
      color: "rgba(65,117,5,1)",
      lineHeight: 15,
      textAlign:'center'
    },
    icon1Stack: {
      width: 141,
      height: 86,
      marginTop: 67,
      marginLeft: 27
    },
    icon3ColumnRow: {
        height: 96,
        flexDirection: "row",
        marginTop: 47,
        marginLeft: 44,
        marginRight: 52
      },
      icon3Column: {
        width: 90
      },
      icon3: {
        color: "rgba(65,117,5,1)",
        fontSize: 67,
        marginLeft: 18
      },
      ordonnance: {
        color: "rgba(65,117,5,1)",
        fontSize: 15,
        marginTop: 3,
        textAlign:"center"
      },
      icon2: {
        color: "rgba(74,144,226,1)",
        fontSize: 67,
        marginLeft: 120,
        marginTop: -56
      },
      examen: {
        color: "rgba(74,144,226,1)",
        fontSize: 17,
        position: "absolute",
        top: 20,
        left: 0,
        marginLeft:210,
       
       
      }
  });
 
export default DetalisCons;