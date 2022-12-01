import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Announcement from "./Announcement";

function MyAnnouncement({ drinkingText,
    smokingText,
    visitsFrequencyText,
    loudnessText,
    userID
}) {

    const deleteAnnouncement = async () => {
        let res = await fetch(`http://localhost:3300/api/announcementDelete`, {
            method: "POST",
            body: JSON.stringify({
                announcementID: announcement.announcementID,
                refUserID: announcement.userID
            }),
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json());
        setAnnouncement(res.announcement);
    }

    const handleDelete = () => {
        deleteAnnouncement();
        window.sessionStorage.setItem("announcementID", null)
        window.sessionStorage.setItem("houseID", null)
        navigate("/home")
    }


    const fetchAnnouncement = async () => {
        let res = await fetch(`http://localhost:3300/api/announcement/${window.sessionStorage.getItem("announcementID")}`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json());
        setAnnouncement(res.announcement);
    }


    useEffect(() => {
        if (!isNaN(window.sessionStorage.getItem("announcementID")))
        fetchAnnouncement();
    }, [])

    const navigate = useNavigate();

    const addAnnouncement = async () => {
        let res = await fetch("http://localhost:3300/api/announcements/add", {
            body: JSON.stringify({
                refUserID: userID,
                location: location,
                houseDescription: houseDescription
            }),
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json());
        window.sessionStorage.setItem("location", location);
        window.sessionStorage.setItem("houseDescription", houseDescription);
        window.sessionStorage.setItem("announcementID", res.announcementID);
        window.location.reload(false);

    }


    const handleAddAnnouncement = async () => {
        if (location === "") {
            alert("The location field is mandatory. Please input where you want to live")
        }
        else {
            addAnnouncement();
        }
    }

    const [location, setLocation] = useState("");
    const [houseDescription, setHouseDescription] = useState("");
    const [announcement, setAnnouncement] = useState("loading")

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
                            <input type="text" className="form-control" placeholder="house address" value={location} onChange={(e) => { setLocation(e.target.value) }} />
                            {/* House description */}
                            <label className="form-label">House description:</label>
                            <textarea placeholder="Please keep this empty if you do not have a house." style={{ width: "100%" }} onChange={(e) => { setHouseDescription(e.target.value) }} />

                            <div className="buttons-container">
                                <button type="submit" className="btn btn-primary" >Save</button></div>
                        </form>
                    </div>
                </>
                :
                <>
                    {announcement === "loading" ?
                        <h1>Loading...</h1>
                        :
                        <Announcement drinkingText={drinkingText} smokingText={smokingText} visitsFrequencyText={visitsFrequencyText} loudnessText={loudnessText} announcement={announcement} />
                    }
                    <div className="buttons-container">
                        <button className="btn btn-danger" onClick={handleDelete}>Delete announcement</button>
                        <Link className="btn btn-success" to={"/EditAnnouncement"} >Edit announcement</Link>
                    </div>
                </>
            }

        </>



    )
}
export default MyAnnouncement;