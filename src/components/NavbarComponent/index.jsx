import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Form } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ReactComponent as List } from "assets/img/list.svg";
import { ReactComponent as Login } from "assets/img/house-door.svg";

import "./index.css";
import RightSlider from "./RightSlider";
import { useSelector } from "react-redux";

const NavbarComponent = (props) => {
  const [showSlider, setShowSlider] = useState(false);
  const profile = useSelector((state) => state.authData.profile);

  const onClickMoreMenuOption = () => {
    setShowSlider(!showSlider);
  };

  return (
    <React.Fragment>
      <RightSlider handleShow={onClickMoreMenuOption} show={showSlider} />
      <Navbar expand="lg" variant="light" bg="light" className="ra-navbar">
        <Container>
          <div className="nav-brand">
            <Link to={"/"}>deliveroo</Link>
          </div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Tossed - St Martin's Lane"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav className="right-items">
            {profile.email ? (
              <img src={profile.picture} alt="profile" />
            ) : (
              <Link to={"/signup"}>
                <span>
                  <Login color="#00ccbc" height={25} width={20} />
                </span>
                Sign up or log in
              </Link>
            )}
            <div className="more-menu" onClick={onClickMoreMenuOption}>
              <List width={20} height={25} color="#00ccbc" />
              <span>Menu</span>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default NavbarComponent;
