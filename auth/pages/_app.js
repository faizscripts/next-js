import {SessionProvider} from "next-auth/react";
import Navbar from "../components/Navbar";
import '../styles/globals.css'
import '../components/Navbar.css'

function MyApp({Component, pageProps}) {
    return (
        <>
            <SessionProvider>
                <Navbar/>
                <Component {...pageProps} />
            </SessionProvider>
        </>
    )
}

export default MyApp
