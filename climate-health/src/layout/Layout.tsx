import HeaderNav from "../components/HeaderNav";
import FooterComponent from "../components/FooterComponent";
import {Outlet} from "react-router";

export default function Layout() {
    return (
        <>
            <HeaderNav/>
            <Outlet/>

            <FooterComponent/>

        </>
    );
}