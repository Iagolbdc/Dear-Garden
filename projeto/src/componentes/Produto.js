import { Image, StyleSheet, Text, View , TextInput, Dimensions, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React, { useState } from 'react';
import { Link } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { useLinkTo } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function Produto(){

    const linkTo = useLinkTo()

    return(
        <ScrollView style={styles.container}> 
            <View style={styles.containerImagem}>
                <TouchableOpacity style={styles.voltar} onPress={() => linkTo({screen: 'Home'})}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Image style={styles.imagem} source={require('../../assets/produto-colageno.png')}></Image>
            </View>

            <View style={styles.titulo}>
                <Text style={{fontSize: 23, fontWeight: 'bold'}}>Renova Be Colágeno Verisol®</Text>
                <AntDesign name="hearto" size={30} color="black" />
            </View>

            <View style={styles.stars}>
                <FontAwesome name="star" size={26} color="yellow" />
                <FontAwesome name="star" size={26} color="yellow" />
                <FontAwesome name="star" size={26} color="yellow" />
                <FontAwesome name="star" size={26} color="yellow" />
                <FontAwesome name="star-half-empty" size={26} color="yellow" />
            </View>

            <View style={styles.descricao}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>Descrição</Text>
                <Text style={{fontSize: 15}}>
            Uma nutrição equilibrada tem um papel muito importante na qualidade de vida. Com o ritmo acelerado de muitas pessoas, às vezes, é muito difícil prestar atenção a todos os requisitos que o corpo precisa para estar saudável e forte. Neste sentido, os suplementos cumprem a função de complementar a alimentação e ajudam a obter as vitaminas, minerais, proteínas e outros componentes indispensáveis para o correto funcionamento do organismo.           
                </Text>
            </View>

            <View style={styles.compra}>
                <View style={styles.preco}>
                    <Text>Preço total</Text>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>R$ 169,90</Text>
                </View>
                <TouchableOpacity style={styles.botaoCompra}>
                    <Text style={{color: 'white', fontSize: 17}}>Adicionar ao carrinho</Text>
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
        top: 40
    },  

    voltar:{
        position: 'absolute',
        left: 20,
        top: 20
    },

    imagem:{
        height: windowHeight * 0.35,
        width: windowWidth * 0.8,

    },

    containerImagem: {
        alignItems: 'center',
        width: windowWidth,
        backgroundColor: '#E3E3E3',
    },

    titulo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        alignItems: 'center',
        marginTop: 20,
    },

    descricao:{
        padding: 30,
    },

    stars: {
        flexDirection: 'row',
        paddingHorizontal: 30,
    },

    compra:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 30,
        alignItems: 'center',
        paddingBottom: 50,
    },

    botaoCompra: {
        backgroundColor: '#157F1F',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingHorizontal: 17,
        borderRadius: 50
    }



});