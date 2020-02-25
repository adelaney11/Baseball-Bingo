import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Button from '../components/BingoButton';

export default class GameScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pregeneratedValues: ['SOS', 'E', '8', '7', '6', 'SOL', '5', '9', '4', '3', '2', '6 TO 3', '4 TO 3', '5 TO 3', '6 TO 4', '4 TO 6', 'DP', 'RPLY -'], // array of your values
      array: [] // What's on the generated card from forLoopDoes24Times in componentDidMount
    };
  }

  // LIFECYCLE METHODS
  // Before the render function below renders for the first time, this will happen
  componentDidMount() {
    // Want to populate empty array in state above
    this.forLoopDoes24Times();
  }
  componentDidUpdate(prevState) {
    // After forLoopDoes24Times has been run, if the old state and new state don't match, log the new state
    if (prevState.array !== this.state.array) {
      console.log("New Array: ", this.state.array);
    }
  }

  forLoopDoes24Times = () => {
    // Cannot update the state directly, so copy the current state, which is empty
    const newArray = [...this.state.array];

    // Generate a random number 25 times and push the value to the newArray
    // Or for this project, select random value from pregeneratedValues 25 times
    for (i = 0; i < 24; i++) {
      const randomVal = Math.random(); // CHANGE THIS
      newArray.push(randomVal);
    }

    // Update the state
    this.setState({
      array: newArray
    });
  };

  // For each button, get item value and index as i
  renderButton = (item, i) => {
    return <Button item={item} key={i} />;
  };

  // render() {} must be called on every class component
  render() {
    return (
      <View style = {styles.container}>
        
        
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


