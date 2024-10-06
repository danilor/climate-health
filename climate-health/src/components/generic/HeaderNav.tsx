import {Link} from "react-router-dom";

export default function HeaderNav(){


    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark customHeader mb-2">
            <div className="container">
                <img alt={'logo'} title={'Climate Health'} src={process.env.PUBLIC_URL + "/img/logo.png"}/>
                {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
                {/*        data-bs-target="#collapsibleNavbar">*/}
                {/*    <span className="navbar-toggler-icon"></span>*/}
                {/*</button>*/}
                <div className="collapse navbar-collapse">
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
                            <a className="nav-link" href={'https://www.spaceappschallenge.org/nasa-space-apps-2024/'}
                               target={'_blank'}>
                                NASA Int. Space App Challenge
                            </a>
                        </li>
                        {/*<li className="nav-item dropdown">*/}
                        {/*    <a className="nav-link dropdown-toggle" href="#" role="button"*/}
                        {/*       data-bs-toggle="dropdown">Dropdown</a>*/}
                        {/*    <ul className="dropdown-menu">*/}
                        {/*        <li><a className="dropdown-item" href="#">Link</a></li>*/}
                        {/*        <li><a className="dropdown-item" href="#">Another link</a></li>*/}
                        {/*        <li><a className="dropdown-item" href="#">A third link</a></li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        </nav>
    );

    return (
        <div className="navbar navbar-dark bg-dark shadow-sm mb-2 customHeader">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <a className="navbar-brand d-flex align-items-center">
                            <img alt={'logo'} title={'Climate Health'} src={process.env.PUBLIC_URL + "/img/logo.png"}/>
                            <strong className={'title'}>Climate Health</strong>
                        </a>
                    </div>
                    <div className="col-10">
                        <div className="navbar-collapse">
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
                                    <a className="nav-link"
                                       href={'https://www.spaceappschallenge.org/nasa-space-apps-2024/'}
                                       target={'_blank'}>
                                        NASA Int. Space App Challenge
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}