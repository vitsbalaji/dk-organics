import React from "react";
import Routing from "./routing";
import {BrowserRouter} from "react-router-dom";

function Body(){
    return<>
    <BrowserRouter>
       <Routing />
    </BrowserRouter>
    </>;
}

export default Body;