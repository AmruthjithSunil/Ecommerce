import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import CartContext from "../store/cart-context";

export default function NavBar() {
  const cartCtx = useContext(CartContext);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="w-3/4">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/store">
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            Contact
          </Nav.Link>
          {cartCtx.token === "null" && (
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          )}
          {cartCtx.token !== "null" && (
            <Nav.Link onClick={cartCtx.logout}>Logout</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
