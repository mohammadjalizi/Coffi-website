import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [
"mohamamd"
  ],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
    // action.payload => product From API => القيمة التى بداخل الاقواس
  reducers: {
    addToCart: (state, action) => {
  // action.payload => product From API => القيمة التى بداخل الاقواس
      const productWithQuntitiy={...action.payload, "quantity":1}
      state.selectedProducts.push(productWithQuntitiy)
    },

    increaseQuantity: (state, action) => {
      // action.payload => product From user 
     const increaseproduct=state.selectedProducts.find((item)=>{

return  item === action.payload

     })
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