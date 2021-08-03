import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCartState = { isShown: false };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    toggle(state) {
      state.isShown = !state.isShown;
    },
  },
});

const store = configureStore({
  // Creating one root reducer
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;
export default store;
