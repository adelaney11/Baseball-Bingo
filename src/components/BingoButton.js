import React, { useState, useReducer } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';


const BingoButton = ({tapID}) => {
    
    const [color, setColor] = useState('white');
    const [marked, setMarked] = useState([]);
    const [myArray, dispatch] = useReducer((myArray, { type, value }) => {
        switch (type) {
          case "add":
            return [...myArray, value];
          case "remove":
            return myArray.filter((_, index) => index !== value);
          default:
            return myArray;
        }
      }, []);
    const sol1 = ['1', '5', '21', '25']

    const markPlay = () => {
        if (color === 'white'){
            setColor('#b8b8ab');
        } else {
            setColor('white');
        }
        console.log(myArray)
        if (myArray.indexOf(tapID) === -1) {
            dispatch({type: "add", value: tapID});
        }
        else {
            dispatch({type: "remove", value: tapID})
        }
        console.log(myArray)

        var containsAll = sol1.every(i => myArray.includes(i));
    
    }
    
    return(
        <TouchableOpacity
        onPress={()=> markPlay()}>
            <View style = {{
                backgroundColor: color,
                width: (Dimensions.get('window').width / 5) - 10,
                height: 80,
                borderColor: 'black',
                borderWidth: 2,
                justifyContent: 'center',
                }}>
                <Text style = {{alignSelf: 'center'}}>
                !!
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({

});


export default BingoButton;
