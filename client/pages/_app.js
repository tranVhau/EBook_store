import "@/styles/globals.css";
import Layout from "../components/layout/Layout";

import { Provider } from "react-redux";
import { wrapper } from "../store/index";

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
