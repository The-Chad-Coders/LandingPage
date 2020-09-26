/** @jsx jsx */
import { AppProps } from 'next/app';
import { jsx, ThemeProvider } from "theme-ui";
import Head from '../components/head';
import '../styles/global.scss';
import theme from "../theme";


const App = ({ Component, pageProps }: AppProps) => (
    <ThemeProvider theme={theme}>
        <div sx={{ fontFamily: 'body' }}>
            <Head />
            <Component {...pageProps} />
        </div>
    </ThemeProvider>
);

export default App;
