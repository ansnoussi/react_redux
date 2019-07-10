import React from 'react';
import CounterApp from './src/CounterApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  counter : 0
}
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'INCREASE_COUNTER' : return{counter : state.counter +1}
    case 'DECREASE_COUNTER' : return{counter : state.counter -1}
  }
  return state
}

const store = createStore(reducer);



export default class App extends React.Component {

  /**
   * Store : holds our state (THE STATE IS READ ONLY)
   * Action : State can be modified using actions (SIMPLE OBJECTS)
   * Dispatcher : sends Actions to the reducer
   * Reducer : receives the action and modifies the state and gives us the nes state
   * - pure functions
   * - only mandatory argument is the 'type'
   * Subscriber : listens for state change to update the ui
   */

  render () {   
  return (
    <Provider store = {store}>
      <CounterApp/>
    </Provider>
  );
  }
}
