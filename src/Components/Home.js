import { useEffect, useState } from "react";
import Ad from "./Ad";
import SingleAnnouncement from "./SingleAnnouncement";

function Home({
    drinkingText,
    smokingText,
    visitsFrequencyText,
    loudnessText,
}) {

    const [announcements, setAnnouncements] = useState("none");
    const [school, setSchool] = useState("both");
    const [gender, setGender] = useState("both");
    const [budget, setBudget] = useState("10000");
    const [house, setHouse] = useState("any");

    const fetchAnnouncements = async () => {
        let res = await fetch("http://localhost:3300/api/announcements", {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json());
        setAnnouncements(res.announcements);
    }

    const updateAnnouncements = async (e) => {
        e.preventDefault();
        let api = "http://localhost:3300/api/announcements/" + school + "/" + gender + "/" + budget + "/" + house ;
        let res = await fetch(api , {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json());
        setAnnouncements(res.announcements);
        if (res.announcements.length>0){
        }
        else {
            setAnnouncements("none");
        }
    }

    useEffect(() => {
        fetchAnnouncements();
    }, [])


    return (
        <>
            <div className="page-title"> <h1>Roommie's announcements</h1></div>
            <div className="home" >

                {/* Filters section */}
                <div className="filters box">
                    <h3>Advanced search</h3>
                    <form onSubmit={(e) => { updateAnnouncements(e) }} >
                        <label>School:</label><br />
                        <input type={"radio"} id="MSB" name="school" value={"MSB"} onChange={(e) => { setSchool(e.target.value) }} /> <label htmlFor="MSB">MSB</label><br />
                        <input type={"radio"} id="MedTech" name="school" value={"MedTech"} onChange={(e) => { setSchool(e.target.value) }} /> <label htmlFor="MedTech">MedTech</label><br />
                        <input type={"radio"} id="schoolBoth" name="school" value={"both"} defaultChecked onChange={(e) => { setSchool(e.target.value) }} /> <label htmlFor="schoolBoth">Both</label><br />
                        <label>Gender:</label><br />
                        <input type={"radio"} id="male" name="gender" value={"male"} onChange={(e) => { setGender(e.target.value) }} /> <label htmlFor="male">Male</label><br />
                        <input type={"radio"} id="female" name="gender" value={"female"} onChange={(e) => { setGender(e.target.value) }} /> <label htmlFor="female">Female</label><br />
                        <input type={"radio"} id="genderBoth" name="gender" value={"both"} defaultChecked onChange={(e) => { setGender(e.target.value) }} /> <label htmlFor="genderBoth">Both</label><br />
                        <label>Max Budget {"(tnd)"}:</label><br />
                        <input type="number" className="form-control" placeholder="budget in TND" value={budget} onChange={(e) => {
                            setBudget(e.target.value);
                            if (e.target.value < 0) {
                                setBudget(0);
                                alert("budget cannot be negative!");
                            }
                        }} />

                        <label>Interested in Roommies who already have a house?</label>   <br />
                        <input type={"radio"} id="yesHouse" name="house" value={"yes"} onChange={(e) => { setHouse(e.target.value) }} /> <label htmlFor="yesHouse">Roommies with a house:</label> <br />
                        <input type={"radio"} id="noHouse" name="house" value={"no"} onChange={(e) => { setHouse(e.target.value) }} /> <label htmlFor="noHouse">Roommies without a house:</label> <br />
                        <input type={"radio"} id="anyHouse" name="house" value={"any"} defaultChecked onChange={(e) => { setHouse(e.target.value) }} /> <label htmlFor="anyHouse">All roommies:</label>
                    </form>
                        <button className="btn btn-primary" onClick={(e) => updateAnnouncements(e)}> Update results </button>
                </div>

                {/* All announcements section */}
                <div className="announcements-list" >
                    {(announcements === "none") ?
                        <div className="box">
                            <p>Sorry, we could not find any announcement in our database.</p>
                        </div>
                        :
                        announcements.map(
                            (announcement) => {
                                return (<SingleAnnouncement announcement={announcement} key={announcement.announcementID} drinkingText={drinkingText}
                                    smokingText={smokingText}
                                    visitsFrequencyText={visitsFrequencyText}
                                    loudnessText={loudnessText} />);
                            }
                        )

                    }
                </div>
            </div>
            <Ad />
        </>
    )

}
export default Home;