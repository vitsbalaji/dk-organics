import React from "react";
//import ClipBoard from "./clipboard";
//import Mission from "./mission";
import "./animate.css"
import Slider from "../../components/slider/slider"
import "../../css/animate.css";
import "../../css/bootstrap.css";
import "../../css/swiper.css";
import "../../css/dark.css";
import "../../css/font-icons.css";
import "../../css/fonts.css";
import "../../css/custom.css";
import "./style.css";
import "../../demos/medical/medical.css";



function Home(){
    const c1= {
        color : '#1ABC9C'
    }
   
    const overFlow ={
        overflow: 'visible',
    };
    return<>
       
        <Slider />
		<section id="content">
			<div className="content-wrap">
				<div className="container clearfix">
					<section id="content">
						<div className="content-wrap">
							<div className="container clearfix">
			
								<div id="side-navigation" className="row" data-plugin="tabs">
			
									<div className="col-md-6 col-lg-4">
										<ul className="sidenav">
											<li><a href="#snav-content1"><i className="icon-line-coffee"></i>Mission<i className="icon-chevron-right"></i></a></li>
											<li><a href="#snav-content2"><i className="icon-line-eye"></i>Vission<i className="icon-chevron-right"></i></a></li>
											<li><a href="#snav-content3"><i className="icon-line-book-open"></i>history<i className="icon-chevron-right"></i></a></li>
										
										</ul>
									</div>
			
									<div className="col-md-6 col-lg-8">
										<div id="snav-content1">
											<h3>Mission</h3>
											
			                                 Introducing new hybrid technology  <span style={c1}>nutritious products and contribute directly or indirectly toxing </span>free or eliminating toxin their consumption,where stablize their reimen healthier manner
										</div>
			
										<div id="snav-content2">
											<h3>vision</h3>
											The Vision of  <span style={c1}>DK Organics</span> is confrimed Science based hybrid technological <span style={c1}>bridge Modern technology with hidden folk truths</span> products processing throught agriculture,vetnery,pharma,consumer and frod sector,peopleto enjoy it's benifits
										</div>
			
										<div id="snav-content3">
											<h3>Histroy of <span style={c1}>Dk-Organics</span></h3>
											<span style={c1}>Dk-Organics</span> is short name od David-Kabees-organics had established in 2015 as a manufacturor and marketer in agriculture sector based at Rayappanaptti village(po)in theni district in tamilnadu,india.<br/>
											<span style={c1}>Dk-Organics</span> had its own experience obtained from past own form activities and scored from related all sector of agricultural companies,visites its own R&amp;d and second knowledge and state of arts ,create many hypothetical based botanical source of products towords to use as barrier and adjustment in Agriculture,Vetnery,paharma industry and in consumer catagories

										</div>
									</div>
			
								</div>
			
							</div>
						</div>
					</section>
				</div>
				
				
				<div className="fancy-title title-center title-border topmargin-sm">
					<h3>Our motivation</h3>
				</div>

				

				<div className="owl-carousel image-carousel carousel-widget flip-card-wrapper clearfix" dataMargin="20" data-nav="true" data-pagi="false" data-items-xs="2" data-items-sm="2" data-items-md="2" data-items-lg="3" data-items-xl="3" style={overFlow}>

					<div className="flip-card">
						<div className="flip-card-front dark  mission-img1 ">
							<div className="flip-card-inner">
								<div className="card bg-transparent border-0">
									<div className="card-body">
										<h3 className="card-title mb-0">Nature</h3>
										<span className="fst-italic">a Beautiful gift </span>
									</div>
								</div>
							</div>
						</div>
						<div className="flip-card-back mission-img2">
							<div className="flip-card-inner">
								<p className="mb-2 text-white">Every living things depend on nature which gives us the idea for our product.</p>
								<button type="button" className="btn btn-outline-light mt-2">View Details</button>
							</div>
						</div>
					</div>

					<div className="flip-card">
						<div className="flip-card-front dark mission-img3">
							<div className="flip-card-inner">
								<div className="card bg-transparent border-0">
									<div className="card-body">
										<h3 className="card-title mb-0">Tredition</h3>
										<span className="fst-italic">very effective method</span>
									</div>
								</div>
							</div>
						</div>
						<div className="flip-card-back mission-img4">
							<div className="flip-card-inner">
								<p className="mb-2 text-white">Most of our value add products are driven from the treditional method .</p>
								<button type="button" className="btn btn-outline-light mt-2">View Details</button>
							</div>
						</div>
					</div>

					<div className="flip-card">
						<div className="flip-card-front dark mission-img5" >
							<div className="flip-card-inner">
								<div className="card bg-transparent border-0">
									<div className="card-body">
										<h3 className="card-title mb-0">long life</h3>
										<span className="fst-italic">our real thought</span>
									</div>
								</div>
							</div>
						</div>
						<div className="flip-card-back mission-img">
							<div className="flip-card-inner">
								<p className="mb-2 text-white">Every living being are motivated to live long life in the earth our motivation is to achive it .</p>
								<button type="button" className="btn btn-outline-light mt-2">View Details</button>
							</div>
						</div>
					</div>

				</div>

				<div className="fancy-title title-center title-border topmargin-sm">
					<h3>Our Team</h3>
				</div>

				

				<div className="container clearfix">
					<div className="heading-block center border-bottom-0">
						<h3>Meet our Team of Specialists<span>.</span></h3>
						<span>We make sure that your Life are in Good Hands.</span>
					</div>

					<div id="oc-team" className="owl-carousel team-carousel carousel-widget" dataMargin="30" data-nav="true" data-pagi="true" data-items-xs="1" data-items-sm="2" data-items-lg="3" data-items-xl="4">

						

						<div className="team">
							<div className="team-image">
								<img src="asset/dko-photo/2.jpg" alt="Dr. John Doe"/>
							</div>
							<div className="team-desc">
								<div className="team-title"><h4>Thiru.AM.Murugesan </h4><span>Managing Partner</span></div>
							</div>
						</div>
						<div className="team">
							<div className="team-image">
								<img src="/asset/dko-photo/1.jpeg" alt="Thiru.A.J Anandraj Bsc,MBA,D.I(Ag)"/>
							</div>
							<div className="team-desc">
								<div className="team-title"><h4>Thiru.A.J Anandraj </h4> <span style={{color:"black"}}> Bsc,MBA,D.I(Ag)</span> <span>Partner(marketing)</span></div>
							</div>
						</div>

						<div className="team">
							<div className="team-image">
								<img src="asset/dko-photo/3.jpeg" alt="Dr. John Doe"/>
							</div>
							<div className="team-desc">
								<div className="team-title"><h4>Thiru.G.Karthikeyan</h4><span style={{color:"black"}}>  MSc,MPhil  </span><span>Laboratory head production incharge</span></div>
							</div>
						</div>

						<div className="team">
							<div className="team-image">
								<img src="asset/dko-photo/4.jpeg" alt="Dr. John Doe"/>
							</div>
							<div className="team-desc">
								<div className="team-title"><h4>M.M.Kabeesvar </h4><span style={{color:"black"}}>BTech(Che)</span><span>Production Associate</span></div>
							</div>
						</div>

					



						
					</div>
					
				</div>
				
			</div>
		</section>
		
    </>;
	

}

export default Home;
