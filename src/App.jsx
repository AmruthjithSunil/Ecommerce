import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CartProvider from "./store/CartProvider";
import Store from "./pages/store";
import Home from "./pages/Home";
import Root from "./pages/Root";
import About from "./pages/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
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
