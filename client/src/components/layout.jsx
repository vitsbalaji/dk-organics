import React from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";



function Layout(){
    return<>
    	<div className="clearfix">
      <div id="top-bar">
			<div className="container clearfix">

				<div className="row justify-content-between">
					<div className="col-12 col-md-auto d-none d-md-flex">
 					 <div className="top-links">
							<ul className="top-links-container">
							
								<li className="top-links-item"><a href="/contact"><i className="icon-phone3"></i> +91 9585525071</a></li>
								<li className="top-links-item"><a href="/contact"><i className="icon-email"></i> dkorganics.rpt@gmail.com</a></li>
								<li className="top-links-item"><a href="/contact" className="nott"> </a></li>
							</ul>
						</div>

					</div>
					<div className="col-12 col-md-auto">

					
						<div className="top-links">
							<ul className="top-links-container">
								<li className="top-links-item"><a href="/contact" className="bg-color text-white">Contact-us</a></li>
							</ul>
						</div>

					</div>
				</div>

			</div>
		</div>
    
      <Header />
   
    
       <Body />
  
   
        <Footer />

		
   
 
    </div>
    </>;
}

export default Layout;