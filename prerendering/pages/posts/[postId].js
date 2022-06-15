import axios from "axios";

function Post({post}) {

    return(
        <>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
        </>
    )
}

export default Post

export async function getStaticPaths() {

    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

    const pathsArray = response.data.map(
        post => {
            return {
                params: {
                    postId: `${post.id}`
                }
            }
        }
    )

    return{
        paths: [
            {params: {postId: "1"}},
            {params: {postId: "2"}},
            {params: {postId: "3"}}
        ],
        fallback: "blocking"
    }
}

export async function getStaticProps(context) {
    const {params} = context

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

        return{
            props: {
                post: response.data
            }
        }
    } catch (e) {
        return{
            notFound: true
        }
    }
}