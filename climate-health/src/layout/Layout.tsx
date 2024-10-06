import HeaderNav from "../components/generic/HeaderNav";
import FooterComponent from "../components/generic/FooterComponent";
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