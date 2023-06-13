import FooterComponent from "components/FooterComponent";
import NavbarComponent from "components/NavbarComponent";
import React from "react";

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <NavbarComponent />
      {props.children}
      <FooterComponent page={props.page} />
    </React.Fragment>
  );
};

export default MainLayout;
