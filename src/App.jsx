import styled from "styled-components";
import Container from "react-bootstrap/Container";

import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Footer from "./components/UI/Footer";
import CartProvider from "./store/CartProvider";
import custom from "./custom";

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

const Head = styled.div`
  color: white;
  height: 150px;
  background: ${custom.color1};
  text-align: center;
`;

const Title = styled.h1`
  font-size: 100px;
`;

const SubHead = styled.h2`
  text-align: center;
  color: black;
`;

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <Head>
        <Title>The Generics</Title>
      </Head>
      <SubHead>Music</SubHead>
      <Container>
        <div className="row">
          {productsArr.map((product) => (
            <Product key={product.title} product={product} />
          ))}
        </div>
      </Container>
      <Footer />
    </CartProvider>
  );
}
