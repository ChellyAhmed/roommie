import { useState } from "react";
import { Link } from "react-router-dom";
import P1 from "./p1.png";
import P2 from "./p2.png";

function Register() {
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [budget, setBudget] = useState("0");
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");

  return (
    <form>
      <br />
      <h1 className="page-title">Create an account:</h1>
      <div className="register-section">
        <div style={{ textAlign: "center" }} className="image-container">
          <img src={P1} alt="Profile" />
        </div>
        <div className="form-container">
          <h2>Personal information:</h2>
          {/* Full Name */}
          <label className="form-label">Full name:</label>
          <input type="text" className="form-control" placeholder="John Doe" />

          {/* Email */}
          <label className="form-label">Email address:</label>
          <input
            type="email"
            placeholder="full.name@medtech.tn"
            className={emailIsValid ? "form-control" : "form-control notValid"}
            onChange={(e) => {
              var mail_format =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
              if (e.target.value.match(mail_format)) {
                setEmailIsValid(true);
              } else {
                setEmailIsValid(false);
              }
            }}
          />
          {!emailIsValid && (
            <span className="notification-alert">
              Make sure to type a valid email address <br />
            </span>
          )}

          {/* Password */}
          <label className="form-label">Password:</label>
          <input type="password" className="form-control" placeholder="Password" onChange={(e) => { setP1(e.target.value) }} />
          <label className="form-label">Confirm your password:</label>
          <input type="password" className="form-control" placeholder="Password confirmation" onChange={(e) => { setP2(e.target.value) }} />
          {!(p1 === p2) && <span className="notification-alert">Passwords do NOT match<br /></span>}

          {/* Gender */}
          <label className="form-label">Gender:</label> &nbsp;
          <input className="form-check-input" type="radio" name="gender" id="male" />&nbsp;
          <label className="form-check-label" htmlFor="male">Male</label>&nbsp; &nbsp;
          <input className="form-check-input" type="radio" name="gender" id="female" />&nbsp;
          <label className="form-check-label" htmlFor="female">Female</label><br />

          {/* Phone number */}
          <label className="form-label">Phone number:</label>
          <input type="number" className="form-control" placeholder="12 345 678 " />



        </div>
      </div>


      <br />

      <div className="register-section"  >
        <div style={{ textAlign: "center" }} className="image-container">
          <img src={P2} alt="Profile" />
        </div>
        <div className="form-container">

          <h2>More about you:</h2>

          {/* School */}
          <label className="form-label">School:</label> &nbsp;
          <input className="form-check-input" type="radio" name="school" id="MSB" />&nbsp;
          <label className="form-check-label" htmlFor="MSB">MSB</label>&nbsp; &nbsp;
          <input className="form-check-input" type="radio" name="school" id="MedTech" />&nbsp;
          <label className="form-check-label" htmlFor="MedTech">MedTech</label>&nbsp;<br />

          {/* budget */}
          <label className="form-label">Rent budget:</label>
          <input type="number" className="form-control" placeholder="budget in TND" value={budget} onChange={(e) => {
            setBudget(e.target.value);
            if (e.target.value < 0) {
              setBudget(0);
            }
          }} />


          {/* About */}
          <label className="form-label">About:</label>
          <textarea placeholder="Type here a short cool description about yourself" style={{ width: "100%" }}></textarea>

          {/* Drinking */}
          <select className="form-select" aria-label="Drinking tolerance">
            <option defaultChecked>Do you allow drinking inside?</option>
            <option value="0">I drink or tolerate drinking around</option>
            <option value="1">I don't like drinking around</option>
          </select>

          {/* Smoking */}
          <select className="form-select" aria-label="Smoking tolerance" >
            <option defaultChecked>Do you allow smoking indoors</option>
            <option value="0">I smoke, or allow smoking indoors</option>
            <option value="1">I prohibit smoking indoors</option>
          </select>

          {/* Visits Frequency */}
          <select className="form-select" aria-label="Visits Frequency" >
            <option defaultChecked>How often do you invite guests over</option>
            <option value="1">1: never</option>
            <option value="2">2: Once/Twice a month</option>
            <option value="3">3: Once a week/ during weekends</option>
            <option value="4">4: 2 to 3 times a week</option>
            <option value="5">5: Everyday</option>
          </select>

          {/* Loudness */}
          <select className="form-select" aria-label="Loudness" >
            <option defaultChecked>How loud are you?</option>
            <option value="1">1: Never make any noise</option>
            <option value="2">2: Rarely make some noise</option>
            <option value="3">3: Loud activities during weekends</option>
            <option value="4">4: Loud music each night</option>
            <option value="5">5: Loud noise all day long {"(DJ?!)"}</option>
          </select>

        </div>
      </div>
      <div className="page-title" style={{margin: "20px"}}>
        <Link to="/">Already have an account</Link>
        &nbsp;
        <button className="btn btn-primary" >Register</button>
      </div>

    </form>
  );
}
export default Register;
