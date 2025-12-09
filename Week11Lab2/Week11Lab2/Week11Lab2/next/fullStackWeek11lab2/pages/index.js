import MeetupList from '../components/meetups/MeetupList'
import { useContext, useState } from "react";
import GlobalContext from "./store/globalContext"

function HomePage() {
    const globalCtx = useContext(GlobalContext)

    const [search, setSearch] = useState("")

    if (globalCtx.theGlobalObject.dataLoaded == true) {
       // return <MeetupList meetups={globalCtx.theGlobalObject.meetings} />
        const filteredMeetings = globalCtx.theGlobalObject.meetings.filter(meeting => meeting.title.toLowerCase().includes(search.toLowerCase()) ||(meeting.description
            && meeting.description.toLowerCase().includes(search.toLowerCase()))
        )


    


        return (
            <div>
                <h1>All Meetings</h1>

                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search meetings..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    style={{
                        padding: "10px",
                        width: "100%",
                        maxWidth: "400px",
                        margin: "10px 0 20px 0",
                        borderRadius: "5px",
                        border: "1px solid #ccc"
                    }}
                />

                {/* List of filtered meetings */}
                <MeetupList meetups={filteredMeetings} />
            </div>
        )
    }

    return <div>Loading data from database, please wait . . . </div>
}

export default HomePage
