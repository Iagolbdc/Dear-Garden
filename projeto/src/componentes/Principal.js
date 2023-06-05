import { Image, StyleSheet, Text, View , TextInput, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { Link } from '@react-navigation/native';


export default function ShopCart( { funcao } ){

    const [pesquisa, setPesquisa] = useState('')

    return(
        <ScrollView contentContainerStyle={styles.container}> 

            <View style={styles.navbar}>
                <Image style={styles.logo} source={require('../../assets/logo.png')}/>
                <TextInput style={styles.pesquisa} onChangeText={setPesquisa} placeholder='Pesquisar...' />
            </View>
            <View style={styles.containerImagem}>
                <Image style={styles.imagemPrincipal} source={require('../../assets/foto-principal.jpg')}></Image>
            </View>
            

            <View style={styles.conteudo}>
                <TouchableOpacity>
                    <View style={styles.produto}>
                        <Image style={styles.imagem} source={require('../../assets/produto-colageno.png')} />
                        <Text>Renova Be Colágeno Verisol® com Ácido...</Text>
                        <Text style={{fontWeight: 'bold'}}>R$  169,90</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.produto}>
                        <Image style={styles.imagem} source={require('../../assets/produto-colageno.png')} />
                        <Text>Renova Be Colágeno Verisol® com Ácido...</Text>
                        <Text style={{fontWeight: 'bold'}}>R$  169,90</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.produto}>
                        <Image style={styles.imagem} source={require('../../assets/produto-colageno.png')} />
                        <Text>Renova Be Colágeno Verisol® com Ácido...</Text>
                        <Text style={{fontWeight: 'bold'}}>R$  169,90</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.produto}>
                        <Image style={styles.imagem} source={require('../../assets/produto-colageno.png')} />
                        <Text>Renova Be Colágeno Verisol® com Ácido...</Text>
                        <Text style={{fontWeight: 'bold'}}>R$  169,90</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        top: 40,
    },

    link:{
        color: '#157F1F',
    },

  navbar:{
    backgroundColor: '#157F1F',
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  logo:{
    width: 60,
    height: 60,
  },

    pesquisa:{
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 10,
        width: 150
    },

    conteudo:{
        padding: 30,
        marginTop: 30,
        flexWrap: 'wrap',
        gap: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    produto:{
        height: 220,
        width: 130,
        gap: 10,
        
    },

    imagem:{
        height:130,
        width: 130,
        backgroundColor: '#E3E3E3'
    },

    containerImagem:{
        alignItems: 'center',
        top: 30,
    },

    imagemPrincipal:{
        height: 150,
        width: 300,
        borderWidth: 1.5,
        borderColor: 'rgba(0,0,0, 0.6)'
    }
});
