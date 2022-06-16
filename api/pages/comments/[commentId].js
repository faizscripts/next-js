import {comments} from "../../data/comments";

const CommentDetails = ({comment}) => {
    return (
        <div>
            <h2>
                {comment.id} {comment.text}
            </h2>
        </div>
    )
}

export default CommentDetails

export async function getStaticPaths() {
    return{
        paths: [
            {params: {commentId: "1"}},
            {params: {commentId: "2"}},
            {params: {commentId: "3"}}
        ],
        fallback: false
    }
}

export async function getStaticProps(context) {
    const {params} = context
    const {commentId} = params

    const comment = comments.find(comment => comment.id === parseInt(commentId))

    return {
        props: {
            comment
        }
    }
}