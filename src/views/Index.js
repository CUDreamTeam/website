/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";




// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import MainButton from "components/Buttons/MainButton.js";


import Image from "react-router-dom";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <Container fluid className="mainContainer">
        <Row className="mainRow">
          <Col lg="9" md="6" sm="0" className="d-flex d-none d-md-block gameplaySide  justify-content-center ">
            <h1 className="comingSoon align-self-center text-center">Game coming soon!<br></br>4/27/2020</h1>
          </Col>
          <Col lg="3" md="6" sm="12" className="mainBar d-flex justify-content-center">
            <Container className="align-self-center">
              <img src={require("assets/img/testlogo.png")} className="logoRightImage"></img>
              <h1 className="mainTitle display-4 text-center">Welcome to WarCrimes.io</h1>
              {/* <MainButton text="About Us" link="/landing-page"/> */}
              <p className="copyrightText small text-center">All Rights Reserved. Made by CU Dream Team. 2020.</p>
            </Container>
            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LandingPage;
