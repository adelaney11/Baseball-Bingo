import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import BingoCard from '../components/BingoCard';
import BingoButton from '../components/BingoButton';




const GameScreen = props => {

    return(
        <View style = {styles.container}>
            <TouchableOpacity 
            style = {{alignSelf: 'flex-end', paddingRight: 10}}
            onPress = {() => props.navigation.navigate('Help')}>
                <View style = {{backgroundColor: 'yellow'}}>
                    <Text>
                        HELP
                    </Text>
                </View>
            </TouchableOpacity>
            
            <Text style = {{fontSize: 45, color: 'beige'}}>Baseball Bingo</Text>

            <View style = {styles.card}>
               <BingoButton tapID = '1'></BingoButton>
               <BingoButton tapID = '2'></BingoButton>
               <BingoButton tapID = '3'></BingoButton>
               <BingoButton tapID = '4'></BingoButton>
               <BingoButton tapID = '5'></BingoButton>

               <BingoButton tapID = '6'></BingoButton>
               <BingoButton tapID = '7'></BingoButton>
               <BingoButton tapID = '8'></BingoButton>
               <BingoButton tapID = '9'></BingoButton>
               <BingoButton tapID = '10'></BingoButton>
               
               <BingoButton tapID = '11'></BingoButton>
               <BingoButton tapID = '12'></BingoButton>
               <BingoButton tapID = '13'></BingoButton>
               <BingoButton tapID = '14'></BingoButton>
               <BingoButton tapID = '15'></BingoButton>

               <BingoButton tapID = '16'></BingoButton>
               <BingoButton tapID = '17'></BingoButton>
               <BingoButton tapID = '18'></BingoButton>
               <BingoButton tapID = '19'></BingoButton>
               <BingoButton tapID = '20'></BingoButton>

               <BingoButton tapID = '21'></BingoButton>
               <BingoButton tapID = '22'></BingoButton>
               <BingoButton tapID = '23'></BingoButton>
               <BingoButton tapID = '24'></BingoButton>
               <BingoButton tapID = '25'></BingoButton>
               
            </View>
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
      card: {
        alignItems: 'center',
        backgroundColor: '#29802d',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'center'
      }
});

export default GameScreen;
