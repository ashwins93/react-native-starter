import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const styles = StyleSheet.create({});
const keepColorRange = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
const reducer = (state, action) => {
  switch (action.type) {
    case 'red':
      return { ...state, red: keepColorRange(state.red + action.payload) };
    case 'green':
      return { ...state, green: keepColorRange(state.green + action.payload) };
    case 'blue':
      return { ...state, blue: keepColorRange(state.blue + action.payload) };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        color="Red"
        increase={() =>
          dispatch({
            type: 'red',
            payload: 15,
          })
        }
        decrease={() =>
          dispatch({
            type: 'red',
            payload: -15,
          })
        }
      />
      <ColorCounter
        color="Green"
        increase={() =>
          dispatch({
            type: 'green',
            payload: 15,
          })
        }
        decrease={() =>
          dispatch({
            type: 'green',
            payload: -15,
          })
        }
      />
      <ColorCounter
        color="Blue"
        increase={() =>
          dispatch({
            type: 'blue',
            payload: 15,
          })
        }
        decrease={() =>
          dispatch({
            type: 'blue',
            payload: -15,
          })
        }
      />
      <View
        style={{
          height: 200,
          marginVertical: 10,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
