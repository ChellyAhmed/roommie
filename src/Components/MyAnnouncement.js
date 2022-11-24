import { Link } from "react-router-dom";
import Announcement from "./Announcement";

function MyAnnouncement({ drinkingText,
    smokingText,
    visitsFrequencyText,
    loudnessText, }) {

    const announcement = { announcementID: 3, fullName: "John Doe", email: "John.doe@smu.tn", gender: "female", about: "Hi I'm cool!", school: "MSB", phoneNumber: "12345678", budget: 400, drinking: 1, smoking: 1, visitsFrequency: 5, loudness: 4, location: "Lac2", houseDescription: "Appartment S+2 Lac 2. All commodities included and well furnished. 3-min walk away from uni" };


    return (
        <>
            {(announcement.announcementID == null) ?
                <>
                    <h1 className="page-title" >My announcement</h1>
                    <div className="box">
                        <p>You do not have any announcement for the moment. <strong>Create your announcement right now!</strong></p>
                        <form>
                            {/* Location */}
                            <label className="form-label">Location:</label>
                            <input type="text" className="form-control" placeholder="house address" />
                            {/* House description */}
                            <label className="form-label">House description:</label>
                            <textarea placeholder="Type here a short description about the house." style={{ width: "100%" }}></textarea>

                            <div className="buttons-container">
                                <Link className="btn btn-primary" >Save</Link></div>
                        </form>
                    </div>
                </>
                :
                <>
                    <Announcement drinkingText={drinkingText} smokingText={smokingText} visitsFrequencyText={visitsFrequencyText} loudnessText={loudnessText} />
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