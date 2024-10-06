import React from "react";

import {Routes, Route} from 'react-router-dom';
import Main from "./screen/Main";
import Layout from "./layout/Layout";
import Challenge from "./screen/Challenge";

export default function BaseComponent() {

    // return (<Main/>);
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="/challenge" element={<Challenge />} />

            </Route>
        </Routes>
    );
}