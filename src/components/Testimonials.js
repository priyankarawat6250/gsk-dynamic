import React from "react";
import { Link } from "react-router-dom"; 

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 

import config from "../config.js";
import Testimonials_Loop from "./Testimonials_Loop.js";
const axios = require("axios");

class Testimonials extends React.Component{
    state={
        data:[],
    }

    componentDidMount(){
        this.getTestimonialProperties(); 
        this.getSettings(); 
    }

    getTestimonialProperties = () => {
        axios.post(`${config.backend_URL}/admin/getTestimonialProperties`,{})      
          .then(async (responseJson) => {
             
            await this.setState({data: responseJson.data.data})

          })
          .catch((error) => {
              console.error(error);
          });        
    }

    getSettings = () => {

        axios.get(`${config.backend_URL}/admin/getSettings`) 
          .then((responseJson) => {
              
            this.setState({
              google_rating: responseJson.data.data.google_rating,
              facebook_rating: responseJson.data.data.facebook_rating,
              google_page_link: responseJson.data.data.google_page_link,
              facebook_page_link: responseJson.data.data.facebook_page_link,
              google_text: responseJson.data.data.google_text,
              facebook_text:responseJson.data.data.facebook_text
            })
          })
          .catch((error) => {
              console.error(error);
          });        
      }
      
    getRatingsStar  = (stars,flag) => {

        let html = [];
        for (var i = 0; i < stars; i++) {
          if(flag=='fb'){
             html.push( <i><img src="images/rateIconBlue.png" /></i> )
          }else{
            html.push( <i><img src="images/rateIconOrange.png" /></i> )
          }
        }

        return html;
    }

    render(){
        return (
        <>
        
    <section>
      <article className="pageHdrBlock wrapper py-80" style={{backgroundImage: `url("images/subpageBg.jpg")`}}>
        <div className="pageHdrOverlay"></div>
        <div className="container">
            <div className="row align-items-center justify-space-beetween">
                <div className="col-sm">
                    <h3>Testimonials</h3>
                </div>
                <div className="col-sm-auto">
                    <div className="pagebrdcrmbs">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Testimonials</li>
                        </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
      </article>


      <article className="testiHeadingBlock wrapper py-60">
        <div className="container">
            <div className="rvwsHdrDiv">
                <div className="row g-5 align-items-center">
                    <div className="col-sm">
                        <div className="mainHeading m-0">
                            <h2>GSK Happy Clients</h2>
                            <div className="hdngBrdrs">
                                <span className="hdngBrdr1"></span>
                                <span className="hdngBrdr2"></span>
                                <span className="hdngBrdr3"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-auto">
                        <div className="reviewRatingDiv">
                            <div className="reviewRatingRow">
                            <a href={this.state.google_page_link}>
                                        <div className="rvwRatingCol">
                                        <div className="rvwRatingIcon">
                                            <img src="images/googleIcon.png" />
                                        </div>


                                        
                                        <div className="rvwRatingDes">
                                            
                                            <div className="rvwRatingTtl">Google Rating</div>
                                            <div className="rvwRatingScore">
                                            <span> {this.state.google_rating} </span>
                                            <div class="rvwRatingStars">

                                            {this.getRatingsStar(this.state.google_rating,'google')}

                                            </div>
                                            </div>


                                            <div className="rvwRatingNote">
                                            <p> {this.state.google_text}  </p>
                                            </div>
                                        </div>
                                        </div>
                                </a>

                                 
                                <a href={this.state.facebook_page_link}>
                                    <div className="rvwRatingCol">
                                    <div className="rvwRatingIcon">
                                        <img src="images/facebookIcon.png" />
                                    </div>
                                    <div className="rvwRatingDes">
                                        <div className="rvwRatingTtl">Facebook Rating</div>
                                        <div className="rvwRatingScore">
                                        <span>{this.state.facebook_rating}</span>
                                        <div className="rvwRatingStars">
                                            
                                            {this.getRatingsStar(this.state.facebook_rating,'fb')}

                                        </div>
                                        </div>
                                        <div className="rvwRatingNote">
                                        <p> {this.state.facebook_text}  </p>
                                        </div>
                                    </div>
                                    </div>
                                </a>
                                 


                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </article>
      <article className="testimonialBlock wrapper">

      {this.state.data.length > 0  ? this.state.data.map((x,key) => { 
        let imagePath = config.backend_URL+'/'+x.property_image;
        return(

        (key % 2 ==0) ?
        <div className="testimonialRow py-60">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-md-6">
                        <div className="testiMainDiv"  >
                            <div className="mainHeading">
                                <h5>Customers reviews</h5>
                                <h2>About <span>{x.property_name}</span></h2>
                                <div className="hdngBrdrs">
                                    <span className="hdngBrdr1"></span>
                                    <span className="hdngBrdr2"></span>
                                    <span className="hdngBrdr3"></span>
                                </div>
                            </div>
                            <div className="testiSliderOuter">
                                <div className="testimonialSlider crslCntrls">
                                      <Testimonials_Loop testimonils={x.main}/>
                                     
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
            <div className="testiMainImg" style={{backgroundImage: `url(${imagePath})`}}></div>
        </div>
            :
        <div className="testimonialRow py-60">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-md-6">
                        <div className="testiMainDiv">
                            <div className="mainHeading">
                                <h5>Customers reviews</h5>
                                <h2>About <span>{x.property_name}</span></h2>
                                <div className="hdngBrdrs">
                                    <span className="hdngBrdr1"></span>
                                    <span className="hdngBrdr2"></span>
                                    <span className="hdngBrdr3"></span>
                                </div>
                            </div>
                            <div className="testiSliderOuter">
                                <div className="testiSliderOuter testimonialSlider crslCntrls">
                                    
                                    <Testimonials_Loop testimonils={x.main}/>
                                        
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
            <div className="testiMainImg" style={{backgroundImage: `url(${imagePath})`}}></div>
        </div>

        )}):''
        } 

      </article>
    </section>
     
    </>
  )
} 
};

export default Testimonials;