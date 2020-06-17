import "../styles/global.scss";
import { AppProps } from "next/app";
import Head from "../components/head";

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <Head />
    <Component {...pageProps} />
  </div>
);

export default App;
