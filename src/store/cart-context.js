import React from "react";

const CartContext = React.createContext({
  token: "",
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  updateToken: (token) => {},
});

export default CartContext;
