import React from "react";
import { Link } from "react-router-dom";
import config from "../config.js";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';

const axios = require("axios");
class Testimonials_home extends React.Component{
    state={
        data:[],
    }

    componentDidMount(){
        this.getTestimonials();  
    }

    getTestimonials = () => {
        axios.get(`${config.backend_URL}/admin/getTestimonials`)      
          .then(async (responseJson) => {          
               
              // return
              await this.setState({data: responseJson.data.data})
          })
          .catch((error) => {
              console.error(error);
          });        
    }

    render(){
        return (
        <>
         
         <article className="reviewsBlock wrapper py-80">
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
                    <div className="rvwRatingCol">
                      <div className="rvwRatingIcon">
                        <img src="images/googleIcon.png" />
                      </div>
                      <div className="rvwRatingDes">
                        <div className="rvwRatingTtl">Google Rating</div>
                        <div className="rvwRatingScore">
                          <span>4.8</span>
                          <div class="rvwRatingStars">
                            <i><img src="images/rateIconOrange.png" /></i>
                            <i><img src="images/rateIconOrange.png" /></i>
                            <i><img src="images/rateIconOrange.png" /></i>
                            <i><img src="images/rateIconOrange.png" /></i>
                            <i><img src="images/rateIconOrange.png" /></i>
                          </div>
                        </div>
                        <div className="rvwRatingNote">
                          <p>Based on 10+ reviews</p>
                        </div>
                      </div>
                    </div>
                    <div className="rvwRatingCol">
                      <div className="rvwRatingIcon">
                        <img src="images/facebookIcon.png" />
                      </div>
                      <div className="rvwRatingDes">
                        <div className="rvwRatingTtl">Facebook Rating</div>
                        <div className="rvwRatingScore">
                          <span>4.8</span>
                          <div className="rvwRatingStars">
                            <i><img src="images/rateIconBlue.png" /></i>
                            <i><img src="images/rateIconBlue.png" /></i>
                            <i><img src="images/rateIconBlue.png" /></i>
                            <i><img src="images/rateIconBlue.png" /></i>
                            <i><img src="images/rateIconBlue.png" /></i>
                          </div>
                        </div>
                        <div className="rvwRatingNote">
                          <p>Based on 50+ reviews</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviewSliderOuter">
            <div className="reviewSlider crslCntrls">
              <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={110} slidesPerView={3} centeredSlides={true} loop={true}>
                
              {this.state.data.length > 0  ? this.state.data.map((x,key) => { 
                let imgPath = config.backend_URL+'/'+x.image;
                return(
                    <SwiperSlide>
                    <div className="reviewSlide">
                        <div className="reviewContent">
                        <p>“We really like living at the Silverstone Apts. The Apt is kept clean and very quiet. Could not ask for better management from the time we did our viewing to our stay Vicky Sharma and the team have been great. Quick to solve any issues we had with great care. Will highly recommend the property to others.”</p>
                        </div>
                        <div className="reviewTitle">
                        <h4>Joanne R</h4>
                        </div>
                        <div className="reviewAuthor">
                        <span>
                            <img src="images/user1.png" />
                        </span>
                        </div>
                    </div>
                    </SwiperSlide>
                )}):''
            } 
                
                 
              </Swiper>
            </div>
          </div>
        </div>
      </article>
     
    </>
  )
} 
};

export default Testimonials_home;