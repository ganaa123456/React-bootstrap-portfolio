import React from "react";
import "./About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import ganaa from "../Header/img/240600184_876665016303870_4835812178367131341_n.jpg";
const About = () => {
  return (
    <Container className="about-container">
      <Row>
        <Col>
          <Image className="about-img" src={ganaa} Image />
        </Col>
        <Col>
          <h2>ABOUT ME</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default About;
