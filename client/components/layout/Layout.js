import { useDetectScroll } from "@smakss/react-scroll-direction";

import AlertCross from "./header/AlertCross";
import MainNaviagtionBar from "./header/MainNaviagtionBar";
import Footer from "./footer/Footer";

function Layout(props) {
  const [scrollDir] = useDetectScroll({});

  return (
    <div className="">
      {
        <div
          className={`${
            scrollDir !== "down" ? "translate-y-0" : "-translate-y-full"
          } fixed z-10 w-full ease-in-out duration-500`}
        >
          {/* <AlertCross /> */}
          <MainNaviagtionBar />
        </div>
      }
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
