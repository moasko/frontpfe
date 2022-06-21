import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Dimensions,Button,TouchableOpacity} from "react-native";
import { Caption} from "react-native-paper";
import RNHTMLtoPDF from 'react-native-html-to-pdf'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const OrdonnanceJoueur = ({navigation,route}) => {
const [ordonnance, setordonnance] = useState([]);
const [idCon, setidcon] = useState(route.params.idCons);
const [loading, setLoading] = useState(true);

const getUser = () => {
    // console.log(_id);
    fetch("http://192.168.43.1:5000/consultations/" + idCon)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.data.joueurs);
        setordonnance(json.data.ordonnance);
       //console.log(json.data.ordonnance);
       setLoading(false);
      })
      .catch((e) => {
        console.error(e);
       // setError("An error occurred, please try again later.");
        setLoading(false);
      });
  };
  
 const generateOrdonance = async()=>{
     let file = await RNHTMLtoPDF.convert({
       html: '<h1>PDF TEST</h1>',
      fileName: 'test',
      directory: 'Documents',
     })
     
     console.log(file.filePath)
 }
    
  useEffect(() => {
    console.log(idCon);
      getUser();
    }, []);
    return ( 
        <View style={styles.container}>
          {!loading && !ordonnance.length && (
          <Caption style={{ textAlign: "center", marginTop: 13,fontWeight:'bold',fontSize:17 }}>
           vous n'avez aucune ordonnance 😇😇😇
          </Caption>
        )}
        <FlatList
           keyExtractor={(item) => item._id}
           data={ordonnance}
           renderItem={({ item }) => {
            
              return (
                  <View style={styles.rect1}>
                      
                  <View style={styles.loremIpsum1Row}>
                  <Text style={styles.loremIpsum1}>{item.createdAt}</Text>
                  <TouchableOpacity onPress={()=>generateOrdonance()} style={styles.button1}>
                    <Text style={styles.voir1}>Voir</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.ordonnance1}><Text style={{fontWeight:'bold'}}>Chirurgie: </Text>{item.chirurgie}</Text>
                <Text style={styles.examen1}><Text style={{fontWeight:'bold'}}>Traitement: </Text> {item.traitement}</Text>
                <Text style={styles.examen1}><Text style={{fontWeight:'bold'}}>Radio: </Text> {item.Radio}</Text>
                <Text style={styles.examen1}><Text style={{fontWeight:'bold'}}>Vaccin: </Text> {item.Vaccin}</Text>
                <Text style={styles.examen1}><Text style={{fontWeight:'bold'}}>Pathologie: </Text> {item.Pathologie}</Text>
                <Text style={styles.examen1}><Text style={{fontWeight:'bold'}}>Analyse: </Text>{item.Analyse}</Text>
              
               
              </View>
                 )
            }}/>
   
  
  
    </View>
     );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(255,255,255,1)",
    },
    rect1: {
      width: windowWidth -25,
      height: 300,
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
      color: "red",
      fontSize: 20,
      fontWeight:'bold',
    },
    button1: {
      width: 70,
      height: 24,
      backgroundColor: "rgba(74,144,226,1)",
      marginLeft: 30,
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
    },
    icon: {
      color: "rgba(74,144,226,1)",
      fontSize: 65,
      marginTop:5,
      marginLeft: 330,
    },
    btn: {
      right: 10,
      left: 10,
      position: "absolute",
      bottom: 0,
      width: windowWidth,
      marginTop:20,
    },
    cont: {
      //backgroundColor: "#FFF",
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
      marginLeft:300,
    },
    btn2Text: {
      fontSize: 12,
      color: "#9E9E9E",
      backgroundColor: "transparent",
      paddingTop: 4,
    },
  });
export default OrdonnanceJoueur;
