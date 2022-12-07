import React from "react";
import { Navigate } from "react-router-dom";
function PrivateRoute({ children }) {
    const token = sessionStorage.getItem("token");
    return <div>{token ? children : <Navigate to="/" />}</div>;
}
export default PrivateRoute