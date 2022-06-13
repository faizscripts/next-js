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
                return (
                    <li key={project.id}>
                        <Link href={{
                            pathname: "/portfolio/[projectId]",
                            query: {projectId: project.id}
                        }}>{project.name}</Link>
                    </li>
                )
            }
        )
    }

    return(
        <div>
            <h1>This is the portfolio page</h1>
            <h2>Projects</h2>
            <ul>
                {renderProjects()}
            </ul>
            <button onClick={() => router.push("/")}>Home page</button>
        </div>
    )
}

export default Portfolio