import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Footer from "../components/UI/Footer";

const Head = styled.div`
  color: white;
  height: 150px;
  background: #777;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 100px;
`;

export default function Root() {
  return (
    <>
      <Navbar />
      <Head>
        <Title>The Generics</Title>
      </Head>
      <Outlet />
      <Footer />
    </>
  );
}
