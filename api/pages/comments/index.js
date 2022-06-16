import {useState} from "react";
import axios from "axios";

function Comments() {

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState("")

    const fetchComments = async () => {
        const response = await axios.get("/api/comments")
        setComments(response.data)
    }

    const onCommentSubmit = async () => {
        await axios.post('/api/comments', {
            text: comment
        })
    }

    const deleteComment = async(commentId) => {
        await axios.delete(`/api/comments/${commentId}`)

        fetchComments()
    }

    return(
        <div>
            <input type="text" value={comment} onChange={event => setComment(event.target.value)} />
            <button onClick={onCommentSubmit} >Submit Comment</button>
            <button onClick={fetchComments}>Load comments</button>
            {comments.map(comment => {
                return(
                    <div key={comment.id}>
                        {comment.id} {comment.text}
                        <button onClick={() => deleteComment(comment.id)} >Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Comments