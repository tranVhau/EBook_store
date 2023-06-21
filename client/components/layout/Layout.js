import { useState, useEffect } from "react";
import { useDetectScroll } from "@smakss/react-scroll-direction";

import AlertCross from "./header/AlertCross";
import MainNavigationBar from "./header/MainNavigationBar";
import Footer from "./footer/Footer";
import Cart from "../cart/Cart";
import Authentication from "../Auth/Authentication";
import TopScroller from "../ui/buttons/TopScroller";

function Layout(props) {
  // for hidden header while scroll down
  const [scrollDir] = useDetectScroll({});
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {
        <div
          className={`${
            scrollDir !== "down" ? "translate-y-0" : "-translate-y-full"
          } fixed z-20 w-full ease-in-out duration-500`}
        >
          {/* <AlertCross /> */}
          <MainNavigationBar />
        </div>
      }
      <Authentication />
      <Cart />

      <main className="pt-16 bg-white ">{props.children}</main>
      <TopScroller goToTop={scrollToTop} isVisible={isVisible} />
      <Footer />
    </div>
  );
}

export default Layout;
