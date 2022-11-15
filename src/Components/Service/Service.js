import React from "react";
import "./Service.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Service = () => {
  return (
    <Container className="service-container">
      <h1 className="service text-danger">MY SERVICES</h1>
      <Row>
        <Col>
          <Card style={{ width: "14rem" }}>
            <Card.Body className="text-center bg-success">
              <i class="fa-regular fa-computer service-i"></i>
              <Card.Title>Web Design</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "14rem" }}>
            <Card.Body className="text-center bg-secondary">
              <i class="fa-solid fa-code service-i"></i>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "14rem" }}>
            <Card.Body className="text-center bg-primary">
              <i class="fa-brands fa-facebook service-i"></i>
              <Card.Title>Facebook Ads SMM</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "14rem" }}>
            <Card.Body className="text-center bg-warning">
              <i class="fa-brands fa-google service-i"></i>
              <Card.Title>Google Ads</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Service;
