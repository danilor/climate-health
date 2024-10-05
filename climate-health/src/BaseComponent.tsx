import React from "react";

import {Routes, Route} from 'react-router-dom';
import Main from "./screen/Main";
import Layout from "./layout/Layout";

export default function BaseComponent() {

    // return (<Main/>);
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
            </Route>
        </Routes>
    );
}