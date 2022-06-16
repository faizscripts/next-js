import {useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";

function Events({events}) {

    const [stateEvents, setStateEvents] = useState(events)
    const router = useRouter()

    const fetchSportsEvents = async () => {
        const response = await axios.get("http://localhost:4000/events?category=sports")
        setStateEvents(response.data)
        router.push("/events?category=sports", undefined, {shallow: true})
    }

    return(
        <div>
            <button onClick={fetchSportsEvents}>Sports Events</button>
            <h1>List of events</h1>
            {stateEvents.map(event => {
                const {id, title, date, category, description} = event
                return(
                    <div key={id}>
                        <h2>
                            {id} {title} {date} | {category}
                        </h2>
                        <p>{description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Events

export async function getServerSideProps(context) {
    const {query} = context
    const {category} = query
    const queryString = category ? "category=sports" : ""
    const response = await axios.get(`http://localhost:4000/events?${queryString}`)

    return{
        props: {
            events: response.data
        }
    }
}