import { Image, StyleSheet, Text, View , TextInput, Dimensions, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React, { useState } from 'react';
import { Link, useLinkTo } from '@react-navigation/native';


export default function Principal( { navigation } ){

    const [pesquisa, setPesquisa] = useState('')


    const [produtos, setProdutos] = useState([
        {nome: 'Renova Be Colágeno Verisol® com Ácido...', preco: 'R$ 169,90',key: '1'},
        {nome: 'Renova Be Colágeno Verisol® com Ácido...', preco: 'R$ 169,90',key: '2'},
        {nome: 'Renova Be Colágeno Verisol® com Ácido...', preco: 'R$ 169,90',key: '3'},
        {nome: 'Renova Be Colágeno Verisol® com Ácido...', preco: 'R$ 169,90',key: '4'},
        {nome: 'Renova Be Colágeno Verisol® com Ácido...', preco: 'R$ 169,90',key: '5'},
        {nome: 'Renova Be Colágeno Verisol® com Ácido...', preco: 'R$ 169,90',key: '6'},
        {nome: 'Renova Be Colágeno Verisol® com Ácido...', preco: 'R$ 169,90',key: '7'},
        {nome: 'Renova Be Colágeno Verisol® com Ácido...', preco: 'R$ 169,90',key: '8'},
        {nome: 'Renova Be Colágeno Verisol® com Ácido...', preco: 'R$ 169,90',key: '9'},
        {nome: 'Renova Be Colágeno Verisol® com Ácido...', preco: 'R$ 169,90',key: '10'},
        {nome: 'Renova Be Colágeno Verisol® com Ácido...', preco: 'R$ 169,90',key: '11'},
        {nome: 'Renova Be Colágeno Verisol® com Ácido...', preco: 'R$ 169,90',key: '12'},

    ])

    const linkTo = useLinkTo()

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
                <FlatList 
                    contentContainerStyle={styles.FlatList}
                    keyExtractor={(item) => item.key}
                    data={produtos}
                    renderItem={({item}) => (
                            <TouchableOpacity onPress={ () => linkTo( {screen: 'Produto' })}>
                                <View style={styles.produto}>
                                    <Image style={styles.imagem} source={require('../../assets/produto-colageno.png')} />
                                    <Text>{item.nome}</Text>
                                    <Text style={{fontWeight: 'bold'}}>{item.preco}</Text>
                                </View>
                            </TouchableOpacity>  
                           
                            )
                        }
                />
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
        justifyContent: 'space-between'
    },

    FlatList:{
        justifyContent: 'center', 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        gap: 30
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
