
import React, { Component } from 'react';
import { Pressable, View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements';
import LottieView from 'lottie-react-native';


class Detail extends Component {
  render() {

    return (
        <ScrollView>
        <Image source={require('../assets/carrefour.jpeg')} style={styles.headImage}></Image>
        <View style={styles.container}>
          <Text style={styles.headTitle}>Carrefour - Paris</Text>
          <Text style={styles.priceNote}>* 4.6 (146 notes) - Courses - $$</Text>
          <Text style={styles.shopInfos}>55-65 min - Frais de livraison : 4,99$</Text>
          <Text style={styles.shopInfos}>Appuyez pour connaître les horaires, l'adresse et d'autres informations.</Text>
          <View style={styles.searchBarContainer}>
            <View style={styles.searchBar}>
              <Image source={require('../assets/search2.png')}></Image>
              <Text style={styles.searchText}>Rechercher 4567 articles</Text>
            </View>
          </View>
          <View style={styles.productContainer}>
              <Text>Noël x Coca-Cola</Text>
              <Image source={require('../assets/search2.png')}></Image>
          </View>
          <View style={styles.greyLine}></View>
            <View style={styles.productContainer}>
                <Text>Noël x Coca-Cola</Text>
                <Image source={require('../assets/search2.png')}></Image>
            </View>
            <View style={styles.greyLine}></View>
            <View style={styles.productContainer}>
                <Text>Noël x Coca-Cola</Text>
                <Image source={require('../assets/search2.png')}></Image>
            </View>
            <View style={styles.greyLine}></View>
            <View style={styles.productContainer}>
                <Text>Noël x Coca-Cola</Text>
                <Image source={require('../assets/search2.png')}></Image>
            </View>
            <View style={styles.greyLine}></View>
            <View style={styles.productContainer}>
                <Text>Noël x Coca-Cola</Text>
                <Image source={require('../assets/search2.png')}></Image>
            </View>
            <View style={styles.greyLine}></View>
            <View style={styles.productContainer}>
                <Text>Noël x Coca-Cola</Text>
                <Image source={require('../assets/search2.png')}></Image>
            </View>
            <View style={styles.greyLine}></View>
            <View style={styles.productContainer}>
                <Text>Noël x Coca-Cola</Text>
                <Image source={require('../assets/search2.png')}></Image>
            </View>
            <View style={styles.greyLine}></View>
            <View style={styles.productContainer}>
                <Text>Noël x Coca-Cola</Text>
                <Image source={require('../assets/search2.png')}></Image>
            </View>
            <View style={styles.greyLine}></View>
            <View style={styles.productContainer}>
                <Text>Noël x Coca-Cola</Text>
                <Image source={require('../assets/search2.png')}></Image>
            </View>
            <View style={styles.greyLine}></View>
            <View style={styles.productContainer}>
                <Text>Noël x Coca-Cola</Text>
                <Image source={require('../assets/search2.png')}></Image>
            </View>
            <View style={styles.greyLine}></View>
            <View style={styles.productContainer}>
                <Text>Noël x Coca-Cola</Text>
                <Image source={require('../assets/search2.png')}></Image>
            </View>



        </View>
      </ScrollView>
    )
  
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
      },
        headImage : {
          width : '100%',
            height: 150,
            marginTop : 50
        },
      headTitle: {
        fontWeight: 'bold',
        fontSize: 30,
      },
      priceNote: {
        fontWeight: 'bold',
    
      },
      shopInfos: {
        color: 'grey',
      },
       searchBarContainer: {
          display: 'flex',
           alignItems: 'center',
           paddingTop: 20,
       },
      searchBar: {
          display : 'flex',
          flexDirection: 'row',
          alignItems :  'center',
          justifyContent : 'space-between',
          width: '90%',
          backgroundColor: '#e2e2e2',
          padding: 10,
          borderRadius: 50,
      },
        searchText : {
          width: '85%',
        },
        productContainer : {
          display : 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems : 'center',
            paddingTop: 30,
        },
        greyLine : {
          marginTop : 20,
            height : 1,
            backgroundColor : 'black',
        }


  });

  export default Detail;