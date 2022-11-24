import { useState } from "react";
import { Link } from "react-router-dom";

function Login( ) {
  const [emailIsValid , setEmailIsValid] = useState(true);
  return (
    <div className="login-container">
      <form className="login-form">
        <h1>Login:</h1>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            placeholder="user@smu.tn"
            className={emailIsValid?"form-control":"form-control notValid"}
            onChange={(e) => {
              var mail_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
              if(e.target.value.match(mail_format)) {
                setEmailIsValid(true)
              }
              else {
                setEmailIsValid(false)
              }
            }}/>
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
            className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={(e) => {e.preventDefault(); window.location.href= "/Home";}}>
          Login
        </button>
        <Link to="/Register" style={{ float: "right", lineHeight: "2em" }}>
          Create an account
        </Link>
      </form>
    </div>
  );
}
export default Login;
