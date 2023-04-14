import { useState } from "react";
import CartContext from "./cart-context";

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const cartContext = {
    items,
    addItem(item) {
      setItems((items) => {
        const element = items.find((el) => el.id === item.id);
        if (element === undefined) {
          return [{ ...item, quantity: 1 }, ...items];
        }
        return items.map((el) =>
          el.id === item.id ? { ...item, quantity: el.quantity + 1 } : el
        );
      });
    },
    removeItem(id) {
      setItems((items) => {
        const element = items.find((el) => el.id === id);
        if (element.quantity === 1) {
          return items.filter((el) => el.id !== id);
        }
        return items.map((el) =>
          el.id === id ? { ...element, quantity: el.quantity - 1 } : el
        );
      });
    },
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
