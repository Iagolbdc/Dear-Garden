import { Image, StyleSheet, Text, View , TextInput, Dimensions, TouchableOpacity, ScrollView, DevSettings} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Link, useLinkTo  } from '@react-navigation/native';
import Axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function AdicionarUsuario( { funcao } ) {

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const [nomebd, setNomebd] = useState()
    const [senhabd, setSenhabd] = useState()

    const [alerta, setAlerta] = useState('')
    const [estadoAlerta, setEstadoAlerta] = useState(false)

    const [corAlerta, setCorAlerta] = useState('rgba(255, 0, 0, 0.5)')
    const styles = getStyles(corAlerta);

    const linkTo = useLinkTo()

    const saveSession = (value) => async () => {
        try {
        await AsyncStorage.setItem("@session", value);
        } catch (err) {
        console.log(err);
        }
    }

    useEffect(()=>{
        Axios.get("http://172.18.0.1:3001/usuario",{
        params:{
            name: '123123',
        }
        }).then(
          (response)=>{
            setNomebd(response["data"][0]["name"])
            console.log(nomebd)
          })
          
      }, [nomebd])

    return (
    <ScrollView>
    <View style={styles.container}>
            
            <View style={styles.bloco}>
                <Image style={styles.imagem} source={require('../../assets/logo.png')}/>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View>
                <Text style={styles.titulo}>Dear Garden</Text>
            </View>
                        
            <TextInput 
                style={styles.input}
                placeholder="Nome"
                onChangeText={setNome}
            />

            <TextInput 
                style={styles.input}
                placeholder="Senha"
                onChangeText={setSenha}
                secureTextEntry={true}
            />
            
            {estadoAlerta? <Text style={styles.alertaErro}>{alerta}</Text> : null }

            <TouchableOpacity                 
            onPress={() => {
                
                if(nome.length <= 2 || nome.trim().length == 0){
                    setAlerta('Nome inválido')
                    setEstadoAlerta(true)
                    return
                }
                 
                if(senha.length <= 2 || senha.trim().length == 0){
                    setAlerta('Senha inválida')
                    setEstadoAlerta(true)
                    return
                }
                //saveSession(nome)
                //linkTo( {screen: 'Home' })

            }}
            style={styles.botao}
            ><Text style={{color: '#fff'}}>Entrar</Text></TouchableOpacity>
            
            <Text style={styles.texto}>Não tem conta? <Link to={{ screen: 'Cadastro' }} style={styles.link}>Cadastre-se</Link></Text>
            <Text></Text>

            </View>
            </View>
            </ScrollView>
  );
}

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const getStyles = (corAlerta) =>  StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titulo:{
        textAlign: 'center',
        fontSize: 55,
        marginBottom: 40,
        marginTop: windowHeight * 0.35,
    },
    
    input:{
        marginBottom: 20,
        padding: 15,
        height: 45,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 17,
        width: (windowWidth - 150)

    },

    botao:{
        backgroundColor: "#157F1F",
        marginTop: 10,
        alignItems: 'center',
        padding: 15,
        borderRadius: 17
    },

    texto:{
        textAlign: 'center',
        marginTop: 5,

    },

    bloco:{
        flex: 1,
        backgroundColor: "#157F1F",
        borderBottomEndRadius: 90,
        borderBottomLeftRadius: 90,
        height: 200,
        width: windowWidth,
        position: 'absolute',
        left: 0,
        top: 0,  
        alignItems: 'center',

    },

    imagem:{
        height: 150,
        width: 150,
        top: 100,
    },

    alertaErro: {
        backgroundColor: corAlerta,
        padding: 10,
        fontSize: 20,
        color: "#fff",
        width: 300,
        textAlign: 'center',
        borderRadius: 5
    },

    link:{
        color: '#157F1F',
    }
});
