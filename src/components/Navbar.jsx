import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { useState } from "react";

import OffCanvas from "./UI/OffCanvas";

export default function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="w-3/4">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Store</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>
            <Button onClick={handleShow}>Cart</Button>
            <Badge bg="secondary">0</Badge>
          </Nav.Link>
        </Nav>
        <OffCanvas show={show} handleClose={handleClose} />
      </Container>
    </Navbar>
  );
}
