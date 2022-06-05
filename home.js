import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";


const Acceuil = (props) => {
  var imgUrl = 'data:image/jpeg;base64,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'
  const togo = () => {
    props.navigation.push("Espace admin");
  };
  const togoJou = () => {
    props.navigation.push("Espace joueur");
  };
  const togoMed = () => {
    props.navigation.push("Espace medecin");
  };
  return (
    <View style={styles.container}>
       <Text style={styles.medjouapp}>MEDJOAPP</Text>
       
      <TouchableOpacity style={styles.button} onPress={togo}>
        <Text style={styles.espaceAdmin}>Espace Admin</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={togoMed}>
        <Text style={styles.espaceMedecin}>Espace Medecin</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={togoJou}>
        <Text style={styles.espaceJoueur}>Espace Joueur</Text>
      </TouchableOpacity>
      <Image
      
      source={{uri:imgUrl}}
      resizeMode="contain"
    style={styles.image}
    />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign:"center",
    alignItems:"center",
    backgroundColor: "rgba(255,255,255,1)",
  },
  button: {
    width: 350,
    height: 58,
    borderRadius: 11,
    backgroundColor: "rgba(35,108,194,1)",
    shadowColor: "rgba(255,255,255,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 300,
   // marginLeft: 40,
  },
  espaceAdmin: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 17,
    //marginLeft: 67,
    alignItems:"center",
    textAlign:"center",
    fontWeight:"bold"
  },
  button1: {
    width: 350,
    height: 58,
    borderRadius: 11,
    backgroundColor: "rgba(35,108,194,1)",
    shadowColor: "rgba(255,255,255,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 36,
   // marginLeft: 40,
  },
  espaceMedecin: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 17,
   // marginLeft: 58,
   alignItems:"center",
   textAlign:"center",
   fontWeight:"bold"
  },
  button2: {
    width: 350,
    height: 58,
    borderRadius: 11,
    backgroundColor: "rgba(35,108,194,1)",
    shadowColor: "rgba(255,255,255,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 40,
   // marginLeft: 40,
  },
  espaceJoueur: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 17,
   // marginLeft: 58,
    alignItems:"center",
    textAlign:"center",
    fontWeight:"bold"
  },
  image: {
    width: 700,
    height: 250,
  borderRadius: 200,
    marginTop: -554,
    alignSelf: "center",
  },
  medjouapp: {
    width: 177,
    height: 36,
    color: "rgba(35,108,194,1)",
    fontSize: 30,
    marginTop:30,
    fontWeight:"bold",
    marginBottom:20,
  },
  icon2Stack: {

    marginLeft: 11,
    textAlign:'center'
  },
  icon2: {

    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 80,
    textAlign:'center',
    alignItems:"center"
  },
  medjouappColumnRow: {
    height: 189,
    flexDirection: "row",
    marginTop: -496,
    marginLeft: 76,
    marginRight: -200
  },
  icon4: {
    top: 34,
    left: 112,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon3: {
    top: 34,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
});

export default Acceuil;
