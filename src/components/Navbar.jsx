import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import OffCanvas from "./UI/OffCanvas";
import CartContext from "../store/cart-context";

export default function NavBar() {
  const cartCtx = useContext(CartContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <Nav.Link>
            <Button onClick={handleShow}>Cart</Button>
            <Badge bg="secondary">
              {cartCtx.items.reduce((acc, item) => acc + item.quantity, 0)}
            </Badge>
          </Nav.Link>
        </Nav>
        <OffCanvas show={show} handleClose={handleClose} />
      </Container>
    </Navbar>
  );
}
