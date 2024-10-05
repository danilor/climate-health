import HeaderNav from "../components/HeaderNav";
import MapComponent from "../components/MapComponent";
import ActualRain from "../components/ActualRain";
import FooterComponent from "../components/FooterComponent";
import {Outlet} from "react-router";
import Main from "../screen/Main";

export default function Layout(){
    return (
        <>
            <HeaderNav/>
            <Main/>

            <FooterComponent/>

        </>
    );
}