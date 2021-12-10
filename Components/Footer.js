
import React, { Component } from 'react';
import { Pressable, View, Text, Image, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements';
import LottieView from 'lottie-react-native';


class Footer extends Component {
  render() {

    return (
      <View style={styles.container}>
          <View style={styles.footer}>
          <Image style={styles.imgWidth} source={require('../assets/home.png')}></Image>
          <Image style={styles.imgWidth} source={require('../assets/search.png')}></Image>
          <Image style={styles.imgWidth} source={require('../assets/cart.png')}></Image>
          <Image style={styles.imgWidth} source={require('../assets/user.png')}></Image>
          </View>
      </View>
    )
  
    }
}
const styles = StyleSheet.create({

  footer:{
      paddingTop: 10,
      width: '100%',
      height:80,
      borderTopColor: 'grey',
      borderTopWidth: 2,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingBottom: 30
  },
  imgWidth:{
      width: 40,
      height: 40
  }


  });

  export default Footer;