import React from "react";
import "./footer.css";

const FooterComponent = (props) => {
  return (
    <footer
      className="footer-wrapper"
      style={{ position: props.page === "home" ? "relative" : "fixed" }}
    >
      <p>© All right reserved.</p>
    </footer>
  );
};

export default FooterComponent;
