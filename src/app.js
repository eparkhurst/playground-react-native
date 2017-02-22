import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Other from './components/Other';
import reducers from './reducers';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.viewStyle}>
          <Text>Hey Homie</Text>
          <Other />
        </View>
      </Provider>
    );
  }
}

const styles = {
  viewStyle: {
    marginTop: 20
  }
};

export default App;
