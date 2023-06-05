import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import  React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import Axios from 'axios';


export default function Perfil(){
    
    const Stack = createStackNavigator();

    const [fotoPerfil, setFotoPerfil] = useState() 

    useEffect(()=>{
        Axios.get("http://192.168.1.42:3001/foto-usuario", {
          params:{
            ID: 440272,
          }
        })
        .then(
          (response)=>{
            console.log(response["data"][0]["CONVERT(`fotoPerfil` USING utf8)"])
            setFotoPerfil(response["data"][0]["CONVERT(`fotoPerfil` USING utf8)"])
          }
        )
      }, [fotoPerfil])

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setFotoPerfil(result.assets[0].uri);
        }
      };

    

    const Inicio = ( {navigation} ) =>{
        return(
            <View style={styles.container}>
                <View style={styles.bloco}>
                    <TouchableOpacity 
                        style={styles.voltar} 
                        onPress={() => navigation.navigate('Home')}
                    > 
                        <Ionicons name="arrow-back" size={25} color="white" />
                    </TouchableOpacity>
                    
                        {
                        !fotoPerfil ? 
                        <View style={styles.imagem}><Ionicons name="person-circle-outline" size={150} color="black"/></View>
                         : 
                         <Image source={{ uri: fotoPerfil }} style={styles.imagem} />}    
                    
                    <Text style={{color: 'white', fontSize: 17}}>Olá, User</Text>
                </View>
                <View style={styles.conteinerItens}>
                    <View style={[styles.card, styles.elevation]}>
                        <TouchableOpacity 
                            style={styles.item}
                            onPress={()=> navigation.navigate(Pedidos)}
                        >
                            <Text>Pedidos</Text>
                            <AntDesign name="right" size={24} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.item}
                            onPress={()=> navigation.navigate(Mensagens)}
                        >
                            <Text>Mensagens</Text>
                            <AntDesign name="right" size={24} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.item}
                            onPress={()=> navigation.navigate('Notificações')}
                        >
                            <Text>Notificações</Text>
                            <AntDesign name="right" size={24} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.item}
                            onPress={()=> navigation.navigate('Meus cupons')}
                        >
                            <Text>Meus cupons</Text>
                            <AntDesign name="right" size={24} color="black" />
                        </TouchableOpacity>

                    </View>
                    <View style={[styles.card, styles.elevation]}>
                        <TouchableOpacity 
                            style={styles.item}
                            onPress={()=> navigation.navigate(Suporte)}
                        >
                            <Text>Suporte</Text>
                            <AntDesign name="right" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.item}
                            onPress={()=> navigation.navigate('Alterar dados')}
                        >
                            <Text>Alterar dados</Text>
                            <AntDesign name="right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }

    const Pedidos = ()=>{
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Nenhum produto encontrado!</Text>
            </View>
        )
    }

    const Mensagens = ()=>{
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Nenhuma mensagem recebida</Text>
            </View>
        )
    }

    const Notificacoes = ()=>{
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Nenhuma notificação encontrada!</Text>
            </View>

        )
    }

    const MeusCupons = ()=>{
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Nenhum cupom encontrado</Text>
            </View>
        )
    }

    const Suporte = ()=>{
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>asdasd</Text>
            </View>
        )
    }

    const AlterarDados = ()=>{
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>asdasd</Text>
            </View>
        )
    }


    return(
        <ScrollView contentContainerStyle={styles.container}>
            

    <Stack.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#157F1F' },
      }}
    >
      <Stack.Screen
        name="Inicio"
        component={Inicio}
        options={{
            headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          title: 'Pedidos',
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="Mensagens"
        component={Mensagens}
        options={{
          title: 'Mensagens',
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="Notificações"
        component={Notificacoes}
        options={{
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="Meus cupons"
        component={MeusCupons}
        options={{
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="Suporte"
        component={Suporte}
        options={{
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="Alterar dados"
        component={AlterarDados}
        options={{
          gestureEnabled: true,
        }}
      />
    </Stack.Navigator>
            
        </ScrollView>
    )
}

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    bloco:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#157F1F',
        height: windowHeight * 0.35,
        gap: 10
    },

    imagem:{
        height: 120,
        width: 120,
        backgroundColor: 'grey',
        borderRadius: 100,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

    voltar: {
        top: 40,
        position: 'absolute',
        left: 20
    },

    item:{
        backgroundColor: '#fff',
        padding: 15,
        borderBottomColor: 'rgba(0, 0, 0, 0.5)',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        

    },

    conteinerItens:{
        marginTop: 30
    },

      card: {
        backgroundColor: 'white',
        marginVertical: 10,
        marginBottom: 20

      },
      elevation: {
        elevation: 20,
        shadowColor: '#52006A',
      },
    

})