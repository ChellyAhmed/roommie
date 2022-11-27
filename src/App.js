import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar"
import Announcement from "./Components/Announcement";
import MyAnnouncement from "./Components/MyAnnouncement";
import EditAnnouncement from "./Components/EditAnnouncement";
import { useState } from "react";
function App() {
    // Shared functions among different components
    const drinkingText = (v) => {
        if (v === 1) {
            return "Tolerates drinking around";
        }
        else if (v === 0) {
            return "Does not tolerate drinking around";
        }
        else {
            return "Unspecified";
        }
    }
    const smokingText = (v) => {
        if (v === 1) {
            return "Tolerates smoking around";
        }
        else if (v === 0) {
            return "Does not tolerate smoking around";
        }
        else {
            return "Unspecified";
        }
    }
    const visitsFrequencyText = (v) => {
        if (v === 1) {
            return "1/5: never";
        }
        else if (v === 2) {
            return "2/5: Once/Twice a month";
        }
        else if (v === 3) {
            return "3/5: Once a week/ during weekends";
        }
        else if (v === 4) {
            return "4/5: 2 to 3 times a week";
        }
        else if (v === 5) {
            return "5/5: Everyday";
        }
        else {
            return "Unspecified";
        }
    }
    const loudnessText = (v) => {
        if (v === 1) {
            return "1/5: Never make any noise";
        }
        else if (v === 2) {
            return "2/5: Rarely make some noise";
        }
        else if (v === 3) {
            return "3/5: Loud activities during weekends";
        }
        else if (v === 4) {
            return "4/5: Loud music each night";
        }
        else if (v === 5) {
            return "5/5: Loud noise all day long (DJ?!)";
        }
        else {
            return "Unspecified";
        }
    }

    const logout = () => {
        window.sessionStorage.setItem("userID", null);
        setUserID(null);
    }


    const [userID , setUserID] = useState(window.sessionStorage.getItem("userID"));


  
    return (
        <BrowserRouter>
            {userID!=null && (<Navbar logout={logout}/>)}


            <Routes>
                <Route path="/" element={<Login setUserID={setUserID} logout={logout} />} />
                <Route path="/Register" element={<Register setUserID={setUserID} />} />
                <Route path="/Home" element={<Home drinkingText={drinkingText}
                    smokingText={smokingText}
                    visitsFrequencyText={visitsFrequencyText}
                    loudnessText={loudnessText} />} />
                <Route path="/Announcement/:id" element={<Announcement drinkingText={drinkingText}
                    smokingText={smokingText}
                    visitsFrequencyText={visitsFrequencyText}
                    loudnessText={loudnessText} />} />
                <Route path="/MyAnnouncement" element={<MyAnnouncement drinkingText={drinkingText}
                    smokingText={smokingText}
                    visitsFrequencyText={visitsFrequencyText}
                    loudnessText={loudnessText} />} />
                <Route path="/EditAnnouncement" element={<EditAnnouncement drinkingText={drinkingText}
                    smokingText={smokingText}
                    visitsFrequencyText={visitsFrequencyText}
                    loudnessText={loudnessText} />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;