import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCartState = {
  isShown: true,
  totalAmount: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    toggle(state) {
      state.isShown = !state.isShown;
    },
    addItem(state, action) {
      state.totalAmount++;
      const newItem = action.payload;
      console.log(newItem);

      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          description: newItem.description,
          quantity: newItem.quantity,
          total: newItem.price * newItem.quantity,
        });
      } else {
        existingItem.quantity++;
        existingItem.total = existingItem.total + existingItem.price;
      }
    },

    removeItem(state) {
      state.totalAmount--;
    },
  },
});

const store = configureStore({
  // Creating one root reducer
  reducer: cartSlice.reducer,
});

console.log(cartSlice.actions);

export const cartActions = cartSlice.actions;
export default store;
