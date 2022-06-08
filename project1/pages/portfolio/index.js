import Link from "next/link";
import {useRouter} from "next/router";

const Portfolio = () => {

    const router = useRouter()

    const projects = [
        {id: 1, name: "bc-vote"},
        {id: 2, name: "amazon-cellular"},
        {id: 3, name: "netflix clone"}
    ]

    const renderProjects = () => {
        return projects.map(
            project => {
                return(
                    <li key={project.id}>
                        <Link
                            href={{
                                pathname: "/portfolio/[id]",
                                query: {id: project.id}
                            }}
                        >
                            {project.name}
                        </Link>
                    </li>
                )
            }
        )
    }

    const goHome = () => {
        router.push({
            pathname: "/"
        })
    }

    return(
        <div>
            <h1>Portfolio</h1>
            <ul>
                {renderProjects()}
            </ul>
            <button onClick={goHome}>Home page</button>
        </div>
    )
}

export default Portfolio