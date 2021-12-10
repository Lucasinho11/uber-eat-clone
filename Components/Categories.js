
import React, { Component } from 'react';
import { View, ScrollView, Text, ImageBackground, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements';
import LottieView from 'lottie-react-native';


class Categories extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>

                  <Card containerStyle={styles.cardCategories}>
                    <View style={styles.imgDiv}>
                      <ImageBackground source={require('../assets/alcohol.png')} style={styles.imgCategories} resizeMode="cover">
                      </ImageBackground>
                    </View>
                  </Card>
              <Card containerStyle={styles.cardCategories} onClick={this.props.navigateButton}>
                <View style={styles.imgDiv}>
                  <ImageBackground source={require('../assets/convenience.png')} style={styles.imgCategories} resizeMode="cover">
                  </ImageBackground>
                </View>
                
              </Card>
              <Card containerStyle={styles.cardCategories} onClick={this.props.navigateButton}>
                <View style={styles.imgDiv}>
                  <ImageBackground source={require('../assets/uber_grocery.png')} style={styles.imgCategories} resizeMode="cover">
                  </ImageBackground>
                </View>
                
              </Card>
              <Card containerStyle={styles.cardCategories} onClick={this.props.navigateButton}>
                <View style={styles.imgDiv}>
                  <ImageBackground source={require('../assets/3.png')} style={styles.imgCategories} resizeMode="cover">
                  </ImageBackground>
                </View>
                
              </Card>
      </View>
    )
  
    }
}
const styles = StyleSheet.create({
    cardCategories:{
        borderRadius: 10,
        width: 80,
        height: 80,
        borderWidth: 0,
        padding: 0,
        marginTop: 40,
        margin: 8,
        backgroundColor: '#C2C2C2'
      },
      imgCategories: {
        width: 60,
        height: 60,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop:10,
      },
      imgDiv:{
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
      },
 
  });

  export default Categories;