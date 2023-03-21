import React from "react";
import AboutApp from "./Comp.About";
import Footer from "./Comp.Footer";
import GetStarted from "./Comp.GetStarted";

const HomeScreen = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <AboutApp />
      <br />
      <br />
      <GetStarted />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default HomeScreen;
