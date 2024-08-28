import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

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

const ComponentOne = () => {
  const text = useSelector((state) => state.text);
  const dispatch = useDispatch();

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={(newText) => dispatch(setText(newText))}
        placeholder="Type here..."
      />
    </View>
  );
};

const Task39 = () => {
  const [isComponentVisible, setComponentVisible] = useState(true);

  const handleToggle = () => {
    setComponentVisible(!isComponentVisible);
  };

  return (
    <View>
      {isComponentVisible ? <ComponentOne /> : null}
      <Button
        title={isComponentVisible ? 'Hide Component One' : 'Show Component One'}
        onPress={handleToggle}
      />
    </View>
  );
};

const App = () => (
  <Provider store={store}>
    <Task39 />
  </Provider>
);

export default App;
