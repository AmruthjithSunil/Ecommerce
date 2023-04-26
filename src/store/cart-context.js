import React from "react";

const CartContext = React.createContext({
  id: "",
  token: "",
  email: "",
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  updateItems: (items) => {},
  updateToken: (token) => {},
  updateEmail: (email) => {},
  logout: () => {},
});

export default CartContext;
