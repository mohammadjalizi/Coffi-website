import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [
"mohammadf"
  ],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
    // action.payload => product From API => القيمة التى بداخل الاقواس
  reducers: {
    addToCart: (state, action) => {
  // action.payload => product From API => القيمة التى بداخل الاقواس
      const productWithQuntitiy={...action.payload, "quantitiy":1}
      state.selectedProducts.push=productWithQuntitiy
    },

    increaseQuantity: (state, action) => {
      // action.payload => product From user 
      console.log("doneeeeeeeeeeee")
    },

    decreaseQuantity: (state, action) => {
  // action.payload => product From user 
      console.log("doneeeeeeeeeeee")
    },

    deleteProduct: (state, action) => {
  // action.payload => product From user 
      console.log("doneeeeeeeeeeee")
    },
  },
});

//  دائماً هتنساهااااااااااااااااااااااااااااااااااااااع
export const {deleteProduct, addToCart, increaseQuantity, decreaseQuantity } = counterSlice.actions;

export default counterSlice.reducer;