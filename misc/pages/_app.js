import Head from "next/head";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import '../styles/globals.css'
import '../styles/layout.css'

function MyApp({Component, pageProps}) {

    if (Component.getLayout){
        return Component.getLayout(<Component {...pageProps} />)
    }

    return (
        <>
            <Head>
                <title>Faiz Ahmed</title>
                <meta name="description" content="A fullstack developer" />
            </Head>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default MyApp
