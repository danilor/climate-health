import React from "react";

import {Routes, Route} from 'react-router-dom';
import Main from "./screen/Main";
import Layout from "./layout/Layout";

export default function BaseComponent() {

    return (<Main/>);
    /*return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                {/*<Route path="about" element={<About />} />*/}
                {/*<Route path="dashboard" element={<Dashboard />} />*/}

                {/*/!* Using path="*"" means "match anything", so this route*/}
                {/*acts like a catch-all for URLs that we don't have explicit*/}
                {/*routes for. *!/*/}
                {/*<Route path="*" element={<NoMatch />} />}
            </Route>
        </Routes>
    );*/
}