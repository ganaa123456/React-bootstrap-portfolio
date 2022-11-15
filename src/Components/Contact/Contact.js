import React from "react";
import "./Contact.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <Container className="contact-container">
      <h1 className="text-center text-warning mb-4">CONTACT ME</h1>
      <p className="text-center mb-5">
        Please fill out the form and describe you project needs and i'll contact
        you as soon as possible.
      </p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className="" type="name" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="number" placeholder="Phone Number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      </Form>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Subject" />
          <Button>CONTACT ME</Button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      </Form>
    </Container>
  );
};
export default Contact;
