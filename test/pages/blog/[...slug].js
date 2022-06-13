import {useRouter} from "next/router";

const Blog = () => {

    const router = useRouter()

    console.log(router.query);

    return(
        <div>
            <h1>Blog page</h1>
        </div>
    )
}

export default Blog