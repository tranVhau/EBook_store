import React from "react";
import AlertCross from "./header/AlertCross";
import MainNaviagtionBar from "./header/MainNaviagtionBar";
import Footer from "./footer/Footer";

function Layout(props) {
  return (
    <div>
      <AlertCross />
      <MainNaviagtionBar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
