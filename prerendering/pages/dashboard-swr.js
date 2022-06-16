import useSWR from "swr"
import axios from "axios";

function DashboardSWR() {
    const fetcher = async () => {
        const response = await axios.get("http://localhost:4000/dashboard")
        return response.data
    }

    const {data, error} = useSWR('dashboard', fetcher)

    if (error) return <h1>An error occured!</h1>
    if (!data) return <h1>Loading...</h1>

    const {posts, likes, followers, following} = data

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Posts - {posts}</h2>
            <h2>Likes - {likes}</h2>
            <h2>Followers - {followers}</h2>
            <h2>Following - {following}</h2>
        </div>
    )
}

export default DashboardSWR