import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CartProvider from "./store/CartProvider";
import Store from "./pages/store";
import Home from "./pages/Home";
import Root from "./pages/Root";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/products/:productId", element: <Product /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
