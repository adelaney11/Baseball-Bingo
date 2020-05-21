import React, { Component } from 'react';
import { TouchableHighlight, Text, View, Dimensions} from 'react-native';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
      color: 'white',
    };
  }

  componentDidUpdate(prevState) {
    if (prevState.isSelected !== this.state.isSelected) {
      console.log("State Updated: isSelected - ", this.state.isSelected);
      console.log(this.props["item"]);
    }
  }

  toggleSelected = () => {
    this.setState({
      isSelected: !this.state.isSelected
    });
    if (this.state.color == 'white') {
      this.props.addPlay(this.props["index"]);
      this.state.color = 'grey';
    } else {
      this.props.removePlay(this.props["index"]);
      this.state.color = 'white';
    }

  };

  render() {
    const { item, key } = this.props;
    return (
      <TouchableHighlight key={key} onPress={() => this.toggleSelected()}>
        <View style = {{
                backgroundColor: this.state.color,
                width: (Dimensions.get('window').width / 5) - 10,
                height: 80,
                borderColor: 'black',
                borderWidth: 2,
                justifyContent: 'center',
                }}>
          <Text style = {{alignSelf: 'center', fontFamily: 'Avenir-BookOblique'}}>{item}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}