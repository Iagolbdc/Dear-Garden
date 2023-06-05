import { Image, StyleSheet, Text, View , TextInput, Dimensions, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React, { useState } from 'react';
import { Link } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 


export default function ShopCart( { funcao } ){

    const [pesquisa, setPesquisa] = useState('')

    const [logado, setLogado] = useState(false)

    const [produtos, setProdutos] = useState([
        {nome: 'Renova Be Colágeno Verisol® com Ácido...', preco: 'R$ 169,90',key: 1},
        {nome: 'Renova Be Colágeno Verisol® com Ácido...', preco: 'R$ 169,90',key: 2},
        {nome: 'Renova Be Colágeno Verisol® com Ácido...', preco: 'R$ 169,90',key: 3},
        {nome: 'Renova Be Colágeno Verisol® com Ácido...', preco: 'R$ 169,90',key: 4},
        {nome: 'Renova Be Colágeno Verisol® com Ácido...', preco: 'R$ 169,90',key: 5},
    ])

    const removerProduto = (key) =>{
        setProdutos(
            (produtosAnteriores)=>{
                return produtosAnteriores.filter(produtos => produtos.key != key)
            }
        )
    }

    return(
        <View style={styles.container}> 
            
            <View style={styles.navbar}>
                <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            </View>
            
            {!logado ? 
            
            <View style={styles.containerProdutos}>
                <ScrollView contentContainerStyle={styles.produtos}>
                    <FlatList 
                    keyExtractor={(item) => item.key}
                    data={produtos}
                    renderItem={({item}) => {
                        <TouchableOpacity>
                        <View style={styles.produto} >
                            <Image style={styles.imagem} source={require('../../assets/produto-colageno.png')} />
                            <View style={styles.descricaoProduto} elevation={2}>    
                                <View style={styles.titulo}>
                                    <Text>{item.nome}.</Text>
                                    <Text style={{fontWeight: 'bold'}}>{item.preco}</Text>
                                </View>
                                <TouchableOpacity style={styles.lixeira} onPress={() => removerProduto(item.key)}>
                                    <Ionicons name="trash" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                    }}
                    />
                    <View style={styles.subtotal}>
                        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Sub-total <Text style={{color: "#157F1F"}}> R$00.00 </Text></Text>
                        <TouchableOpacity>
                            <View style={styles.continuar}>
                                <Text style={{color: '#fff'}}>Continuar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                
            </View> 
            
            : 
            
            <View style={styles.container2}>    
                <Text>
                    Entre em uma conta primerio!  
                    <Link to={{ screen: 'Entrar' }} style={styles.link}> Entrar</Link>
                </Text>
            </View>
            }
            



        </View>
    )
}

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        flex: 1,
        top: 40
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

  container2:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},

    containerProdutos:{
        padding: 10,
        justifyContent: 'space-between',
        height: windowHeight * 0.77

    },

produto:{
    width: windowWidth * 0.95,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10
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

descricaoProduto:{
    padding: 15,
    height: 130,
    width: windowWidth * 0.6,
    justifyContent: 'space-between',
    flexDirection: 'row'
},

titulo:{
    gap: 20
},

lixeira:{
    paddingTop: 75
},

subtotal:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10
},

continuar:{
    backgroundColor: "#157F1F",
    padding: 17,
    paddingHorizontal: 25,
    borderRadius: 30,    
}





});
