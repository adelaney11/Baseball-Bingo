import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, FlatList} from 'react-native';


const glossary = [
    {
        title: 'ABBREVIATIONS:'
    },
    {
        title: '1B = Single'
    },
    {
        title: '2B = Double'
    },
    {
        title: '3B = Triple'
    },
    {
        title: 'HR = Home Run'
    },
    {
        title: 'GS = Grand Slam'
    },
    {
        title: 'DP = Double Play'
    },
    {
        title: 'PB = Passed Ball'
    },
    {
        title: 'WP = Wild Pitch'
    },
    {
        title: 'SB = Stolen Base'
    },
    {
        title: 'CS = Caught Stealing'
    },
    {
        title: 'IBB = Intentional Walk'
    },
    {
        title: 'BB = Walk'
    },
    {
        title: 'K = Strike Out Swinging'
    },
    {
        title: 'E = Error'
    },
];

const gameDetails = [
    {
        title: 'HOW TO PLAY:'
    },
    {
        title: 'One square per play. For example, if a home run is hit, choose HR or RBI, but not both. 6 to 4 to 3 Double Play can be DP, 6 to 4, or 4 to 3.'
    },
    {
        title: '--------------------------'
    },
    {
        title: 'HOW TO WIN:'
    },
    {
        title: '5 squares in a row (column, row, or diagonal) OR 4 corners.'
    }
];

const HelpScreen = props => {
    return (
        <View style = {styles.container}>
            <Image 
            style = {styles.image}
            source = {require('../assets/bbingoplays.png')} />
            <View style = {styles.lists}>
                <FlatList 
                style = {{flex: .5}}
                data = {glossary}
                renderItem = {({item}) => (
                    <Text style = {styles.helpText}>
                        {item.title}
                    </Text>
                )}
                keyExtractor = {item => item.title}
                />
                <FlatList
                style = {{flex: .5}}
                data = {gameDetails}
                renderItem = {({item}) => (
                    <Text style = {styles.helpText}>
                        {item.title}
                    </Text>
                )}
                keyExtractor = {item => item.title}
                />
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
    image: {
        width: Dimensions.get('window').width,
        resizeMode: 'contain'
    },
    lists: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
    },
    helpText: {
        color: 'beige',
        fontSize: 16,
        fontWeight: "500",
    }

});

export default HelpScreen;