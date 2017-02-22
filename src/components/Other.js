import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Button from './Button';
import * as actions from '../actions';


class Other extends Component {
  chooseStyle() {
    if (Number(this.props.number) > 0) {
      return [styles.numberStyle, styles.green];
    } else if (Number(this.props.number) < 0) {
      return [styles.numberStyle, styles.red];
    }
    return styles.numberStyle;
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={this.chooseStyle()}>{this.props.number}</Text>
        <Button onPress={() => this.props.increase()} >Increase</Button>
        <Button onPress={() => this.props.decrease()}>Decrease</Button>
      </View>
    );
  }
}

const styles = {
  numberStyle: {
    fontSize: 60,
  },
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  red: {
    color: 'red'
  },
  green: {
    color: 'green'
  }
};

const mapStateToProps = (state) => {
  const number = state.basic;
  return { number };
};

export default connect(mapStateToProps, actions)(Other);
