import  React, {useState, useEffect} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, FlatList} from 'react-native';
import { NavigationContainer, Link } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Cadastro  from './src/componentes/Cadastro'
import Login from './src/componentes/Login'
import ShopCart from './src/componentes/ShopCart'
import Principal from './src/componentes/Principal'
import AdicionarProduto from './src/componentes/AdicionarProduto'
import Perfil from './src/componentes/Perfil'

import AsyncStorage from '@react-native-async-storage/async-storage';

import Axios  from 'axios';


export default function App( ) {
    
  const [session, setSession] = useState('')

  useEffect(() => {
    const firstLoad = async () => {
    try {
    const saveSession = await AsyncStorage.getItem("@session");
    setSession(saveSession);
    console.log(session)
    } catch (err) {
    console.log(err);
    }
    };
    firstLoad();
    }, []);

    console.log(session)
  
  const AdicionarUsuario = async (nome, senha, email) => {
    try{
      await Axios.post("http://172.18.0.1:3001/cadastro", {nome: nome, senha: senha, email: email})
    }catch(e){
      console.log(e)
    }
  }

  function Shopcart(){
    return(
      <ShopCart />        
    )
  }

  function RegisterScreen(){
    return(
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Cadastro funcao={AdicionarUsuario} />
      </View>
    )
  }

  function HomeScreen(){
    return(
      <ScrollView>
        <Principal />
      </ScrollView>
    )
  }

  function LoginScreen(){
    return(
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Login />
      </View>
    )
  }

  function ProfileScreen(){
    return(
      <Perfil />
    )
  }

  function ProductScreen(){
    return(
      <Text>teste</Text>
    )
  }

  function AddProduct(){
    return(
      <ScrollView>
        <AdicionarProduto />
      </ScrollView>
    )
  }
  
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator();
  
  return (
    
    <NavigationContainer>
       
       <Tab.Navigator
       style={{ backgroundColor: '#fff'}}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Perfil' ) {
              iconName = focused ? 'person-circle' : 'person-circle-outline'
            } else if (route.name === 'Carrinho') {
              iconName = focused ? 'cart' : 'cart-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />;

          },
          headerShown: false,
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Carrinho" component={Shopcart} />
        <Tab.Screen name="Perfil" component={()=>{
          if(session){
            return ProfileScreen()
          }else{
            return LoginScreen()
          }
          }} />
        <Tab.Screen name="Cadastro" component={RegisterScreen} 
        options={{ tabBarButton: () => null }}
        />
      </Tab.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});
