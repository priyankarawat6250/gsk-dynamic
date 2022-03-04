import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header.js";
import Footer from "./Footer.js";

import WhyChooseUs_section from "./WhyChooseUs_home.js";
class WhyChooseUs extends React.Component{
    render(){
        return (
        <>
         
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

      <WhyChooseUs_section />


    </section>
     
    </>
  )
}
};

export default WhyChooseUs;