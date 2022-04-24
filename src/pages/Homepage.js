import React from "react";
import CardHolder from "../components/CardHolder";
import NavbarComp from "../components/Navbar";

const Homepage = ({ countries }) => {
  return (
    <>
      <NavbarComp />
      <CardHolder countries={countries} />
    </>
  );
};

export default Homepage;
