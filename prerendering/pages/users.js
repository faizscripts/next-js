import axios from "axios";

const UsersList = ({users}) => {
    return(
        <>
            <h1>List of users</h1>
            {users.map(
                user => {
                    return(
                        <div key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    )
            })}
        </>
    )
}

export default UsersList

export async function getStaticProps() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(response.data);
    return{
        props:{
            users: response.data
        }
    }
}