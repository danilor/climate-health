import {Link} from "react-router-dom";
import {useState} from "react";
import { IoIosMenu } from "react-icons/io";



export default function HeaderNav(){


    const [opened, setOpened] = useState<boolean>(false);

    return (
        <div className="mb-3">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark customHeader ">
                <div className="container">
                    <img alt={'logo'} title={'Climate Health'} src={process.env.PUBLIC_URL + "/img/logo.png"}/>
                    {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
                    {/*        data-bs-target="#collapsibleNavbar">*/}
                    {/*    <span className="navbar-toggler-icon"></span>*/}
                    {/*</button>*/}

                    <ul className="d-lg-flex d-none navbar-nav">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">Home</Link>
                        </li>
                        <span>|</span>
                        <li className="nav-item">
                            <Link to={'/about'} className="nav-link">About Us</Link>
                        </li>
                        <span>|</span>
                        <li className="nav-item">
                            <Link to={'/challenge'} className="nav-link">Challenge</Link>
                        </li>
                        <span>|</span>
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

                    <ul className='navbar-nav d-lg-none d-md-flex d-sm-flex'>
                        <li className="nav-item">
                            <a onClick={() => {
                                setOpened(!opened)
                            }} className='nav-link burger-menu' data-t={'Menu'}>
                                <IoIosMenu/>
                            </a>
                        </li>
                    </ul>

                </div>

            </nav>
            {opened ? (
                <div className="submenu d-lg-none d-md-flex d-sm-flex">

                        <div className={"col text-center"}>
                            <Link to={'/'} className="nav-link">Home</Link>
                        </div>
                        <div className={"col text-center"}>
                            <Link to={'/about'} className="nav-link">About Us</Link>
                        </div>
                        <div className={"col text-center"}>
                            <Link to={'/challenge'} className="nav-link">Challenge</Link>
                        </div>

                </div>
            ) : null}
        </div>

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