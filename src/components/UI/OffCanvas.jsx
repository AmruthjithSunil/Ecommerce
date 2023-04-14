import { useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Table from "react-bootstrap/Table";
import CartContext from "../../store/cart-context";

export default function OffCanvas({ show, handleClose }) {
  const cartCtx = useContext(CartContext);

  function removeHandler(id) {
    return function () {
      cartCtx.removeItem(id);
    };
  }

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
            {cartCtx.items.map((el) => (
              <tr key={el.id}>
                <td>{el.title}</td>
                <td>{el.price}</td>
                <td>{el.quantity}</td>
                <td onClick={removeHandler(el.id)}>remove</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h3>
          Total :{" "}
          {cartCtx.items.reduce((acc, el) => acc + el.quantity * el.price, 0)}
        </h3>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
