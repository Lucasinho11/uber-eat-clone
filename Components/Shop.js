
import React, { Component } from 'react';
import { View, ScrollView, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Card } from 'react-native-elements';
import {
  SharedElement,
  createSharedElementStackNavigator,
} from 'react-navigation-shared-element';

class Shop extends Component {
  render() {
    return (
      <View style={styles.container}>
                <TouchableOpacity onPress={this.props.navigateButton} style={styles.card}>
                <SharedElement>
                  <View onClick={this.props.navigateButton}>
                    <Image style={styles.bigImage} source={require('../assets/carrefour.jpeg')}></Image>
                    <View style={styles.nameAndNote}>
                      <Text style={styles.textCard}>Carrefour (Paris) </Text>
                      <View style={styles.noteDiv}>
                        <Text style={styles.note}>4.6</Text>
                      </View>
                    </View>
                    <Text style={styles.subText}>Frais de livraison : 0,99$ - 20-30 min</Text>
                  </View>
              </SharedElement>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.props.navigateButton} style={styles.card}>
                <SharedElement>
                  <View onClick={this.props.navigateButton}>
                    <Image style={styles.bigImage} source={require('../assets/franprix.jpeg')}></Image>
                    <View style={styles.nameAndNote}>
                      <Text style={styles.textCard}>Franprix (Paris) </Text>
                      <View style={styles.noteDiv}>
                        <Text style={styles.note}>4.1</Text>
                      </View>
                    </View>
                    <Text style={styles.subText}>Frais de livraison : 0,99$ - 20-30 min</Text>
                  </View>
              </SharedElement>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.props.navigateButton} style={styles.card}>
                <SharedElement>
                  <View onClick={this.props.navigateButton}>
                    <Image style={styles.bigImage} source={require('../assets/mcdo.png')}></Image>
                    <View style={styles.nameAndNote}>
                      <Text style={styles.textCard}>Mc Donald's (Paris) </Text>
                      <View style={styles.noteDiv}>
                        <Text style={styles.note}>4.8</Text>
                      </View>
                    </View>
                    <Text style={styles.subText}>Frais de livraison : 0,99$ - 20-30 min</Text>
                  </View>
              </SharedElement>
              </TouchableOpacity>
      
    </View>
    )
  
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  card : {
    width: '90%',
    marginTop: 10
  },
  bigImage:{
    width: '100%',
    height: 150,
  },
  textCard : {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5
  },
  subText: {
    color: 'grey'
  },
  nameAndNote: {
    display: 'flex',
    flexDirection : 'row',
    justifyContent: 'space-between',

  },
  note: {
    fontSize: 16,
    display: 'flex',
    borderRadius: 10,
  },
  noteDiv:{
    backgroundColor: '#e2e2e2',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    width: 40,
    height: 40
  }
  });

  export default Shop;