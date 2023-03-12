import React from "react";
import { pdfFromReact } from "generate-pdf-from-react-html";
import "bootstrap/dist/css/bootstrap.min.css"

function BananaGarlicEnglish() {
    return (
        <>
            <div className="container-fluid auto element-to-print mt-3" style={{ fontFamily: "" }}>

                <div className="container">
                    <div className="heading-block center">
                        <h2>Banana </h2>

                    </div>

                    <div className="row"></div>
                    <div className="col-lg-5 float-end">
                        <img style={{ width: "3000px", height: "500px" }} src="asset/dko-photo/banana1.jpg" alt="garlic" />
                    </div>



                    <div className="tab-content" id="tabs-2">
                        <div className="row">
                            <div className="col-lg-16">


                                <blockquote className="quote"><p> <b>Why use Garlic Sakthi Plus in banana cultivation?</b><br /> Garlic Power Plus. Stabilized Active Bio Chemical (Stabilized Active Bio Chemical) is produced by traditional and modern scientific technology. Allicin is the main ingredient contained in it through their connection and research activities (Hybrid Technology),It has the ability to act against insects and diseases. As well as N.P.K. Contains various molecules like NPK, Selenium, Carbo Hydrate, Vitamin. The following benefits can be obtained by using Carbo Garlic Shakti Plus as an adjuvant drug in banana cultivation as a prophylactic and therapeutic agent against insect and disease attacks.
                                </p></blockquote>
                                <ul><li><p>Application of Garlic Shakti Plus in planted banana helps to avoid loss of seedlings from nematode (Namcrode) attack, Erewinea (Erewinea) attack etc. and helps in uniform growth and leaf disease prevention. Four at an interval of 25 to 30 days Using the method does not give good results.</p></li>
                                    <li>Treatment of foliar disease is best done by spraying in combination with drugs.</li>
                                </ul>
                                <hr />
                            </div>


                        </div>
                        <div className="col-lg-40">
                            <h4> <b>Method and Amount of Recommendation:</b> </h4>
                            <p>By dissolving 5 ml of garlic power in 1 liter of water and pouring 250 ml of the above solution into the transplanted soil, the crop is protected from nematode attack and eryvinia disease. Also, it directly provides energy and stimulates the growth of the crop. Prevents leaf disease by increasing greenness in leaves.</p><br />

                            <h4> Stem borer: </h4>
                            <p>10 ml of Garlic Shakti Plus mixed with 10 ml of Monocrotomos in one liter of water and 10 to 20 ml of the above mixture can be injected to control stem weevil attack on banana according to the growth of the tree. Stop watering only on the day of application of the medicinal mixture.</p> <br />

                            <h4> Banana yield, weight gain: </h4>
                            <p>Applying Garlic Shakti Plus every 25 days from the time of tar emergence alone or in combination with the required chemical spray helps the beans gain weight and mature quickly.</p> <br />

                            <h4> Banana virus disease: </h4>
                            <p>It is better to remove the affected crop immediately after virus attack in banana. Or apply Dimethoate 25 ml with 50 ml Carleek Shakti Plus per 10 liters and growth hormone as per recommendation twice at 20 to 25 days interval. This prevents the development of viral diseases and helps to recover 60% to 75% of the yield loss caused by them.</p>
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
export default BananaGarlicEnglish;


