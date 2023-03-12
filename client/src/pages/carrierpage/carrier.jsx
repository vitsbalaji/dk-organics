import React from "react";

function Carrier(){
    const wid = {
        maxWidth:'700px'
    }
    const wid1 = {
        maxWidth:'600px'
    }
    return<><section id="slider" className="slider-element min-vh-100 dark include-header">
    <div className="slider-inner">

        <div className="vertical-middle">
            <div className="container-fluid">

                <div className=" text-center">
                    <h1>Page is under construction (COMING-SOON)</h1>
                    <span>Please check back again within Some Days as We're Pretty Close</span>
                </div>

                <div id="countdown-ex1" className="countdown countdown-large coming-soon mx-auto mb-5" data-year="2023" data-month="2" style={wid}></div>

                <div className="subscribe-widget">
                    <div className="widget-subscribe-form-result"></div>
                    <form id="widget-subscribe-form" action="include/subscribe.php" method="post" className="mb-0">
                        <div className="input-group input-group-lg mx-auto" style={wid1}>
                            <div className="input-group-text"><i className="icon-email2"></i></div>
                            <input type="email" name="widget-subscribe-form-email" className="form-control required email" placeholder="Enter your Email" />
                            <button className="btn bg-color" type="submit">Subscribe Now</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

        <div className="video-wrap">
            <video poster='images/videos/explore-poster.jpg' preload muted autoplay loop>
                <source src='images/videos/explore.mp4' type='video/mp4' />
                <source src='images/videos/explore.webm' type='video/webm' />
            </video>
            <div className="video-overlay"></div>
        </div>

    </div>
</section>
    </>;

}

export default Carrier;