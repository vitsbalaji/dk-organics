import React from "react";
import './style.css';

function Mission(){
    const overFlow ={
        overflow: 'visible',
    };
    const c1= {
        color : '#1ABC9C'
    }
    
    return(
        <section id="content">
			<div class="content-wrap">
				<div class="container clearfix">
					<section id="content">
						<div class="content-wrap">
							<div class="container clearfix">
			
								<div id="side-navigation" class="row" data-plugin="tabs">
			
									<div class="col-md-6 col-lg-4">
										<ul class="sidenav">
											<li><a href="#snav-content1"><i class="icon-line-coffee"></i>Mission<i class="icon-chevron-right"></i></a></li>
											<li><a href="#snav-content2"><i class="icon-line-eye"></i>Vission<i class="icon-chevron-right"></i></a></li>
											<li><a href="#snav-content3"><i class="icon-line-book-open"></i>history<i class="icon-chevron-right"></i></a></li>
										
										</ul>
									</div>
			
									<div class="col-md-6 col-lg-8">
										<div id="snav-content1">
											<h3>Mission</h3>
											
											Introducing our hybrid technology <span style={c1}>nutritious products and contribute directly or indirectly toxing </span>ree or eliminating toxin in their consumption, thereby stabilizing their reimen healthier manner
										</div>
			
										<div id="snav-content2">
											<h3>vision</h3>
											The Vision of  <span style={c1}>DK Organics</span> is to establish a science-based hybrid technological  <span style={c1}>bridge Modern technology with hidden folk truthsbridge between modern technology with hidden folk wisdom</span>processing throught agriculture,vetnery,pharma,consumer and food sector,people to enjoy its benefits.
										</div>
			
										<div id="snav-content3">
											<h3>Histroy of <span style={c1}>Dk-Organics</span></h3>
											<span style={c1}>Dk-Organics</span> is a brand name of David-Kabees-Organics, established in 2015 as a manufacturer and marketer in the agriculture sector based at Rayappanaptti village(po)in theni district in tamilnadu,india.<br/>
											<span style={c1}>Dk-Organics</span>  had its own experience obtained from past own form activities and scored from related all sector of agricultural companies,visites its own R&D and second knowledge and state of the art ,create many hypothetical based botanical source of products towords to use as barrier and adjustment in Agriculture,Vetnery,paharma industry and in consumer categories.



										</div>
									</div>
			
								</div>
			
							</div>
						</div>
					</section>
				</div>
				
				
				<div class="fancy-title title-center title-border topmargin-sm">
					<h3>Our motivation</h3>
				</div>

				

				<div class="owl-carousel image-carousel carousel-widget flip-card-wrapper clearfix" data-margin="20" data-nav="true" data-pagi="false" data-items-xs="2" data-items-sm="2" data-items-md="2" data-items-lg="3" data-items-xl="3" style={overFlow}>

					<div class="flip-card">
						<div class="flip-card-front dark mission-img" >
							<div class="flip-card-inner">
								<div class="card bg-transparent border-0">
									<div class="card-body">
										<h3 class="card-title mb-0">Nature</h3>
										<span class="fst-italic">a Beautiful gift </span>
									</div>
								</div>
							</div>
						</div>
						<div class="flip-card-back mission-img2" >
							<div class="flip-card-inner">
								<p class="mb-2 text-white">Every living things depend on nature which gives us the idea for our product.</p>
								<button type="button" class="btn btn-outline-light mt-2">View Details</button>
							</div> 
						</div>
					</div>

					<div class="flip-card">
						<div class="flip-card-front dark mission-img1" >
							<div class="flip-card-inner">
								<div class="card bg-transparent border-0">
									<div class="card-body">
										<h3 class="card-title mb-0">Tredition</h3>
										<span class="fst-italic">very effective method</span>
									</div>
								</div>
							</div>
						</div>
						<div class="flip-card-back ">
							<div class="flip-card-inner">
								<p class="mb-2 text-white">Most of our value add products are driven from the treditional method .</p>
								<button type="button" class="btn btn-outline-light mt-2">View Details</button>
							</div>
						</div>
					</div>

					<div class="flip-card">
						<div class="flip-card-front dark mission-img4"  >
							<div class="flip-card-inner">
								<div class="card bg-transparent border-0">
									<div class="card-body">
										<h3 class="card-title mb-0">long life</h3>
										<span class="fst-italic">our real thought</span>
									</div>
								</div>
							</div>
						</div>
						<div class="flip-card-back mission-img5" >
							<div class="flip-card-inner">
								<p class="mb-2 text-white">Every living being are motivated to live long life in the earth our motivation is to achive it .</p>
								<button type="button" class="btn btn-outline-light mt-2">View Details</button>
							</div>
						</div>
					</div>

				</div>

				<div class="fancy-title title-center title-border topmargin-sm">
					<h3>Our Team</h3>
				</div>

				

				<div class="container clearfix">
					<div class="heading-block center border-bottom-0">
						<h3>Meet our Team of Specialists<span>.</span></h3>
						<span>We make sure that your Life are in Good Hands.</span>
					</div>

					<div id="oc-team" class="owl-carousel team-carousel carousel-widget" data-margin="30" data-nav="true" data-pagi="true" data-items-xs="1" data-items-sm="2" data-items-lg="3" data-items-xl="4">

						

						<div class="team">
							<div class="team-image">
								<img src="dko-photo/2.jpg" alt="Dr. John Doe"/>
							</div>
							<div class="team-desc">
								<div class="team-title"><h4>Thiru.AM.Murugesan M.A </h4><span>Managing Partner</span></div>
							</div>
						</div>
						<div class="team">
							<div class="team-image">
								<img src="dko-photo/1.jpeg" alt="Thiru.A.J Anandraj Bsc,MBA,D.I(Ag)" />
							</div>
							<div class="team-desc">
								<div class="team-title"><h4>Thiru.A.J Anandraj Bsc,MBA,D.I(Ag)</h4><span>Partner(marketing)</span></div>
							</div>
						</div>

						<div class="team">
							<div class="team-image">
								<img src="dko-photo/3.jpeg" alt="Dr. John Doe" />
							</div>
							<div class="team-desc">
								<div class="team-title"><h4>Thiru.G.Karthikeyan MSc,MPhil</h4><span>Laboratory head production incharge</span></div>
							</div>
						</div>

						<div class="team">
							<div class="team-image">
								<img src="dko-photo/4.jpeg" alt="Dr. John Doe" />
							</div>
							<div class="team-desc">
								<div class="team-title"><h4>M.M.Kabeesvar BTech(Che)PGDM</h4><span>Production Associate</span></div>
							</div>
						</div>

					



					
					</div>

				</div>
			</div>
		</section>
    );
}


export default Mission;