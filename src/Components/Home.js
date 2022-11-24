import { useState } from "react";
import Ad from "./Ad";
import SingleAnnouncement from "./SingleAnnouncement";

function Home({
    drinkingText,
    smokingText,
    visitsFrequencyText,
    loudnessText,
}) {

    const [budget, setBudget] = useState("10000");

    const announcements = [
        { announcementID: 0, fullName: "John Doe", email: "John.doe@smu.tn", gender: "male", about: "Hi I'm cool!", school: "MSB", phoneNumber: "12345678", budget: 400, drinking: 1, smoking: 1, visitsFrequency: 3, loudness: 5, location: "Lac2", houseDescription: null },
        { announcementID: 1, fullName: "John Doe", email: "John.doe@smu.tn", gender: "male", about: "Hi I'm cool!", school: "MSB", phoneNumber: "12345678", budget: 400, drinking: 0, smoking: null, visitsFrequency: 1, loudness: 3, location: "L'Aouina", houseDescription: "Appartment S+2 Lac 2. All commodities included and well furnished. 3-min walk away from uni" },
        { announcementID: 2, fullName: "John Doe", email: "John.doe@smu.tn", gender: "female", about: "Hi I'm cool!", school: "MSB", phoneNumber: "12345678", budget: 400, drinking: 0, smoking: 1, visitsFrequency: 4, loudness: 4, location: "Lac2", houseDescription: null },
        { announcementID: 3, fullName: "John Doe", email: "John.doe@smu.tn", gender: "female", about: "Hi I'm cool!", school: "MSB", phoneNumber: "12345678", budget: 400, drinking: 1, smoking: 1, visitsFrequency: 5, loudness: 4, location: "Lac2", houseDescription: "Appartment S+2 Lac 2. All commodities included and well furnished. 3-min walk away from uni" },
        { announcementID: 4, fullName: "John Doe", email: "John.doe@smu.tn", gender: "female", about: "Hi I'm cool!", school: "MSB", phoneNumber: "12345678", budget: 400, drinking: null, smoking: 0, visitsFrequency: 2, loudness: 1, location: "Lac2", houseDescription: null },
        { announcementID: 5, fullName: "John Doe", email: "John.doe@smu.tn", gender: "male", about: "Hi I'm cool!", school: "MSB", phoneNumber: "12345678", budget: 400, drinking: 0, smoking: null, visitsFrequency: 3, loudness: 1, location: "Lac2", houseDescription: null },
    ];
    return (
        <>
            <div className="page-title"> <h1>Roommie's announcements</h1></div>
            <div className="home" >
                <div className="filters box">
                    <h3>Advanced search</h3>
                    <form>
                        <label>School:</label><br />
                        <input type={"radio"} id="MSB" name="school" value={"MSB"} /> <label htmlFor="MSB">MSB</label><br />
                        <input type={"radio"} id="MedTech" name="school" value={"MedTech"} /> <label htmlFor="MedTech">MedTech</label><br />
                        <input type={"radio"} id="schoolBoth" name="school" value={"%"} defaultChecked /> <label htmlFor="schoolBoth">Both</label><br />
                        <label>Gender:</label><br />
                        <input type={"radio"} id="male" name="gender" value={"male"} /> <label htmlFor="male">Male</label><br />
                        <input type={"radio"} id="female" name="gender" value={"female"} /> <label htmlFor="female">Female</label><br />
                        <input type={"radio"} id="genderBoth" name="gender" value={"%"} defaultChecked /> <label htmlFor="genderBoth">Both</label><br />
                        <label>Max Budget {"(tnd)"}:</label><br />
                        <input type="number" className="form-control" placeholder="budget in TND" value={budget} onChange={(e) => {
                            setBudget(e.target.value);
                            if (e.target.value < 0) {
                                setBudget(0);
                                alert("budget cannot be negative!");
                            }
                        }} />

                        <label>Interested in Roommies who already have a house?</label>   <br />
                        <input type={"radio"} id="hasHouse" name="house" value={"hasHouse"} /> <label htmlFor="hasHouse">Roommies with a house:</label> <br />
                        <input type={"radio"} id="NotHaveHouse" name="house" value={"NotHaveHouse"} defaultChecked /> <label htmlFor="NotHaveHouse">All roommies:</label>
                    </form>
                    <button className="btn btn-primary" > Update results </button>
                </div>
                <div className="announcements-list" >
                    {announcements.map(
                        (announcement) => {
                            return (<SingleAnnouncement announcement={announcement} key={announcement.announcementID} drinkingText={drinkingText}
                                smokingText={smokingText}
                                visitsFrequencyText={visitsFrequencyText}
                                loudnessText={loudnessText} />);
                        }
                    )}

                </div>
            </div>
            <Ad/>
        </>
    )

}
export default Home;