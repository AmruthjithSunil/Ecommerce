import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import { Link } from "react-router-dom";

const Frame = styled.div`
  margin: 10px 0;
  border: solid;
  padding: auto;
  text-align: center;
`;

export default function Product({ product }) {
  const cartCtx = useContext(CartContext);

  function clickHandler() {
    cartCtx.addItem({ ...product, id: product.title });
  }

  return (
    <Frame className="col-6">
      <Link to={`/products/${product.title}`}>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={product.imageUrl}
        />
      </Link>
      <div className="d-flex">
        <p>${product.price}</p>
        <Button onClick={clickHandler}>ADD TO CART</Button>
      </div>
    </Frame>
  );
}
