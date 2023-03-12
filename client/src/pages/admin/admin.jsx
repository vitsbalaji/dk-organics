import React from "react";
import Header from "../../Header"
import { Outlet } from "react-router-dom";

function Admin(){
    return(
        <>
				<div className="container clearfix">

					<Header/>
                    <Outlet/>
                    

				</div>
		
        </>
    );
}

export default Admin;