import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "bootstrap/dist/css/bootstrap.min.css";
import Map from "../../components/map/App";


const Contact = () => {
    const form = useRef()


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rp3cqbi', 'template_wz4xdg5', form.current, 'GsXZRU7z0Kay4vafb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }); 
            e.target.reset()
    };

	return <>
		<section id="page-title">

			<div className="container clearfix center">
				<h1>Contact</h1>
			</div>

		</section>
		<section id="content">
			<div className="content-wrap">
				<div className="container clearfix">
				<div className="fancy-title title-border">
								<h3>Send us an Email</h3>
							</div>

					<div className="row align-items-stretch col-mb-50 mb-0">

						<div className="col-lg-6">

							

							<div className="form-group" data-alert-type="inline">

								<div className="form-result"></div>

								<form ref={form} onSubmit={sendEmail} className="form-group flex-center">

									<div className="form-process">
										<div className="css3-spinner">
											<div className="css3-spinner-scaler"></div>
										</div>
									</div>

									<div className="row">
										<div className="col-md-4 form-group">
											<label for="template-contactform-name">Name <small>*</small></label>
											<input type="text"  name="user_name"  />
										</div>

										<div className="col-md-4 form-group">
											<label for="template-contactform-email">Email <small>*</small></label>
											<input type="email" name="user_email"  />
										</div>

										<div className="col-md-4 form-group">
											<label for="template-contactform-phone">Phone</label>
											<input type="text" name="phone"  />
										</div>

										<div className="w-100"></div>

										<div className="col-md-12 form-group">
											<label for="template-contactform-subject">Subject <small>*</small></label>
											<input type="text" name="subject"  />
										</div>



										<div className="w-100"></div>

										<div className="col-12 form-group">
											<label for="template-contactform-message">Message <small>*</small></label>
											<textarea className="required sm-form-control" name="message" rows="6" cols="30"></textarea>
										</div>

										<div className="col-12 form-group">
											<button name="submit" type="submit" id="submit-button" tabindex="5" value="Submit" className="button button-3d m-0">Submit Message</button>
										</div>
									</div>

								
									

								</form>
							</div>

						</div>
						<div className="col-lg-6 min-vh-50">
							<Map />
						</div>
					</div>


					<div className="row col-mb-50">
						<div className="col-sm-6 col-lg-4">
							<div className="feature-box fbox-center fbox-bg fbox-plain">
								<div className="fbox-icon">
									<a href="https://www.google.com/maps/place/JENIS+Poultry+Farm/data=!4m7!3m6!1s0x3b07048622b7851b:0x559c66ec1909b9d!8m2!3d9.7631975!4d77.336669!16s%2Fg%2F11b5vsgnwv!19sChIJG4W3IoYEBzsRnZuQwW7GWQU?authuser=0&hl=en&rclk=1"><i className="icon-map-marker2"></i></a>
								</div>
								<div className="fbox-content">
									<h3>Our Headquarters<span className="subtitle"> Jenis Poultry Compound<br />
										Royappanpatty,Theni(Dt),Tamilnadu-625516 <br /></span></h3>
								</div>
							</div>
						</div>

						<div className="col-sm-6 col-lg-4">
							<div className="feature-box fbox-center fbox-bg fbox-plain">
								<div className="fbox-icon">
									<a href="/"><i className="icon-phone3"></i></a>
								</div>
								<div className="fbox-content">
									<h3>Speak to Us<span className="subtitle">+91 97919 54107</span><span className="subtitle" >+91 9787519797</span></h3>
								</div>
							</div>
						</div>

						<div className="col-sm-6 col-lg-4">
							<div className="feature-box fbox-center fbox-bg fbox-plain">
								<div className="fbox-icon">
									<a href="/"><i className="icon-envelope2"></i></a>
								</div>
								<div className="fbox-content">
									<h3>Make a private Mail<span className="subtitle">dkorganics.rpt@gmail.com</span></h3>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>

	</>;

}

export default Contact;
