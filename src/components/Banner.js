import React from "react";
import { Link } from "react-router-dom";
import config from "../config.js";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';

const axios = require("axios");
class Banner extends React.Component{
    state={
        data:[],
    }

    componentDidMount(){
        this.getBanners();  
    }

    getBanners = () => {
        axios.get(`${config.backend_URL}/admin/getBanners`)      
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
         
        <article className="sliderBlock wrapper">
        <div className="mainSlider-outer mainSlider crslCntrls crslCntrlsWhite">
          <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={0} slidesPerView={1}>
            
          {this.state.data.length > 0  ? this.state.data.map((x,key) => {
            let bnnrImg = config.backend_URL+'/'+x.image;
              return(
            <SwiperSlide>
              <div className="mainSldrSlide" style={{backgroundImage: `url(${bnnrImg})`}}>
                <div className="mainSldrOverlay"></div>
              </div>
            </SwiperSlide>
            )
          }):''
          }
             
          </Swiper>

          <div className="mainSldrBarDiv">
            <div className="mainSldrTextDiv">
              <div className="container">
                <div className="mainSldrText">
                  <h1>{this.state.data > 0 ? this.state.data[0].title:''}</h1>
                </div>
              </div>
            </div>
            <div className="mainSliderOptions">
              <div className="bookApointBtn">&nbsp;</div>
            </div>
          </div>

        </div>
      </article>
     
    </>
  )
} 
};

export default Banner;