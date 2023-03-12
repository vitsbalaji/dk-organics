import React from "react";
import Mailer from "./mailer/mail";


import "./style.css"

function Footer(){
    return<>
       <footer id="footer" className="light ">
			<div className="container">
				
				<div className="footer-widgets-wrap">

					<div className="row col-mb-50">
						<div className="col-lg-6">

							<div className="widget clearfix">

								<img src="asset/images/dk-organics-logo.png" alt="footer" className="footer-logo" style={{width:"200px",height:"120px"}} />

								<p>We believe in <strong>healthy</strong>, <strong>long</strong> &amp; <strong>productive</strong> life style.Which give a nice &amp; wealthy life style.</p>

								<div className="py-2 footerimg">
									<div className="row col-mb-30">
										<div className="col-6">
											<address className="mb-0">
												<abbr title="Headquarters" className="fotelement"><strong>Headquarters:</strong></abbr><br/>
												#W2/465B, Jenis Poultry Compound<br/>
												Royappanpatty,Theni(Dt),Tamilnadu-625516 <br/>
											</address>
										</div>
										<div className="col-6">
											<abbr title="Phone Number"><strong>Phone:</strong></abbr>+91 97919 54107<br/>
											<abbr title="Email Address"><strong>Email:</strong></abbr> dkorganics.rpt@gmail.com
										</div>
									</div>
								</div>

								

							</div>

						</div>

						<div className="col-sm-6 col-lg-3">

							<div>

								<div className="widget widget_links clearfix">

									<h4>pages</h4>

									<ul>
										<li><a href="/">Home</a></li>
										<li><a href="/about">About</a></li>
										<li><a href="/services">Services</a></li>
										<li><a href="/product">Product</a></li>
										<li><a href="/carrier">Carrier</a></li>
										<li><a href="/contact">Contact</a></li>
										<li><a href="/login">Admin</a></li>
										
										
									</ul>

								</div>

							</div>

						</div>

						<div className="col-sm-6 col-lg-3">

							<div className="widget quick-contact-widget form-widget clearfix">

								<h4>Send Message</h4>
							
								
							</div>
							<Mailer />
						</div>
					</div>

				</div>
			</div>


			<div id="copyrights">
				<div className="container">

					<div className="w-100 text-center">
						<div className="copyrights-menu copyright-links clearfix">
							<a href="/">Home</a>/<a href="/about">About</a>/<a href="/services">Services</a>/<a href="/product">Product</a>/<a href="/carrier">Carrier</a>/<a href="/contact">Contact</a>
						</div>
						Copyrights &copy; 2022 All Rights Reserved by venture infotech solutions.
					</div>

				</div>
			</div>
		</footer>
    </>
}

export default Footer;