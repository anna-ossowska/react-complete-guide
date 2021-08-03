import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

// With Redux Toolkit we are allowed to mutate the state
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  // functions intended to handle a specific action type, equivalent to a single case statement in a switch
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
