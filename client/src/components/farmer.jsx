import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { pdfFromReact } from "generate-pdf-from-react-html";




const alon ={

   fontSize:"10px"
}
const left ={
  textAlign:"left",
  marginLeft:'20px',
  fontSize: '11px'
}
const right ={
  textAlign:"right",
  marginLeft:'20px',
  fontSize :'10px'
}


const FarmerPdf = (props)=>{
    return(<>
    <div className="container-fluid auto element-to-print mt-3">
		<div className="">
		<div className="container clearfix">
			<div className="row container " style={alon}>
				<div className="col-md-8 ">
				        <div id="logo" style={{height:'8 px',weidth:'15 px'}}>
							<a href="/" className="standard-logo"><img src="asset/images/dk-organics-logo.png" alt="Canvas Logo" style={{width:"180px", height:"90px"}} /></a>
							<a href="/" className="retina-logo"><img src="asset/images/dk-organics-logo.png" alt="Canvas Logo" /></a>
						</div>
				</div>
				
				<div className="col-md-4">
				<div>
        <address className="mb-0" style={{fontSize:"10"}}>
                  <abbr title="Headquarters" classNameName="fotelement"><strong>Address :</strong></abbr><br/>
                  #W2/465B, Jenis Poultry Compound<br/>
                  Royappanpatty,Theni(Dt),Tamilnadu 625526 <br/>
				          </address>
				
				</div>          
        <abbr title="Phone Number"><strong>Phone :</strong></abbr>+91 9585525071<br/>
					<abbr title="Email Address"><strong>Email :</strong></abbr> dkorganics.rpt@gmail.com
				</div>
			</div>
		</div>
    <hr style={{width:"100%"}}/>
    <div className="">
          <div className="container-fluid center " >
             <div className="row">
              <div className="col-md-7"> </div>
              <div className="col-md-3" style={{fontSize:"7px"}}> 
                <h3 className="col-md-8"style={{fontSize:"8.5px",textAlign:"justify"}}>Date:{props.date}</h3>
                <h3 style={{fontSize:"8.5px",textAlign:"justify "}}>place: Royappanpatti</h3>
              </div>
            
              <div className="row">
                <div className="col-md-8">
                  <div className="col-md-4">
                    <p style={left}>From</p>
                  </div>
                   <div  className="col-md-5"  style={alon} >
                 
                     Murugesan.M<br />
                   (Managing Partner) ,  <br /> 
                    <p > M/s.DK.organics, </p>
                   
         
                   </div>
                   
                </div>
              </div><br />
              <div className="row">
                <div className="col-md-8">
                  <div className="col-md-4">
                    <p style={left}>To</p>
                  </div>
                   <div className="col-md-4" style={alon} >
                    <p >{props.companyName}</p>
                    <p >{props.companyAddress}</p>
                   
                   
                   </div>
                </div>
              </div>
             </div>
             
             <div className="row container-fluid justify">
                <div className="col-md-12">
                <div className="col-md-12 center justify" style={right}>
                  <p>Subject: Solicit/Marketers/Distributores -to market our Garlic Sakti Plus (GSP) (a botanical based product, which is using in agriulture plant protection)- in yut area/district-reg., </p>
                    </div>
                  <div className="col-md-6">                 
                    <p style={left}>Respected Sir/Madam :</p>
                  </div>
                   <div className="col-md-12 center justify" style={right}>
                   <p>Here, we would like to present ourselves as DK Organics, a manufacture of botanically based materials that are effective against plant pests and diseases both as preventative measure and as an addivtive to chemical threpeutants.</p>
                   <p>I've included some reading material to help you grasp the topic, its features, how to use it, and everything else.  Along with the contents and the additional features Even after being sprayed with toxic chemicals, Garlic Sakthi Plus has the ability to reverse syntheses action into plants and remove pesticide after 20 days of application.  Derivatives will there fore be free of toxins at the end of the day, extending the shelf life of their organic properties like flavour aroma, colour, and firmness. Due to the lack of toxins, food and feed materials have a chanceto sell fairly in a cutthroat market and also have a chance to increase human and animal immmunity to various diseases and their effects.
                    </p>
                   
                   </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-15">
                  <div className="col-md-18">
                    <p style={{fontSize :'9px', textAlign:"center"}} >Thanking you</p>
                  </div>
                   
                </div>
              </div>
              <div className="row">
               
                <div className="col-md-">
                  <div className="col-md-2.5">
                    <p style={{textAlign:"end", fontSize :'9px'}} >Authortized signature <br/> For DK Organics<br/><img src="asset/images/sign.png" style={{width:"80px", height:"45px"}} alt="sign"></img><br />(M.Murugesan)</p>
                    
                  </div>
                  </div>
                
              </div>
          </div>
    </div>
		</div>
 
	</div><br/>
     <div className="container-fluid center">
     <button
    onClick={() =>
      pdfFromReact(".element-to-print", "My-file", "p", true, false)}
      className="btn btn-success">print pdf</button></div><br />   
       
    </>
    )
}

export default FarmerPdf;