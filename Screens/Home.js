
import React, { Component } from 'react';

import {
  ScrollView,
  StyleSheet,
  View,
  Animated,
  Image,
  Text
} from 'react-native';
import Header from '../Components/Header';
import Categories from '../Components/Categories';
import Shop from '../Components/Shop';
import Footer from '../Components/Footer';

class Home extends Component {

  render(){
  return (
      <View containerStyle={styles.homeContainer}>
          <Header/>
          <View style={styles.scrollDiv}>
            <ScrollView>
              <Categories/>
              <Shop navigateButton={() => this.props.navigation.navigate('Details')}/>
            </ScrollView>
          </View>
          <Footer/>
          
          
      </View>
  );
  }
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#ecf0f1',
  },
  scrollDiv:{
    height: 625
  }
});

export default Home ;
