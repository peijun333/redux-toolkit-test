import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "~/store";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
