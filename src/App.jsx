import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CartProvider from "./store/CartProvider";
import Store from "./pages/store";
import Home from "./pages/Home";
import Root from "./pages/Root";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
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
