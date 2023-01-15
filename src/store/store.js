import { createSlice, configureStore } from "@reduxjs/toolkit";
import data from "./data";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, totalPrice: 0 },
  reducers: {
    addItemToCart(state, action) {
      const { newItemId } = action.payload;
      const existingItem = state.items.find((item) => item.id === newItemId);
      state.totalQuantity++;

      if (!existingItem) {
        state.totalPrice = data[newItemId].price * action.payload.quantity;
        state.items.push({
          id: newItemId,
          quantity: action.payload.quantity,
          name: data[newItemId].slug,
        });
      } else {
        console.log("shevida addshi", existingItem.quantity);
        // existingItem.quantity = action.payload.quantity;
        existingItem.quantity = existingItem.quantity + action.payload.quantity;
        state.totalPrice =
          state.totalPrice + data[newItemId].price * action.payload.quantity;
      }
    },
    removeItemFromCart(state, action) {
      const { id } = action.payload;

      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      console.log("shevida removshi", existingItem.quantity);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalPrice = state.totalPrice - data[id].price;
      } else {
        existingItem.quantity--;
        state.totalPrice = state.totalPrice - data[id].price;
      }
    },
    removeAll(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;

export default store;
