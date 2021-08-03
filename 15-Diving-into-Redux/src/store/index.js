import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

// With Redux Toolkit we are allowed to mutate the state
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // functions intended to handle a specific action type, equivalent to a single case statement in a switch
  // The fns in the object will be used to generate string action type constants
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

console.log(counterSlice);

const store = configureStore({
  reducer: counterSlice.reducer,
});

// We want to connect React app to this store
export default store;

// Without Redux Toolkit state MUST NOT be mutated
// We must return a brand new state object for every action type

// const store = createStore(counterReducer);

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'decrement') {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === 'toggle') {
//     return { counter: state.counter, showCounter: !state.showCounter };
//   }

//   return state;
// };
