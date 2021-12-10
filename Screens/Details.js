
import React, { Component } from 'react';

import {
  ScrollView,
  StyleSheet,
  View,
  Animated,
  Image,
  Text
} from 'react-native';
import Detail from '../Components/Detail';


class Details extends Component {

  render(){
  return (
      <View containerStyle={styles.homeContainer}>
          <Detail/>
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

export default Details ;
