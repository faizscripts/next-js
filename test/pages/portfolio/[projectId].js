import {useRouter} from "next/router";

const ProjectPage = () => {

    const router = useRouter()

    console.log(router.query);

    return(
        <div>
            <h1>This is the projectIds page</h1>
        </div>
    )
}

export default ProjectPage