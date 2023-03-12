import React ,{Component}from "react";
import FarmerPdf from "./farmer";
import {format} from'date-fns'

import "react-datepicker/dist/react-datepicker.css";

class FarmerForm extends Component{
    state ={
        companyName :"",
        companyAddress:"",
        message:"",
		date: format(new Date(),'dd/MM/yyyy').toLocaleString(),
        postSubmitted:false,
		imageUpload:"",
    }

    onChange = input=>e=>{
        this.setState({
            [input]:e.target.value
        }); 
    }
    submitPost=(e)=>{
        if(!this.state.companyName || !this.state.companyAddress){
            alert("all files are required");
            e.preventDefault();
        }else{
        this.setState({
            postSubmitted:true
        });
        }
    }
    render(){
        return(
            <>
         { !this.state.postSubmitted?  
         (<section id="content">
			<div className="content-wrap">
				<div className="container clearfix">

					<div className="form-widget">

						<div className="form-result"></div>
                       
						<div className="row">
							<div className="col-lg-6">
								<form className="row">
									<div className="form-process">
										<div className="css3-spinner">
											<div className="css3-spinner-scaler"></div>
										</div>
									</div>
									<div className="col-12 form-group">
										<label>Company Name:</label>
										<input type="text" name="companyName" onChange={this.onChange("companyName")} className="form-control " placeholder="Enter company name"/>
									</div>
									<div className="col-12 form-group">
										<label>Company Address :</label>
										<input type="text" name="companyAddress" onChange={this.onChange("companyAddress")} className="form-control "  placeholder="enter company address"/>
									</div>
                                   
									<div className="col-12">
										<button type="submit" onClick={this.submitPost} name="jobs-application-submit" className="btn btn-secondary">Send Message</button>
									</div>

									<input type="hidden" name="prefix" value="jobs-application-"/>
								</form>
							</div>

							<div className="col-lg-6 ps-lg-5">
								
								<div className="w-100">
									<div className="row">
                                         <div className="col-md-6">
										 <h3>Name</h3>
										 </div>
										 <div className="col-md-6">
										 <p>:{this.state.companyName}</p> 
										 </div>
										 <div className="col-md-6">
										 <h3>Company Address</h3>
										 </div>
										 <div className="col-md-6">
										 <p>:{this.state.companyAddress}</p> 
										 </div>
										 									 
									</div>
                                    </div>

								

							</div>

						</div>

					</div>

				</div>
			</div>
		</section>):(
            <FarmerPdf companyName={this.state.companyName}  companyAddress={this.state.companyAddress} message= {this.state.message} date ={this.state.date}/>
        )
    }
            </>
        )
    }
}

export default FarmerForm;