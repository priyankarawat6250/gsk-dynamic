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
        this.getSettings();  
    }

    getTestimonials = () => {
        axios.post(`${config.backend_URL}/admin/getTestimonials`)      
          .then(async (responseJson) => {          
               
              // return
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
          
          <div className="reviewSliderOuter">
            <div className="reviewSlider crslCntrls">
              <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={110} slidesPerView={3} centeredSlides={false} loop={true}>
                
              {this.state.data.length > 0  ? this.state.data.map((x,key) => { 
                let imgPath = config.backend_URL+'/'+x.image;
                return(
  
                    <SwiperSlide>
                    <div className="reviewSlide">
                        <div className="reviewContent">
                            <p>“{x.desc}”</p>
                        </div>
                        <div className="reviewTitle">
                        <h4>{x.name.substring(0,x.name.indexOf(" ")+2)}</h4>
                        </div>
                          <div className="reviewAuthor">
                          <span>
                              <img src={imgPath} />
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