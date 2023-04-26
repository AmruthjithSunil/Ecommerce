import { useEffect, useState } from "react";
import CartContext from "./cart-context";

export default function CartProvider({ children }) {
  const endpoint = "68ee35e910e44243bf73ac237698d2e4";
  const link = `https://crudcrud.com/api/${endpoint}`;

  if (!localStorage.getItem("email")) {
    localStorage.setItem("email", "null");
  }

  if (!localStorage.getItem("token")) {
    localStorage.setItem("token", "null");
  }

  const initEmail = localStorage.getItem("email");

  const [email, setEmail] = useState(initEmail);
  const [items, setItems] = useState([]);
  const [id, setId] = useState("");

  async function initializeOrFetchItemsFromBackend() {
    if (email === "null") {
      return;
    }
    const res = await fetch(link);
    const emails = await res.json();
    const em = email.replaceAll("@", "").replaceAll(".", "");
    if (emails.includes(em)) {
      const response = await fetch(`${link}/${em}`);
      const data = await response.json();
      setItems(data[0].cart);
      setId(data[0]._id);
    } else {
      const response = await fetch(`${link}/${em}`, {
        method: "POST",
        body: JSON.stringify({ cart: [] }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setId(data[0]._id);
    }
  }

  useEffect(() => {
    initializeOrFetchItemsFromBackend();
  }, []);

  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (email !== "null") {
      const em = email.replaceAll("@", "").replaceAll(".", "");
      fetch(`${link}/${em}/${id}`, {
        method: "PUT",
        body: JSON.stringify({ cart: items }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }, [JSON.stringify(items)]);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    localStorage.setItem("email", email);
    initializeOrFetchItemsFromBackend();
  }, [email]);

  const cartContext = {
    id,
    token,
    email,
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
    updateItems(items) {
      setItems(items);
    },
    updateToken(token) {
      setToken(token);
    },
    updateEmail(email) {
      setEmail(email);
    },
    logout() {
      setToken("null");
      setEmail("null");
    },
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
