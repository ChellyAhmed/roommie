import male from "./male.png";
import female from "./female.png";
import { Link } from "react-router-dom";

function SingleAnnouncement({ announcement,
    drinkingText,
    smokingText,
    visitsFrequencyText,
    loudnessText, }) {

    return (
        <div className="box" >

            {announcement.gender === "male" ?
                <h3><img src={male} alt="male avatar" style={{ height: "1em" }} /><span style={{ color: "rgb(32,198, 248)" }}>{" " + announcement.fullName + " "}</span><span style={{ fontSize: "0.5em" }}>{announcement.email}</span></h3>
                :
                <h3><img src={female} alt="female avatar" style={{ height: "1em" }} /><span style={{ color: "rgb(247,117, 172)" }}>{" " + announcement.fullName + " "}</span><span style={{ fontSize: "0.5em" }}>{announcement.email}</span></h3>}
            <ul>
                <li><b>School:</b> {announcement.school}</li>
                <li><b>Budget:</b> {announcement.budget + " TND"}</li>
                <li><b>Drinking:</b> {drinkingText(announcement.drinking)}</li>
                <li><b>Smoking:</b> {smokingText(announcement.smoking)}</li>
                <li><b>House guests:</b> {visitsFrequencyText(announcement.visitsFrequency)}</li>
                <li><b>Loudness:</b> {loudnessText(announcement.loudness)}</li>
            </ul>
            {announcement.houseDescription != null && <span className="notification-alert" style={{ float: "left" }}><b>This Roommie has a house.</b></span>}
            <div style={{ width: "100%", textAlign: "right" }}>

                <Link to={"/Announcement/" + announcement.announcementID}>Check out</Link>
            </div>
        </div>
    )

}
export default SingleAnnouncement;