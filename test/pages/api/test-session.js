import {getSession} from "next-auth/react";

export default async function handler(req, res) {
    const session = await getSession({req})

    console.log(session);

    if (!session){
        res.status(401).json({error: 'An error occured'})
    }

    res.status(200).json({message: 'SUCCESS'})
}