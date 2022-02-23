import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header.js";
import Footer from "./Footer.js";

 
class WhyChooseUs extends React.Component{
    render(){
        return (
        <>
        <Header />
    <section>
      <article className="pageHdrBlock wrapper py-80" style={{backgroundImage: `url("images/subpageBg.jpg")`}}>
        <div className="pageHdrOverlay"></div>
        <div className="container">
            <div className="row align-items-center justify-space-beetween">
                <div className="col-sm">
                    <h3>Why Choose Us</h3>
                </div>
                <div className="col-sm-auto">
                    <div className="pagebrdcrmbs">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Why Choose Us</li>
                        </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
      </article>
      <article className="homeWhyChooseBlock aboutWhyChooseBlock wrapper pt-80">
        <div className="whyChooseRow">
            <div className="container">
                <div className="mainHeading headingWhite headingCenter">
                    <h2>Why Choose Us</h2>
                    <div className="hdngBrdrs">
                        <span className="hdngBrdr1"></span>
                        <span className="hdngBrdr2"></span>
                        <span className="hdngBrdr3"></span>
                    </div>
                </div>
                <div className="whyChooseInfoDiv">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="whyChooseInfoCol">
                                <span>
                                    <img src="images/chooseIcon1.png" />
                                </span>
                                <h4>Find your future home</h4>
                                <p>We help you find a new home by offering a smart GSK Properties experience.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="whyChooseInfoCol">
                                <span>
                                    <img src="images/chooseIcon2.png" />
                                </span>
                                <h4>Experienced agents</h4>
                                <p>Find an agent who knows your market the best.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="whyChooseInfoCol">
                                <span>
                                    <img src="images/chooseIcon3.png" />
                                </span>
                                <h4>Rent homes</h4>
                                <p>Millions of houses and apartments in your favourite cities.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="whyChooseInfoCol">
                                <span>
                                    <img src="images/chooseIcon4.png" />
                                </span>
                                <h4>Maximum Choices</h4>
                                <p>A plethora of property options to choose from.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </article>
    </section>
    <Footer />
    </>
  )
} 
};

export default WhyChooseUs;