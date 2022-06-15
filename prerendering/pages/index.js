import Link from "next/link";

const Home = () => {
    return(
        <>
            <h1>Next Pre Rendering</h1>
            <Link href="/users">
                Users
            </Link>
            <br/>
            <Link href="/posts">Posts</Link>
        </>
    )
}

export default Home