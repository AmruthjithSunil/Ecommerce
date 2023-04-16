import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import styled from "styled-components";
import { useState, useContext } from "react";

import Product from "../components/Product";
import OffCanvas from "../components/UI/OffCanvas";
import CartContext from "../store/cart-context";
//bug vite

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const SubHead = styled.h2`
  text-align: center;
  color: black;
`;

const CartIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
`;

export default function Store() {
  const cartCtx = useContext(CartContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <CartIcon>
        <Button onClick={handleShow}>Cart</Button>
        <Badge bg="secondary">
          {cartCtx.items.reduce((acc, item) => acc + item.quantity, 0)}
        </Badge>
      </CartIcon>
      <OffCanvas show={show} handleClose={handleClose} />
      <SubHead>Music</SubHead>
      <Container>
        <div className="row">
          {productsArr.map((product) => (
            <Product key={product.title} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
}
