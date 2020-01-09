import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HomeScreen = props => {
    return (
      <View style={styles.container}>
          <View>
            <Text style = {styles.title}>Baseball Bingo!</Text>
          </View>
          <TouchableOpacity 
          style = {{marginTop: 200}}
          onPress={() => props.navigation.navigate('Game')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>PLAY</Text>
            </View>
          </TouchableOpacity>
      </View> 
    )
};

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#29802d'
    },
    title: {
      fontSize: 44,
      marginTop: 200,
      alignSelf: 'center',
      color: 'black',
      fontFamily: 'Verdana-Bold',
  
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
      fontFamily: 'Verdana-Bold'
    }
  });

export default HomeScreen;