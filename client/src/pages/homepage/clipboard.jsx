import React from "react";
import "./style.css"

function ClipBoard(){
    return(
        <section id="slider" className="slider-element swiper_wrapper min-vh-50 min-vh-md-100" data-loop="true" data-autoplay="5000">
			<div className="slider-inner">

				<div className="swiper-container swiper-parent">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<div className="container">
								<div className="slider-caption slider-caption-right clip-style">
									<div>
										<h2 data-animate="flip"><span>Team </span>of Experts<span>.</span></h2>
										<p className="d-none d-sm-block" data-animate="flipInX" data-delay="500">our team provide a good and quality products to our clients.</p>
									</div>
								</div>
							</div>
							<div className="swiper-slide-bg clip-img" ></div>
						</div>
						<div className="swiper-slide">
							<div className="container">
								<div className="slider-caption">
									<div>
										<h2 data-animate="flip"><span>Making</span>Revolution.</h2>
										<p className="d-none d-sm-block" data-animate="zoomIn" data-delay="500">garlic the main source of subliments we provide &amp; taking part it is our product.</p>
									</div>
								</div>
							</div>
							<div className="swiper-slide-bg clip-img1"></div>
						</div>
					</div>

				</div>

			</div>
		</section>
    );
}

export default ClipBoard;