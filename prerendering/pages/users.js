import axios from "axios";
import User from "../components/user";

const UsersList = ({users}) => {
    return(
        <>
            <h1>List of users</h1>
            {users.map(
                user => {
                    return(
                        <div key={user.id}>
                            <User user={user} />
                        </div>
                        )
                }
            )}
        </>
    )
}

export default UsersList

export async function getStaticProps() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return{
        props:{
            users: response.data
        }
    }
}