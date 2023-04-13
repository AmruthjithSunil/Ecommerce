import styled from "styled-components";
import Container from "react-bootstrap/Container";
import custom from "../custom";

const Frame = styled.div`
  height: 100px;
  background: ${custom.color2};
`;

const Title = styled.h1`
  font-size: 50px;
  color: white;
`;

export default function Footer() {
  return (
    <Frame>
      <Container>
        <Title>The Generics</Title>
      </Container>
    </Frame>
  );
}
