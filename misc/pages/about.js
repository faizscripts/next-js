import Head from "next/head";
import Footer from "../components/layout/Footer";

function About() {
    console.log(process.env.DB_PASSWORD)
    return (
        <>
            <Head>
                <title>About page</title>
                <meta name="description" content="A next js about page" />
            </Head>
            <h3>About page</h3>
        </>
    )
}

export default About

About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer/>
        </>
    )
}