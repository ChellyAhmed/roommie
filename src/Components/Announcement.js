import { useParams } from "react-router-dom";
import male from "./male.png";
import female from "./female.png";
import { useEffect, useState } from "react";

function Announcement({ drinkingText,
    smokingText,
    visitsFrequencyText,
    loudnessText,
    announcement
}) {

    return (
        <>
            <h1 className="page-title">Announcement of {announcement.fullName}</h1>
            
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
                        <li><b>Phone number:</b> {(announcement.phoneNumber)}</li>
                    </ul>
                    <p><b>About:</b><br />{announcement.about}</p>
                    {announcement.houseDescription != null &&
                        <>
                            <h3>This Roommie has a house!</h3>
                            <ul>
                                <li><b>location:</b> {announcement.location}</li>
                                <li><b>House houseDescription:</b>
                                    <p>{announcement.houseDescription}</p>
                                </li>
                            </ul>
                        </>}
                </div>
        </>

    )
}
export default Announcement;