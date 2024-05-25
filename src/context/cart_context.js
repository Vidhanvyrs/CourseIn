import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  GET_CART_TOTAL,
} from "../actions";

// Function to load cart from local storage
const loadCartFromStorage = () => {
  let cart = localStorage.getItem("cart");
  console.log("Loaded cart from storage:", cart); // Debugging log
  if (cart) {
    try {
      return JSON.parse(cart);
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error); // Debugging log
      return [];
    }
  } else {
    console.log("No cart found in storage, returning empty array"); // Debugging log
    return [];
  }
};

const initialState = {
  cart: loadCartFromStorage(),
  total_items: 0,
  total_amount: 0,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (
    id,
    image,
    course_name,
    creator,
    discounted_price,
    category
  ) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        id,
        image,
        course_name,
        creator,
        discounted_price,
        category,
      },
    });
  };

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    dispatch({ type: GET_CART_TOTAL });
    console.log("Saving cart to storage:", state.cart); // Debugging log
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
