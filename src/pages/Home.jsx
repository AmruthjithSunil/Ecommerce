import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const Top = styled.div`
  background: #777;
  text-align: center;
`;

const Play = styled.button`
  height: 100px;
  width: 100px;
  border: solid 2px;
  border-color: #56ccf2;
  border-radius: 100px;
  color: #56ccf2;
  margin: 10px;
`;

const SubHead = styled.h2`
  text-align: center;
  color: black;
`;

const Tbody = styled.tbody`
  text-align: center;
`;

const tours = [
  { date: "JUL16", location: "DETROIT, MI", name: "DTE ENERGY MUSIC THEATRE" },
  { date: "JUL19", location: "TORONTO,ON", name: "BUDWEISER STAGE" },
  { date: "JUL16", location: "DETROIT, MI", name: "JIGGY LUBE LIVE" },
  { date: "JUL16", location: "DETROIT, MI", name: "AK-CHIN PAVILION" },
  { date: "JUL16", location: "DETROIT, MI", name: "T-MOBILE ARENA" },
  { date: "JUL16", location: "DETROIT, MI", name: "CONCORD PAVILION" },
];

export default function Home() {
  return (
    <>
      <Top>
        <Button>Get Our Latest Album</Button>
        <br />
        <Play>Play</Play>
      </Top>
      <SubHead>TOURS</SubHead>
      <Container>
        <Table>
          <Tbody>
            {tours.map((tour) => (
              <tr key={tour.name}>
                <td>{tour.date}</td>
                <td>{tour.location}</td>
                <td>{tour.name}</td>
                <button>BUY TICKETS</button>
              </tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </>
  );
}
