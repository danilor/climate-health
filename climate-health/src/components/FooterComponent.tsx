import {Link} from "react-router-dom";

export default function FooterComponent(){
    return (
        <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Cliamte Health</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <Link to={'/challenge'} className="nav-link">Challenge</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}