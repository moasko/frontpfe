import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import SignAd from './screens/adminScreens/signad';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper';
import Acceuil from './home';
import LOginJou from './screens/joueurComponent/signj';
import LoginMEd from './screens/MedecinComponent/signmed';
import AcceuilAd from './screens/adminScreens/Acceuil';
import AdMed from './screens/adminScreens/AdMed';
import ListMed from './screens/adminScreens/ListMed';
import UPmed from './screens/adminScreens/upMed';
import AddGroupe from'./screens/adminScreens/AddGroupe';
import ListGroupe from './screens/adminScreens/ListGRoupe';
import ModifierGroupe from './screens/adminScreens/Modfiergrp';
import Routes from './routes';
import 'react-native-gesture-handler';
import ListJou from './screens/adminScreens/Listjou';
import AjouterJou from './screens/adminScreens/ajouterJou';
import Details from './Listdetails';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from './tabNavigator'
import Header from './header';
import AcceuilMed from './screens/MedecinComponent/AcceuilMed';
import ProfileMEd from './screens/MedecinComponent/ProfilMEd';
import NavigationMEd from './screens/MedecinComponent/homeMd'
import ListGroupee from './screens/MedecinComponent/ListOfGroupe';
import DetailsG from './screens/MedecinComponent/DetailsGrupe';
import Consultation from './screens/MedecinComponent/consultation';
import AntecedentMed from './screens/MedecinComponent/antecedentMed';
import MedecinProfile from './screens/MedecinComponent/Profilmedecoin';
import ConsultationMedCon from './screens/MedecinComponent/MedConsultation';
import AjoutConsultation from './screens/MedecinComponent/ajouterConsutation';
import Ordonnance from './screens/MedecinComponent/Odonnance';
import Resume from './screens/MedecinComponent/REsume';
import MettreAjourCon from './screens/MedecinComponent/MettreAjourCon';
import AjoutOrdonnance from './screens/MedecinComponent/Ajouterordonnance';
import DetalisCons from './screens/MedecinComponent/DetalisConsultation';
import Examen from './screens/MedecinComponent/Examen';
import UpdateExam from './screens/MedecinComponent/updateExam'
import UpProfile from './screens/MedecinComponent/updateProfile'
import ProfilJou from './screens/joueurComponent/Profiljou'
import UpdateProfileJou from './screens/joueurComponent/updateProfiljou'
import ConsultationJoueur from './screens/joueurComponent/ConsultJou';
import OrdonnanceJoueur from './screens/joueurComponent/ordonnanceJoueur';
import AntecedentJou from './screens/joueurComponent/AntecedentJou';
import AjouttJoueur from './screens/adminScreens/AjouJou';
const {Navigator,Screen} =  createNativeStackNavigator();
const Tab = createBottomTabNavigator();





export default function App() {
 
  return (
    
    <NavigationContainer>
    <Navigator>
    
     
      <Screen options={{headerShown: false}} name="Acceuil" component={Acceuil}/>
      <Screen name="Espace admin" component = {SignAd}/>
      <Screen name='Espace joueur' component={LOginJou}/>
      <Screen name='Espace medecin' component={LoginMEd}/>
      <Screen options={{headerShown: false}} name='Acceuill' component={AcceuilAd}/>
      <Screen name='Ajouter medecin' component={AdMed}/>
      <Screen name='liste des medecins' component={ListMed} options={({navigation}) => ({
          headerRight: () => (
            <IconButton icon='plus' onPress={() => navigation.navigate('Ajouter medecin')}/>
            )
          })}/>
      <Screen  name='Modifier un medecin' component={UPmed}/>
      <Screen name='Ajouter un groupe' component={AddGroupe}/>
      <Screen name='liste des groupes' component={ListGroupe}  options={({navigation}) => ({
          headerRight: () => (
            <IconButton icon='plus' onPress={() => navigation.navigate('Ajouter un groupe')}/>
            )
          })}/>
      <Screen name='Modifier un groupe' component={ModifierGroupe}/>
      <Screen name='liste des joueurs' component={ListJou}/>
      <Screen name='Ajouter un joueur' component={AjouterJou}/>
      <Screen name='Details' component={Details}/>
      <Screen options={{headerShown: false}}  name='AcceuilMed' component={AcceuilMed}/>
      <Screen   name='profile Medecin' component={ProfileMEd} />
      <Screen options={{headerShown: false}} name='Medecin' component={NavigationMEd} />
      <Screen name='Groupes' component={ListGroupee}/>
      <Screen name='Groupes details' component={DetailsG}/>
      <Screen name='Consultation' component={Consultation}/>
      <Screen name='Antecedents medicaux' component={AntecedentMed}/>
      <Screen options={{headerShown: false}}  name='profilAcceuil' component={MedecinProfile}/>
      <Screen name='votre liste de consultation' component={ConsultationMedCon}/>
      <Screen name='Ajouter une consultation' component={AjoutConsultation}/>
      <Screen name='liste des ordonnances' component={Ordonnance}  options={({navigation}) => ({
          headerRight: () => (
            <IconButton icon='plus' onPress={() => navigation.navigate('Ajouter une consultation',{id,idMEd})}/>
            )
          })} />
          <Screen name='Resumee' component={Resume} />
          <Screen name='Modifier Consultation' component={MettreAjourCon}/>
          <Screen name='Ajouter une ordonnance' component={AjoutOrdonnance}/>
          <Screen   name='details consultation' component={DetalisCons}/>
          <Screen name='Examen' component={Examen}/>
          <Screen name='Modifier Antecedent medicaux' component={UpdateExam}/>
          <Screen name='Modifier Profile' component={UpProfile}/> 
          <Screen options={{headerShown: false}}  name='Profil Joueur' component={ProfilJou}/>
          <Screen name='Modifier Profile joueur' component={UpdateProfileJou}/>
          <Screen name='votre liste de consultations' component={ConsultationJoueur}/>
          <Screen name='votre liste d ordonnance' component={OrdonnanceJoueur}/>
          <Screen name='Vos antécédents medicaux'component={AntecedentJou}/>
          <Screen name='ajout d un joueur' component={AjouttJoueur}/>
    </Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 //backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  
});
