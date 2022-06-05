import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import InputModal from './InputModalMEd';

const Item = ({item,setModalvisible,Modalvisible}) => {

  const toMod = () => {
   props.navigation.push('Modifier un medecin')

  }
  const openModal = (item) =>{
    setModalvisible(true)

  }

    return ( 
        <View style={styles.listItem}>
        <View style={{alignItems:"center",flex:1}}>
          <Text style={{fontWeight:"bold"}}>{item.nom}</Text>
          <Text>{item.email}</Text>
          <Text>{item.specialite}</Text>
        </View>
        <TouchableOpacity style={{height:60,width:50, justifyContent:"center",alignItems:"center"}}>
          <Text style={{color:"red"}}>Supprimer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:60,width:50, justifyContent:"center",alignItems:"center",fontWeight:"bold"}} onPress={openModal}>
          <Text style={{color:"blue"}}>Modifier</Text>
        </TouchableOpacity>
      </View>
     );
}

const styles=StyleSheet.create({
    listItem:{
        margin:10,
        padding:10,
        backgroundColor:"#FFF",
        width:"90%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:5
      }
})
 
export default Item;