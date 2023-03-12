import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { pdfFromReact } from "generate-pdf-from-react-html";

function GarlicSakthiEnglish() {
    return (
        <>
            
            <div className="container-fluid auto element-to-print mt-3" style={{fontFamily:""}}>
            <div className="container">
<div className="heading-block center">
                <h2>Garlic Sakthi </h2>

            </div>

<div className="row"></div>
<div className="col-lg-5 float-end">
                    <img style={{width:"3000px",height:"500px"}} src="asset/dko-photo/cardamom 3.webp" alt="garlic" />
                    </div>



    <div className="tab-content" id="tabs-2">
        <div className="row">
            <div className="col-lg-16">
            
           
                <blockquote className="quote"><p> <b>Stabilized Garlic Extract Possess Natural Anit Microbial Action as Barrier Agent</b><br /> 
                </p></blockquote>
                <hr />
                    <ul>
                    <li><p>Allium sativum concentrate extract has been stabilized which consists of various chemical compounds named Allicin, Poly sulphides, Vitamins, Electrolytes, Minerals and Phyto Nutrients. </p></li>
                    <li>The Hero ingredint of Allicin, a natural bio active substance acts against Bacteria, Fungi, phytoplasms, and most often viruses that infect the plant. </li><br />
                    <li>As well as acting against various plant pests, nematodes, grubs, snails, insect eggs, snakes, and a variety of seed-borne diseases. </li><br />
                    <li>By providing polysulphides, it prevents foliar diseases, increases chlorophyll and other pigments, and stimulates photosynthesis.</li><br />
                    <li>As a chemical therapeutant for plant protection, it competes with azadirachtin and most of the OP/Phyrithroid group of chemicals.</li><br />
                    <li>It is possible to use garlic extract alone (or) in combination with a compatible chemical source after 20 days of usage to reverse synthesis, thus scavenge free radicals and toxins from the cells of the plant. Thus, the derivatives have been obtained without toxins.</li><br />
                    </ul>
                <hr />
            </div>
             

        </div>
        <div className="col-lg-40">
            <h2>The Prophylectic, Synergy, regular use of Garlic Sakthi upon Cardamom Crops, brings various benefit as quoted below:</h2>
               <ul>
                <li><p>Boost up plant immunity</p></li>
                <li><p>Increase the Chlorophyll and other pigments; Stimulate photo synthesis process.</p></li>
                <li><p>Foliage diseases are kept in controlled</p></li>
                <li><p>Gaining the capsules maturity and weight very fast without scabies</p></li>
                <li><p>Keep the soil fee from nematode, Grub, Snail,Snake etc.,</p></li>
                <li><p>Yield has been derived toxin fre manner improve organic characters like color, aroma, taste etc,. and so, the export possibilities will be increased and price is stabled.</p></li>
               </ul>
              </div>
           
            <div>
            <div className="col-lg-5 float-start">
                    <img  src="asset/dko-photo/cardamom 1.png" style={{height:"280px", width:"350px"}} alt="garlic" />
                    </div>
                <table>
                    <tr><th>Application Mode</th>
                        <th>Recommendations</th></tr>

                    <tr>
                        <td>Soil drenching</td>
                        <td>2.5 ml to 3 ml /ltr of water</td>
                    </tr>
                    <tr>
                        <td>Spraying</td>
                        <td> 5 ml to 10 ml /ltr of water</td>
                    </tr>
                    <tr>
                        <td>Root feeding</td>
                        <td> 10 ml /ltr of water</td>
                    </tr>
                    <tr>
                        <td>Cone feeding</td>
                        <td> 5 ml - 10 ml /ltr of water</td>
                    </tr>
                    <tr>
                        <td>Seed treatment</td>
                        <td> 5 ml - 10 ml /ltr of water</td>
                    </tr>
                    <tr>
                        <td>Drip irrigation mode</td>
                        <td> 4 ltr - 5 ltr/acre</td>
                    </tr>
                    <tr>
                        <td>Synergism</td>
                        <td> 50 - 75% of dose can be added for spraying with compatible chemical pesticides.</td>
                    </tr>
                </table><br />
                <h3>Care:</h3>
                <ul>
                    <li>Avoid to use with biological products.</li>
                    <li>To know its compatibility trail in small area before to use in large</li>
                    <li>Avoid to use on water stressed crop</li>

                    </ul>
                
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
export default GarlicSakthiEnglish;

