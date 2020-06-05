import React, { Component } from 'react';
import { View, Text, Image,  StyleSheet, TouchableOpacity, Alert, Dimensions} from 'react-native';
import Button from '../components/BingoButton';

const possibleWins = [
  [0,4,20,24],
  [0,5,10,15,20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [23, 18, 13, 8, 3],
  [4, 9, 14, 19, 24],
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [19, 18, 17, 16, 15],
  [24, 23, 22, 21, 20],
  [0, 6, 12, 18, 24],
  [20, 16, 12, 8, 4]
];


export default class GameScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataA: ['SOS', 'E', '8', '7', '6', 'SOL', '5', '9', '4', '3', '2', '6 TO 3', '4 TO 3', '5 TO 3', '6 TO 4', '4 TO 6', 'DP', 'RPLY -'],
      dataB: ['2 TO 3', 'CS', 'WP', '3 TO 1', '1 TO 3', '1', '5 TO 4', '3 TO 4', '3 TO 6', '5 TO 6'],
      dataC: ['1B', '2B', 'HR', 'BB', '1 RBI', '2 RBI', 'SAC F', 'RPLY +'],
      dataD: ['3B', 'SB', '3 RBI', 'SAC B', 'PB', 'WP'],
      dataE: ['IBB', 'HBP', 'GS', 'OUT A', 'RD', 'D3K', 'BK', 'IFLY', 'P-OUT'],// array of values
      array: [], // What's on the generated card from forLoopDoes24Times in componentDidMount
      marked: [], // marked plays
      wins: []
    };
    this.addPlay = this.addPlay.bind(this);
    this.removePlay = this.removePlay.bind(this);
  }

  // LIFECYCLE METHODS
  // Before the render function below renders for the first time, this will happen
  componentDidMount() {
    // Want to populate empty array in state above
    this.newBoard();
  }
  componentDidUpdate(prevState) {
    // After forLoopDoes24Times has been run, if the old state and new state don't match, log the new state
    if (prevState.array !== this.state.array) {
      console.log("New Array: ", this.state.array);
    }
    if (prevState.marked !== this.state.marked) {
      console.log("Marked: ", this.state.marked);
      console.log("Wins: ", this.state.wins)
      if (this.state.marked.length == 4) {
        this.checkForWin(possibleWins[0]);
      } else if (this.state.marked.length >= 5) {
        var i;
        for (i = 0; i < possibleWins.length; i++){
          this.checkForWin(possibleWins[i]);
        }
      }
    }
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // function to get the plays from their respective dataArrays (which are based on probability)
  getBingoButton(dataArray, newArray) {
    var randomItem;
    switch (dataArray){
      case this.state.dataA:
        randomItem = this.state.dataA[Math.floor(Math.random() * this.state.dataA.length)];
        break;
      case this.state.dataB:
        randomItem = this.state.dataB[Math.floor(Math.random() * this.state.dataB.length)];
        break;
      case this.state.dataC:
        randomItem = this.state.dataC[Math.floor(Math.random() * this.state.dataC.length)];
        break;
      case this.state.dataD:
        randomItem = this.state.dataD[Math.floor(Math.random() * this.state.dataD.length)];
        break;
      case this.state.dataE:
        randomItem = this.state.dataE[Math.floor(Math.random() * this.state.dataE.length)];
        break;
    }
    if (newArray.indexOf(randomItem) !== -1){
      console.log("Already present from ${dataArray}")
    } 
    else {
      newArray.push(randomItem);
      this.shuffle(newArray);
    }
  }

  newBoard(){
    // empty the state
    this.setState({
      array: [],
      marked: [],
      wins: []
    });

    // fill the board and empty current wins (if any)
    const newArray =[]
    while (newArray.length <= 10) {
      this.getBingoButton(this.state.dataA, newArray);
    }
    while (newArray.length > 10 && newArray.length <= 16){
      this.getBingoButton(this.state.dataB, newArray);
    }
    while (newArray.length > 16 && newArray.length <= 20){
      this.getBingoButton(this.state.dataC, newArray);
    }
    while (newArray.length > 20 && newArray.length <= 23){
      this.getBingoButton(this.state.dataD, newArray);
    }
    if (newArray.length === 23) {
      this.getBingoButton(this.state.dataD, newArray);
    }
    if (newArray.length === 24) {
      this.getBingoButton(this.state.dataE, newArray);
    }

    // update the state
    this.setState({
      array: newArray,
      marked: []
    });
  }

  
  //add play to 
  addPlay(index){
    const newMarked = [...this.state.marked];
    if(newMarked.indexOf(index) !== -1){
      return;
    } else {
      newMarked.push(index);
    }
    this.setState({
        array: this.state.array,
        marked: newMarked,
      });
  }

  removePlay(index){
    const newMarked = [...this.state.marked];
    if(newMarked.indexOf(index) == -1){
      return;
    } else {
      newMarked.splice(newMarked.indexOf(index), 1);
    }
    this.setState({
      array: this.state.array,
      marked: newMarked,
    });
  }

  addWin(win){
    const newWins = [...this.state.wins];
    if(newWins.indexOf(win) !== -1){
      return;
    } else {
      newWins.push(win);
    }
    this.setState({
        array: this.state.array,
        wins: newWins,
      });
  }

  createTwoButtonAlert = () =>
  Alert.alert(
    "Bingo!",
    "You've won! Now what?",
    [
      {
        text: "Continue",
        onPress: () => console.log("continued game"),
        style: "cancel"
      },
      { text: "New Board", onPress: () => this.newBoard() }
    ],
    { cancelable: false }
  );

  newBoardConfirmAlert = () =>
  Alert.alert(
    "Are you sure you want a new board?",
    "You will lose any progress towards your current Bingo.",
    [
      {
        text: "Cancel",
        onPress: console.log("cancelled"),
        style: "cancel"
      },
      { text: "New Board", onPress: () => this.newBoard() }
    ],
    { cancelable: false }
  );

  isArrayInArray(arr, item){
    var item_as_string = JSON.stringify(item);
  
    var contains = arr.some(function(ele){
      return JSON.stringify(ele) === item_as_string;
    });
    return contains;
  }

  checkForWin(possibleWins){
    const result = possibleWins.every(val => this.state.marked.indexOf(val) !== -1);
    var win = possibleWins.filter((val) => { return possibleWins.every(val => this.state.marked.indexOf(val) !== -1);});

    const alreadyWon = this.isArrayInArray(this.state.wins, win)

    if (result == true && alreadyWon == false){
      console.log("WIN!!!!");
      this.createTwoButtonAlert();
      this.addWin(win);
    }
  };

  // For each button, get item value and index as i
  renderButton = (item, i) => {
    return <Button item={item} key={i} index = {i} addPlay = {this.addPlay} removePlay = {this.removePlay} />;
  };

  // render() {} must be called on every class component
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.helpContainer}>
          <TouchableOpacity 
          onPress = {() => this.newBoardConfirmAlert()}>
            <View>
              <Image
                style = {{
                  resizeMode: 'contain',
                  backgroundColor: 'transparent',
                  height: 100,
                  width: 100,
                }}
                source = {require('../assets/newboardbutton.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Help')}>
            <View>
              <Image
                style = {{
                  resizeMode: 'contain',
                  backgroundColor: 'transparent',
                  height: 100,
                  width: 100,
                }}
                source = {require('../assets/helpbutton.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style = {styles.card}>
          <React.Fragment>
            {/* Comment: for each value in this.state.value, create a button (mapping) for each value  */}
            {/* Below we aren't really calling the function, we are referencing the function */}
            {this.state.array.map(this.renderButton)}
          </React.Fragment>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#11873B'
    },
    helpContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#11873B',
      marginTop: Dimensions.get('window').height * .05
    },
    card: {
      flex: 4,
      alignItems: 'center',
      backgroundColor: '#11873B',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
    }
});


