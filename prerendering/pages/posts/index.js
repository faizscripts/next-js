import axios from "axios";
import Link from "next/link";

const Posts = ({posts}) => {
    return(
        <div>
            PostList
            {posts.map(
                post => {
                    return(
                        <div key={post.id}>
                            <Link href={`/posts/${post.id}`}>
                                <h2>{post.id} {post.title} </h2>
                            </Link>
                            <hr/>
                        </div>
                    )
                }
            )}
        </div>
    )
}

export default Posts

export async function getStaticProps() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

    return {
        props: {
            posts: response.data.slice(0,3)
        }
    }
}