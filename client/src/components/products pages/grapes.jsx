import React from "react";
import { pdfFromReact } from "generate-pdf-from-react-html";
import "bootstrap/dist/css/bootstrap.min.css"


function GrapesEnglish() {
    return (
        <>
            <div className="container-fluid auto element-to-print mt-3" style={{ fontFamily: "" }}>

                
<div className="container">
                    <div className="heading-block center">
                        <h2>Grapes </h2>

                    </div>

                    <div className="row"></div>
                    <div className="col-lg-4 float-end">
                        <img style={{ width: "2000px", height: "400px" }} src="asset/dko-photo/grapes.jpg" alt="garlic" />
                    </div>



                    <div className="tab-content" id="tabs-2">
                        <div className="row">
                            <div className="col-lg-16">


                                <blockquote className="quote"><p> <b>Why use Garlic Sakthi Plus in grape crop?</b><br /> Garlic Shakti Plus is a viscous liquid formulated with stabilized active bio chemical contents contained in the distilled concentrate of garlic. As mentioned in its laboratory report, Allicin, Selelinum,Polysulphides, Vitamin, NPK (NPK), Calcium (Calcium), Magnesium (Magnesium) etc. have been fixed for long-lasting performance. The facts known through conventional and research based tests, it is known that garlic extract has a special ability to protect the crop from various pests and diseases that attack the crops.
                                </p><br />
                                    <p>In this way, by using Garlic Shakti Plus individually or as an adjuvant in combination with chemical drugs, it protects the crop from various types of pests and diseases.</p>
                                </blockquote>
                                <hr />
                            </div>


                        </div>
                        <div className="col-lg-40">

                            <h3>Accordingly the recommendation method is:</h3>
                            <ul>
                                <li>Applying the Garlic Shakti Plus mixture to the vines around the vines protects young vines from nematode and soil-borne diseases and promotes rapid growth.</li> <br />
                                <li>
                                    Plants get better diseased growth by applying every 20 to 25 days. are completely blocked. It also increases the natural resistance to foliar diseases and increases the greenness of the leaves.</li> <br />
                                <li>Applying Garlic Shakti Plus to vines 15 days prior to grafting on the vines that will benefit will help destroy most of the disease spores and insect eggs and chicks that attacked the vines last season. To prevent them from spreading in the next season because of the type.</li> <br />
                                <li>Consumers have recently been avoiding eating grapes due to forms of chemical pesticides sprayed on them after harvest. Grapes, a highly nutritious fruit, are considered by consumers to be harmful to health and cause various diseases due to the toxins they contain.</li> <br />
                                <li>Contents Recombination of allicin, vitamins, polysulphides and selenium takes place 18 days after in-plant spraying to eliminate residual toxins in the crop.After that, the harvested fruits are non-toxic, with their natural qualities like taste, color, firmness, firmness and shelf life, which increases their demand in the market and fetches a good price.</li> <br />


                            </ul>
                            <h2>After harvesting:</h2>
                            <ul><li>After harvesting, mixing 10 ml of Garlic Shakti Plus per liter of water as needed, soaking the harvested fruits in acid solution for a minute or two and then drying and packing will inactivate the toxins deposited on them and prevent post-harvest diseases in the fruits and prolong their life.</li></ul>

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
export default GrapesEnglish;
