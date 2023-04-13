import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const Frame = styled.div`
  margin: 10px 0;
  border: solid;
  padding: auto;
  text-align: center;
`;

export default function Product({ product }) {
  return (
    <Frame className="col-6">
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={product.imageUrl}
      />
      <div className="d-flex">
        <p>${product.price}</p>
        <Button>ADD TO CART</Button>
      </div>
    </Frame>
  );
}
