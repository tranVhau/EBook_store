import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import Layout from "../components/layout/Layout";

import { Provider } from "react-redux";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default App;
