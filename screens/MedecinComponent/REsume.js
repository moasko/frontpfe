import { useLayoutEffect, useRef, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView, View,Text,Dimensions,StyleSheet,TouchableOpacity} from 'react-native';
import { Button, Colors, Snackbar, Subheading, TextInput } from 'react-native-paper';
import { RichEditor, RichToolbar} from "react-native-pell-rich-editor";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Resume = () => {
    const editor = useRef();
    return ( 
  
        <View style={{flex: 1, justifyContent: 'space-between',backgroundColor:'white'}}>

      <Subheading style={{marginTop:20,alignItems:'center'}}>Contenu</Subheading>
     
      <ScrollView keyboardDismissMode='onDrag'>
        <KeyboardAvoidingView behavior={"position"}	style={{ flex: 1 }} keyboardVerticalOffset={250}>
        <RichEditor 
            style={{ flex: 1}}
            ref={editor} 
           
            placeholder='Start typing...'
            useContainer />
          
        </KeyboardAvoidingView>
      </ScrollView>
      <Snackbar >eee</Snackbar>
      <View>
     
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
          <TouchableOpacity style={styles.activeButtonWrapper} >
            <FontAwesomeIcon
              name="user-o"
              style={styles.activeIcon}
            ></FontAwesomeIcon>
            <Text style={styles.activeContent}>Profil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWrapper2}>
         
            <FeatherIcon name="users" style={styles.ic2}></FeatherIcon>
            <Text style={styles.btn2Text}>Groupe</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
   
     );
}
const styles = StyleSheet.create({
  btn: {
    right: 10,
    left: 10,
    position: "absolute",
    bottom: 0,
    width: windowWidth,
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
})
 
export default Resume;