import {signIn, useSession} from "next-auth/react";

function Dashboard() {
    const {status} = useSession()

    if (status === "loading"){
       return <h1>Loading...</h1>
    } else if (status === "unauthenticated"){
        signIn()
    } else if (status === "authenticated"){
        return <h1>Dashboard</h1>
    }

}

export default Dashboard