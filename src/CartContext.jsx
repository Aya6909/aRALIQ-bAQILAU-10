import{createContext, useReducer, useContext}from 'react';
import './App.css'


const initialState ={
  cart:[]
};

function cartReducer(state, action){
  switch(action.type){
    case "ADD_ITEM":
      return{cart:[...state.cart, action.payload]};

    case"REMOVE_ITEM":
      return{
        cart: state.cart.filter((item, index)=> index !== action.payload)
      };

    case "CLEAR_CART":
      return{cart:[]};
    default:
      return state;
  }
}

const CartContext = createContext();

export function CartProvider({ children }){
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return(
    <CartContext.Provider value={{ state, dispatch }}>
      {children} </CartContext.Provider>
  );}

export function useCart(){
  return useContext(CartContext);
}


