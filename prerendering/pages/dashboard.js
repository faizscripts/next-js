import {useState, useEffect} from "react";
import axios from "axios";

function Dashboard() {
    const [loading, setLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState(null)

    useEffect(() => {
        fetchDashboardData()
    }, [])

    const fetchDashboardData = async () => {
        const response = await axios.get("http://localhost:4000/dashboard")

        setDashboardData(response.data)
        setLoading(false)
    }

    if (loading) {
        return <h1>Loading....</h1>
    }

    const {posts, likes, followers, following} = dashboardData

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

export default Dashboard