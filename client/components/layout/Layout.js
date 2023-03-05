import { useDetectScroll } from "@smakss/react-scroll-direction";

import AlertCross from "./header/AlertCross";
import MainNaviagtionBar from "./header/MainNaviagtionBar";
import Footer from "./footer/Footer";

function Layout(props) {
  const [scrollDir] = useDetectScroll({});

  return (
    <div>
      {
        <div
          className={`${
            scrollDir !== "down" ? "translate-y-0" : "-translate-y-full"
          } fixed z-50 w-full ease-in-out duration-500`}
        >
          {/* <AlertCross /> */}
          <MainNaviagtionBar />
        </div>
      }
      <main className="py-16 ">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
