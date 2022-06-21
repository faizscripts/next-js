import {signIn, useSession} from "next-auth/react";

function Dashboard() {

    const{status} = useSession()

    console.log(status);

    if (status === "loading"){
        return <h1>Loading...</h1>
    }

    if (status === "unauthenticated"){
         signIn()
    }

    return(
        <div>
            <h1>Dashboard page</h1>
        </div>
    )
}

export default Dashboard