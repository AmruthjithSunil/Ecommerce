import Offcanvas from "react-bootstrap/Offcanvas";
import Table from "react-bootstrap/Table";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

export default function OffCanvas({ show, handleClose }) {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className="w-auto"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>CART</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {cartElements.map((el) => (
              <tr key={el.title}>
                <td>{el.title}</td>
                <td>{el.price}</td>
                <td>{el.quantity}</td>
                <td
                  onClick={() => {
                    console.log("removed");
                  }}
                >
                  remove
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h3>
          Total :{" "}
          {cartElements.reduce((acc, el) => acc + el.quantity * el.price, 0)}
        </h3>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
