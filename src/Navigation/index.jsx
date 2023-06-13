import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import SignUpComponent from "components/SignUpComponent";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
