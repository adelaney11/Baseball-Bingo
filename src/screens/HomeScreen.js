import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const HomeScreen = props => {
    return (
      <View style={styles.container}>
          <View>
          <Image
                style = {{
                  resizeMode: 'contain',
                  backgroundColor: 'transparent',
                  height: 250,
                  width: 250,
                  marginTop: Dimensions.get('window').height * .10,
                  alignSelf: "center",
                }}
                source = {require('../assets/title.png')}
              />
          </View>
          <TouchableOpacity 
            onPress={() => props.navigation.navigate('Game')}>
            <Image
                style = {{
                  resizeMode: 'contain',
                  backgroundColor: 'transparent',
                  height: 200,
                  width: 200,
                  alignSelf: "center",
                }}
                source = {require('../assets/playbutton.png')}
              />
          </TouchableOpacity>
      </View> 
    )
};

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#11873B'
    },
    title: {
      fontSize: 44,
      marginTop: 200,
      alignSelf: 'center',
      color: 'black',
      fontFamily: 'Avenir-BookOblique',
  
    },
    button: {
      width: 150,
      alignItems: 'center',
      backgroundColor: 'beige',
      alignSelf: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'black',
      fontSize: 24,
      fontFamily: 'Avenir-BookOblique'
    }
  });

export default HomeScreen;