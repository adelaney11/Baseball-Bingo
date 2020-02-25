import React, { Component } from 'react';
import { TouchableHighlight, Text, View, Dimensions} from 'react-native';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false
    };
  }

  componentDidUpdate(prevState) {
    if (prevState.isSelected !== this.state.isSelected) {
      console.log("State Updated: isSelected - ", this.state.isSelected);
    }
  }

  toggleSelected = () => {
    this.setState({
      isSelected: !this.state.isSelected
    });
  };

  render() {
    const { item, key } = this.props;
    return (
      <TouchableHighlight key={key} onPress={() => this.toggleSelected()}>
        <View style = {{
                backgroundColor: 'white',
                width: (Dimensions.get('window').width / 5) - 10,
                height: 80,
                borderColor: 'black',
                borderWidth: 2,
                justifyContent: 'center',
                }}>
          <Text style = {{alignSelf: 'center'}}>{item}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}