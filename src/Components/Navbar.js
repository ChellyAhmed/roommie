import { Link } from "react-router-dom"

function Navbar({logout}) { 

    // add class active to the active element of the navbar
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/Home">Roommie</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/MyAnnouncement">My announcement</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={logout}>Logout</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar