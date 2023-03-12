import React from "react";
import { pdfFromReact } from "generate-pdf-from-react-html";
import "bootstrap/dist/css/bootstrap.min.css"

function TeaEnglish(){
    return(
        <>
          <div className="container-fluid auto element-to-print mt-3" style={{ fontFamily: "" }}>

          <div className="container">
<div className="heading-block center">
                <h2>Tea </h2>

            </div>

<div className="row"></div>
<div className="col-lg-5 float-end">
                    <img style={{width:"3000px",height:"500px"}} src="asset/dko-photo/tea tree 3.jpg" alt="garlic" />
                    </div>



    <div className="tab-content" id="tabs-2">
        <div className="row">
            <div className="col-lg-16">
            
           
                <blockquote className="quote"><p> <b>Why use Garlic Sakthi Plus for tea cultivation?</b><br /> Garlic Shakti Plus is concentrated juice extracted from garlic and its contents are fixed as active ingredient (Boo chemical-Active Ingredient) Viscous as mentioned in its (Laboratory Analytical Report)is liquid.In these is Allicim, Selenium, Poly Sulphides, Carbo Hydrate,Vitamin, NPK, Calcium, Magnesium

It is a fixed natural feature.
                </p></blockquote>
                                                <hr />
            </div>
             

        </div>
        <div className="col-lg-40">
           
           <p>The practical case (Conventional) and the facts from the studies (Research) are talking about the excellent ability of white onion extract to work against pathogens not only in India but all over the world.</p>
            <br />
            <p>
They are known to be effective against various pests and diseases in crops and are known to be used individually or as an adjuvant in combination with various chemicals.</p>
           <br />
           <p>Process Through surveys As an experiment :<br />(1). Garlic Shakti Plus Alone in crops (Prophylactic Dose) to increase Chlorophyll when used In addition to doing photosynthesis (Photo Synthesis) Accelerate

of the crop Healthy For development As a support has Further Tea leaf Mosquito (TMB) and Blister Blight etc Impact humble on the scale
to decrease causing. <br /> (2).Subs Adjuvant Garlic Shakti Plus Neem And with chemical remedies (Chemical Therapeudent)
connect will use when Insects And diseases Soon are controlled. <br />(3). Garlic

Shakti Plus

Alone

Deputy

As medicine

In tea

Used

20

for days

Then garlic

power

In Plus

contained

Allicin

Small

Vitamin

And

of polysulfides

(Polysulphides)

Aftermath

Enrollment

functions (reversal

synthesis)

Inside the plant

stained

Various

Toxicity (Pre

radicals)due to

Acts as an exfoliant and flushes out toxins and yields a non-toxic tea

to receive

way

does

Received

of yield

Nature

Qualities

Taste

Color (Coplour),

Aroma,

Firmness

In the

Its

Self life

Improved

As explained

Demand in the market

increasing

It increases its value.</p>
            <div>
            
                
                
            </div>


    </div>
   
</div>
</div>
</div><br />
<div className="container-fluid center">
    <button
        onClick={() =>
            pdfFromReact(".element-to-print", "My-file", "p", true, false)}
        className="btn btn-success">print pdf</button></div><br />
        
        </>
    )
}
export default TeaEnglish;

