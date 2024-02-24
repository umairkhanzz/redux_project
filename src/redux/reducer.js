import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  subtotal: 0,
  shipping: 0,
  tax: 0,
  total: 0
};

export const cartReducer = createReducer(initialState, builder => {
  builder
    addtoCart: (state , action) => {
        const item  = action.payload;
        const isItemFound = state.cartItems.find((i) => i.id === item.id);
        if(isItemFound){
            state.cartItems.forEach((i) => {
                if(i.id == item.id){
                    i.quantity+=1;
                }
            })
        }
        else{
            state.cartItems.push(item);
        }
    }
    decrement: (state , action) => {
        const item  = action.payload;
        const isItemFound = state.cartItems.find((i) => i.id === item.id);
        if(isItemFound.quantity > 1){
            state.cartItems.forEach((i) => {
                if(i.id == item.id){
                    i.quantity-=1;
                }
            })
        }
    }
    deleteitem: (state , action) => {
        const item  = action.payload;
        state.cartItems = state.cartItems.filter((i) => i.id !== item.id);
    }
    calculatePrice: (state) => {
        const sum = 0;
        state.cartItems.forEach((i) => (sum += i.price * i.quantity));
        state.subtotal = sum;
        state.shipping = state.subtotal > 1000 ? 0 : 200;
        state.tax = (state.subtotal * 10).toFixed();
        state.total = state.subtotal + state.shipping + state.tax; 
    }
});




// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   cartItems: [],
//   subtotal: 0,
//   shipping: 0,
//   tax: 0,
//   total: 0
// };

// const cartReducer = createReducer(initialState, builder => {
//   builder
//     .addCase('addToCart', (state, action) => {
//         const item  = action.payload;
//         const isItemFound = state.cartItems.find((i) => i.id === item.id);
//         if(isItemFound){
//             state.cartItems.forEach((i) => {
//                 if(i.id === item.id){
//                     i.quantity += 1;
//                 }
//             });
//         }
//         else{
//             state.cartItems.push({...item, quantity: 1});
//         }
//         state.subtotal = state.cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
//         state.shipping = state.subtotal > 1000 ? 0 : 200;
//         state.tax = (state.subtotal * 0.1).toFixed(2);
//         state.total = parseFloat(state.subtotal) + state.shipping + parseFloat(state.tax);
//     })
//     .addCase('decrement', (state , action) => {
//         const item  = action.payload;
//         const foundItem = state.cartItems.find((i) => i.id === item.id);
//         if(foundItem && foundItem.quantity > 1){
//             foundItem.quantity -= 1;
//             state.subtotal = state.cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
//             state.shipping = state.subtotal > 1000 ? 0 : 200;
//             state.tax = (state.subtotal * 0.1).toFixed(2);
//             state.total = parseFloat(state.subtotal) + state.shipping + parseFloat(state.tax);
//         }
//     })
//     .addCase('deleteItem', (state , action) => {
//         const item  = action.payload;
//         state.cartItems = state.cartItems.filter((i) => i.id !== item.id);
//         state.subtotal = state.cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
//         state.shipping = state.subtotal > 1000 ? 0 : 200;
//         state.tax = (state.subtotal * 0.1).toFixed(2);
//         state.total = parseFloat(state.subtotal) + state.shipping + parseFloat(state.tax);
//     });
// });

// export default cartReducer;
