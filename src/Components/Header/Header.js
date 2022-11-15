import React from "react";
import "./Header.css";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1 data-text="WEB DEVELOPMENT AND WEBSITES PROMOTION">
          WEB DEVELOPMENT AND WEBSITES PROMOTION
        </h1>
        <Button href="contact" variant="warning">
          CONTACT ME
        </Button>
      </div>
    </div>
  );
};
export default Header;
