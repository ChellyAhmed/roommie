import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function EditAnnouncement() {

    const fetchAnnouncement = async () => {
        let res = await fetch(`http://localhost:3300/api/announcement/${window.sessionStorage.getItem("announcementID")}`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json());
        setAnnouncement(res.announcement);
    }

    const update = async () => {
        await fetch("http://localhost:3300/api/announcementUpdate", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            announcementID: announcement.announcementID,
            userID: announcement.userID,
            location: location,
            houseDescription: houseDescription,
            oldLocation: announcement.location,
            oldHouseDescription: announcement.houseDescription
          }),
        });
        window.sessionStorage.setItem("location" , location);
        window.sessionStorage.setItem("houseDescription" , houseDescription);
         window.location.href = "/MyAnnouncement" ;
        
    }
    
    useEffect(() => {
        fetchAnnouncement();
    })


    const [announcement, setAnnouncement] = useState("loading");
    const [location, setLocation] = useState(window.sessionStorage.getItem("location"));
    const [houseDescription, setHouseDescription] = useState(window.sessionStorage.getItem("houseDescription"));
    
    return (
        <>
            <h1 className="page-title">Edit Announcement</h1>
                <div className="box" >
                    <form>
                        {/* Location */}
                        <label className="form-label">Location:</label>
                        <input type="text" className="form-control" placeholder="house address" value={location}  onChange={(e) => {setLocation(e.target.value)}}/>
                        {/* House description */}
                        <label className="form-label">House description:</label>
                        <textarea style={{ width: "100%" }} value={houseDescription}  onChange={(e) => {setHouseDescription(e.target.value)}}/>
                        <div className="buttons-container">
                            <button className="btn btn-primary" onClick={update}>Save</button>
                            <Link className="btn btn-secondary" to="/MyAnnouncement">Cancel</Link>
                        </div>
                    </form>
                </div>

        </>
    );
}
export default EditAnnouncement;