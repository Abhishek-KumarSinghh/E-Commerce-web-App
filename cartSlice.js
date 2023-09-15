import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts: []
}

// card slice
const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {

        // add to cart
        addToCart: (state, action) => {

            const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
            //item present in cart
            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qnty += 1
            }
            //item not present in cart
            else {
                const temp = { ...action.payload, qnty: 1 }
                state.carts = [...state.carts, temp]

            }
        },

        // delete perticular iteam from cart
        removeToCart:(state,action)=>{
            const data = state.carts.filter((ele)=>ele.id !== action.payload);
            state.carts = data
        },

        // remove single iteams
        removeSingleIteams:(state,action)=>{
            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if(state.carts[IteamIndex_dec].qnty >=1){
                state.carts[IteamIndex_dec].qnty -= 1
            }

        },

        // empty cart
        emptycartIteam:(state,action)=>{
            state.carts = []
        }
    }
});

export const { addToCart,removeToCart,removeSingleIteams ,emptycartIteam} = cartSlice.actions;

export default cartSlice.reducer;   
