import { useDetectScroll } from "@smakss/react-scroll-direction";

import AlertCross from "./header/AlertCross";
import MainNaviagtionBar from "./header/MainNaviagtionBar";
import Footer from "./footer/Footer";
import Cart from "../cart/Cart";
import Login from "../Auth/Login";

function Layout(props) {
  // for hidden header while scroll down
  const [scrollDir] = useDetectScroll({});

  return (
    <div>
      {
        <div
          className={`${
            scrollDir !== "down" ? "translate-y-0" : "-translate-y-full"
          } fixed z-20 w-full ease-in-out duration-500`}
        >
          {/* <AlertCross /> */}
          <MainNaviagtionBar />
        </div>
      }
      <Login />
      <Cart />
      <main className="py-16 ">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
