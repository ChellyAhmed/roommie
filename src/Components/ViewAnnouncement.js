import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Announcement from "./Announcement";

function ViewAnnouncement({drinkingText,
    smokingText,
    visitsFrequencyText,
    loudnessText,}){
    const { id } = useParams();
    const fetchAnnouncement = async () => {
        let res = await fetch(`http://localhost:3300/api/announcement/${id}`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json());
        setAnnouncement(res.announcement);
    }

    useEffect(() => {
        fetchAnnouncement();
    })

    const [announcement , setAnnouncement] = useState("loading");
    
    return(
       announcement === "loading"?
       <div className="box">
        <h1>Loading...</h1>
       </div>
       :
       <Announcement drinkingText={drinkingText} smokingText={smokingText} visitsFrequencyText={visitsFrequencyText} loudnessText={loudnessText} announcement={announcement} />
    )
}
export default ViewAnnouncement