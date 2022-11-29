import { useState } from "react";
import { Link } from "react-router-dom";

function Login({ setUserID, logout }) {
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      
   
      return fetch("http://localhost:3300/api/user/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password: password,
          email: email
        })
      }).then((res) => res.json())
    }
    catch (e) {
      console.log("wrong password");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await login()
    try {

      if (!isNaN(res.user.userID) ) {
        setUserID (res.user.userID);
        window.sessionStorage.setItem("userID", res.user.userID) ;
        window.sessionStorage.setItem("announcementID", res.user.announcementID) ;
        window.sessionStorage.setItem("location", res.user.location) ;
        window.sessionStorage.setItem("houseDescription", res.user.houseDescription) ;
        window.location.href = "/home";
      } 
    }
    catch (e) {
      console.log("wrong");
    }
  };
  
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login:</h1>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            placeholder="user@smu.tn"
            className={emailIsValid ? "form-control" : "form-control notValid"}
            onChange={(e) => {
              var mail_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
              if (e.target.value.match(mail_format)) {
                setEmailIsValid(true);
                setEmail(e.target.value);
              }
              else {
                setEmailIsValid(false);
              }
            }} />
          {!emailIsValid && (
            <span className="notification-alert">Make sure to type a valid email address</span>

          )}
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Login
        </button>
        <Link to="/Register" style={{ float: "right", lineHeight: "2em" }} onClick={logout} >
          Create an account
        </Link>
      </form>
    </div>
  );
}
export default Login;
