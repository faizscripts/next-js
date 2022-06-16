import {comments} from "../../../data/comments";

export default function handler (req, res) {
    if (req.method === "GET"){
        res.status(200).json(comments)
    } else if (req.method === "POST"){
        const text = req.body.text
        const comment = {
            id: Date.now(),
            text: text
        }
        comments.push(comment)
        res.status(201).json(comments)
    }
}