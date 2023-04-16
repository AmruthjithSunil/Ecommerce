import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useRef } from "react";

export default function Contact() {
  const name = useRef();
  const email = useRef();
  const phone = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const user = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
    };
    console.log(user);
    name.current.value = "";
    email.current.value = "";
    phone.current.value = "";
    fetch("https://haha-1b803.firebaseio.com/users.json", {
      method: "POST",
      body: JSON.stringify(user),
    });
  }

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter name" ref={name} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={email} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter phone number"
            ref={phone}
          />
        </Form.Group>
        <Button variant="primary" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
