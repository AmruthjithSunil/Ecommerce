import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useContext, useRef } from "react";
import env from "../env";
import { Navigate } from "react-router-dom";
import CartContext from "../store/cart-context";

export default function Login() {
  const password = useRef();
  const email = useRef();

  const cartCtx = useContext(CartContext);

  async function submitHandler(e) {
    e.preventDefault();
    const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${env.apiKey}`;

    const res = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.ok) {
      cartCtx.updateToken(data.idToken);
      cartCtx.updateEmail(data.email);
    } else {
      alert(data.error.message);
    }
  }

  return (
    <Container>
      {cartCtx.token !== "null" && <Navigate to="/store" />}
      <Form>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={email} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            ref={password}
          />
        </Form.Group>
        <Button variant="primary" onClick={submitHandler}>
          Login
        </Button>
      </Form>
    </Container>
  );
}
