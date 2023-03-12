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


const PDF = (props)=>{
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
                    <p >{props.companyName},</p>
                    <p >{props.companyAddress}</p>
                   
                   
                   </div>
                </div>
              </div>
             </div>
             
             <div className="row container-fluid justify">
                <div className="col-md-12">
                  <div className="col-md-6">
                    <p style={left}>Respected Sir/Madam :</p>
                  </div>
                   <div className="col-md-12 center justify" style={right}>
                    <p>since 2005, We have introduced futuristic products that are formulated from botanical extracts and stablised under the name DK Organics with pride.  This is the result of our unique art of bridging technology (old techniques adopted with current sciences).<br/>Here is an example of one such product, <b>"Garlic sakthi plus,"</b>a stablised extract of concentrated garlic.  According to laboratory analytical results, it contains stable biochemical Allicin, Selenium, Polysylphide, Carbs, Vitamins, etc.  Instead of being found in the aformentioned report, the contents have now been doubled in length. <br/>
                    It can be used as a bridge between or as an addtion to your current formulation of traditional pesticides, such as granular and liquid insecticides, fungicides, weedicides, and soil treatments.  Wherby it offers numerous outlets and opportuinites to market a new solution to combat sucking pest, nematodes, different fungies, and viral infections (as a pathostatic effect).  Additonally, it contains componets like Selenium, carbohydrates, etc.  The targets are drawn to the carbohydrates, which cause them to devour quickly and be subdued in a shot amount of time as "sweet coated poison".  Addtionally, the target insect or disease won't develop a resistance to any specific chemicals beyond all of the aforementioned, the product's standout feature is the reverse synthesis action that occurs in plants after usage for 20days.  It genetically removes all of the poisons from the plants, after which the crop yields as it is grown organically.  As a result, organic farming produces a greater yield while also exhibiting improved taste, colout, aroma, firmness, and shelf life. It has a possibility to command a higher price in the market because of the competition.  The product's central excellence contributes to the provision of toxins-free, healthier food for both humans and animals. <br/>
                    For more elaboration enquiry samples kindly contact to DK Organics through <br/> <span><b>dkorganics.rpt@gmail.com</b></span>
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
                    <p style={{textAlign:"end", fontSize :'9px'}} >Authortized signature <br/> For DK Organics<br/><img src="asset/images/sign.png" style={{width:"80px", height:"45px"}}></img><br />(M.Murugesan)</p>
                    
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

export default PDF;