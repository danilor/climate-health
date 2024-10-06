import {Link} from "react-router-dom";

export default function FooterComponent(){
    return (
        <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Climate Health</a>
               
                <div className="navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/about'} className="nav-link">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/challenge'} className="nav-link">Challenge</Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href={'https://www.spaceappschallenge.org/nasa-space-apps-2024/'} target={'_blank'}>
                                NASA Int. Space App Challenge
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}