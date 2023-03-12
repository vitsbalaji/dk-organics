import React from "react";

import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"



//nav bar 

function Header(){

    return<>
    <BrowserRouter>
    
    <header id="header" data-menu-padding="28" data-sticky-menu-padding="8">
			<div id="header-wrap">
				<div className="container">
					<div className="header-row">

					
						<div id="logo">
							<a href="/" className="standard-logo"><img src="asset/images/dk-organics-logo.png" alt="Canvas Logo" /></a>
							<a href="/" className="retina-logo"><img src="asset/images/dk-organics-logo.png" alt="Canvas Logo" /></a>
						</div>

						<div id="primary-menu-trigger">
							<svg className="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
						</div>

					
						<nav className="primary-menu style-3 menu-spacing-margin">

							<ul className="menu-container">
								<CoustomLink href="/">home</CoustomLink>
								<CoustomLink href="/about">about</CoustomLink>
								<CoustomLink href="/services">services</CoustomLink>
								<CoustomLink href="/carrier">carrier</CoustomLink>
								<CoustomLink href="/product">products</CoustomLink>
								<CoustomLink href="/contact">contact</CoustomLink>
								
							</ul>

						</nav>

					</div>
				</div>
			</div>
			<div className="header-wrap-clone"></div>
		</header>
        </BrowserRouter>
    </>;

}

function CoustomLink({href,children,...props}){
	const path =window.location.pathname
	return(
		<>
			<li className={ path === href ? "menu-item current" : "menu-item" }><a className="menu-link" href={href}><div>{children}</div></a></li>
		</>
	);

}

export default Header;