import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>鄭政文的個人網站</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp
