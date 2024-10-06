import './App.css';
import Main from "./screen/Main";
import BaseComponent from "./BaseComponent";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <BaseComponent/>
        </BrowserRouter>
  );
}

export default App;
