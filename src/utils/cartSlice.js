import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // [{item, quantity}]
  },
  reducers: {
    addItem: (state, action) => {
      const idx = state.items.findIndex(
        (i) => i.item.card.info.id === action.payload.card.info.id
      );
      if (idx > -1) {
        state.items[idx].quantity += 1;
      } else {
        state.items.push({ item: action.payload, quantity: 1 });
      }
    },
    incrementItem: (state, action) => {
      const idx = state.items.findIndex(
        (i) => i.item.card.info.id === action.payload
      );
      if (idx > -1) {
        state.items[idx].quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const idx = state.items.findIndex(
        (i) => i.item.card.info.id === action.payload
      );
      if (idx > -1) {
        state.items[idx].quantity -= 1;
        if (state.items[idx].quantity <= 0) {
          state.items.splice(idx, 1);
        }
      }
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, incrementItem, decrementItem, removeItem, clearCart } =
  cartSlice.actions;
