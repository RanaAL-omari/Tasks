import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const SET_TEXT = 'SET_TEXT';

const setText = (text) => ({
  type: SET_TEXT,
  payload: text,
});

const textReducer = (state = { text: '' }, action) => {
  switch (action.type) {
    case SET_TEXT:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

const store = createStore(textReducer);

class ComponentOneClass extends Component {
  handleChangeText = (newText) => {
    this.props.setText(newText);
  };

  render() {
    const { text } = this.props;

    return (
      <View>
        <TextInput
          value={text}
          onChangeText={this.handleChangeText}
          placeholder="Type here..."
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.text,
});

const mapDispatchToProps = {
  setText,
};

const ConnectedComponentOneClass = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentOneClass);

class Task40 extends Component {
  state = {
    isComponentVisible: true,
  };

  handleToggle = () => {
    this.setState((prevState) => ({
      isComponentVisible: !prevState.isComponentVisible,
    }));
  };

  render() {
    const { isComponentVisible } = this.state;

    return (
      <View>
        {isComponentVisible ? <ConnectedComponentOneClass /> : null}
        <Button
          title={isComponentVisible ? 'Hide Component One' : 'Show Component One'}
          onPress={this.handleToggle}
        />
      </View>
    );
  }
}

const App = () => (
  <Provider store={store}>
    <Task40 />
  </Provider>
);

export default App;
