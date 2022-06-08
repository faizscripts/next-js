import Link from "next/link";

const HomePage = () => {
    return(
        <div>
            <h1>The Home Page</h1>
            <ul>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
            </ul>
        </div>
    )
}

export default HomePage