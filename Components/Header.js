
import React, { Component } from 'react';
import { Pressable, View, Text, Image, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements';
import LottieView from 'lottie-react-native';


class Header extends Component {
    state = {
        search: '',
      };
      updateSearch = (search) => {
        this.setState({ search });
      };
  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
         <View style={styles.headerButtons}>

        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed
                    ? '#000'
                    : '#00000000'
            },
            styles.customButtonStyle
        ]}>
            <Text style={styles.customTextButtonStyle}> Livraison </Text>
        </Pressable>

        <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, styles.customButtonStyle ]}>
            {({ pressed }) => (
                <Text style={[{ color: pressed ? 'white' : 'black' }, styles.customTextButtonStyle]}>
                    A Emporter
                </Text>
            )}
        </Pressable>

        </View>

        <View style={styles.headerText}>

        <Text> Maintenant - 19 Rue Yves Toudic </Text>
        <Image style={styles.headerArrow} source={require('../assets/arrow.png')}/>
        <Image style={styles.headerFilter} source={require('../assets/sort.jpeg')} />

        </View>

      </View>
    )
  
    }
}
const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60
  },
customButtonStyle: {
    backgroundColor: '#000',
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    margin: 2
},
customTextButtonStyle: {
    color: 'white',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
},
headerButtons: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
},
headerText: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center'
},
headerArrow: {
    marginTop: 4,
    marginLeft: 5,
    width: 6,
    height: 12,
    transform: [{ rotate: '90deg' }]
},
headerFilter: {
    alignItems: 'flex-end',
    marginLeft: 25,
    width: 25,
    height: 25,
}

  });

  export default Header;