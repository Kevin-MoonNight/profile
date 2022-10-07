import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/footer';

const title: string = "Cheng Cheng-Wen Personal Website";

const description: string =
    "I'm Kevin, I've been studying programming since I was in high school," +
    "and I've participated some programming competitions and gotten some good results," +
    "now I'm working in lab.";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp
