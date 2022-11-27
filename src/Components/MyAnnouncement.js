import { useState } from "react";
import { Link } from "react-router-dom";
import Announcement from "./Announcement";

function MyAnnouncement({ drinkingText,
    smokingText,
    visitsFrequencyText,
    loudnessText, }) {


    const [announcement, setAnnouncement] = useState({
        announcementID: window.sessionStorage.getItem("announcementID"),
        fullName: window.sessionStorage.getItem("fullName"),
        email: window.sessionStorage.getItem("email"),
        gender: window.sessionStorage.getItem("gender"),
        about: window.sessionStorage.getItem("about"),
        school: window.sessionStorage.getItem("school"),
        phoneNumber: window.sessionStorage.getItem("phoneNumber"),
        budget: window.sessionStorage.getItem("budget"),
        drinking: window.sessionStorage.getItem("drinking"),
        smoking: window.sessionStorage.getItem("smoking"),
        visitsFrequency: window.sessionStorage.getItem("visitsFrequency"),
        loudness: window.sessionStorage.getItem("loudness"),
        location: window.sessionStorage.getItem("location"),
        houseDescription: window.sessionStorage.getItem("houseDescription"),
    })

    const addAnnouncement = async () => {
        let res = await fetch("http://localhost:3300/api/announcements/add", {
            body: JSON.stringify({
                refUserID: window.sessionStorage.getItem("userID"),
                location: location,
                houseDescription: houseDescription
            }),
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json());
        window.sessionStorage.setItem("location" , location);
        window.sessionStorage.setItem("houseDescription" , houseDescription);
        window.sessionStorage.setItem("announcementID" , res.announcementID);
        setAnnouncement({...announcement , location: location, houseDescription: houseDescription, announcementID: res.announcementID});
    }

    
    const handleAddAnnouncement = async () => {
        if (location == "") {
            alert("The location field is mandatory. Please input where you want to live")
        }
        else {
            addAnnouncement();
        }
    }

    const [location, setLocation] = useState("");
    const [houseDescription, setHouseDescription] = useState("");


    return (
        <>
            {(isNaN(announcement.announcementID)) ?
                <>
                    <h1 className="page-title" >My announcement </h1>
                    <div className="box">
                        <p>You do not have any announcement for the moment. <strong>Create your announcement right now!</strong></p>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleAddAnnouncement();
                        }}>
                            {/* Location */}
                            <label className="form-label">Location:</label>
                            <input type="text" className="form-control" placeholder="house address" value={location} onChange={(e) => {setLocation(e.target.value)}}/>
                            {/* House description */}
                            <label className="form-label">House description:</label>
                            <textarea placeholder="Please keep this empty if you do not have a house." style={{ width: "100%" }}  onChange={(e) => {setHouseDescription(e.target.value)}} />

                            <div className="buttons-container">
                                <button type="submit" className="btn btn-primary" >Save</button></div>
                        </form>
                    </div>
                </>
                :
                <>
                    <Announcement drinkingText={drinkingText} smokingText={smokingText} visitsFrequencyText={visitsFrequencyText} loudnessText={loudnessText} announcement={announcement} />
                    <div className="buttons-container">
                        <Link className="btn btn-danger" >Delete announcement</Link>
                        <Link className="btn btn-success" to={"/EditAnnouncement"} >Edit announcement</Link>
                    </div>
                </>
            }

        </>



    )
}
export default MyAnnouncement;