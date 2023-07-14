import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 selectproducts:[


 ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers:  {
    Addtocart:(state,action)=>{

console.log(donnnn)
    },
    increaseQuntity: (state) => {
     
    },
    deacresQuntitiy: (state) => {
     
    },
 
  },
})

// Action creators are generated for each case reducer function
export const { Addtocart,increaseQuntity, deacresQuntitiy } = counterSlice.actions

export default counterSlice.reducer