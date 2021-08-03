// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';

const store = configureStore({
  // Merging reducers together into one ROOT reducer
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
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
