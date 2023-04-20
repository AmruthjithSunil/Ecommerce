import { useEffect, useState } from "react";
import CartContext from "./cart-context";

export default function CartProvider({ children }) {
  const endpoint = "60717ab4145547e58bd76322acbc75de";
  const crudcrudUrl = `https://crudcrud.com/api/${endpoint}`;
  const [id, setId] = useState(0);
  const [items, setItems] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    fetch(
      `${crudcrudUrl}/${localStorage
        .getItem("email")
        .replaceAll("@", "")
        .replaceAll(".", "")}/`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setId(data[0]._id);
          setItems(data[0].cart);
        }
      });
  }, []);

  useEffect(() => {
    if (id === 0) {
      fetch(
        `${crudcrudUrl}/${localStorage
          .getItem("email")
          .replaceAll("@", "")
          .replaceAll(".", "")}/`,
        {
          method: "POST",
          body: JSON.stringify({ cart: items }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setId(data._id));
    } else {
      fetch(
        `${crudcrudUrl}/${localStorage
          .getItem("email")
          .replaceAll("@", "")
          .replaceAll(".", "")}/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({ cart: items }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data._id));
    }
  }, [items]);

  const cartContext = {
    token,
    items,
    addItem(item) {
      setItems((items) => {
        const element = items.find((el) => el.id === item.id);
        if (element === undefined) {
          return [{ ...item, quantity: 1 }, ...items];
        } else {
          return items.map((el) =>
            el.id === item.id ? { ...item, quantity: el.quantity + 1 } : el
          );
        }
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
    updateToken(token) {
      setToken(token);
    },
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
