import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { ReactComponent as Login } from "assets/img/house-door.svg";

const RightSlider = (props) => {
  return (
    <>
      <Offcanvas
        show={props.show}
        onHide={props.handleShow}
        {...props}
        placement={"end"}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="nav-brand">
              <Link to={"/"}>deliveroo</Link>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link to={"/signup"}>
            <span>
              <Login color="#ffffff" height={25} width={20} />
            </span>
            Sign up or log in
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default RightSlider;
