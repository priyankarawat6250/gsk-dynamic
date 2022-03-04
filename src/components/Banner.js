import React from "react";
import config from "../config.js";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
SwiperCore.use([Autoplay])
const axios = require("axios");
class Banner extends React.Component{
    state={
      banner_title:'',
        data:[],
        title:""
    }

    componentDidMount(){
        this.getBanners(); 
        this.getSettings(); 
    }

    getBanners = () => {
        axios.get(`${config.backend_URL}/admin/getBanners`)      
          .then((responseJson) => {          
               
              this.setState({data: responseJson.data.data})
              try{
                this.setState({title:responseJson.data.data[0].title})
              }
              catch(err){}
          })
          .catch((error) => {
              console.error(error);
          });        
    }

    getSettings = () => {

      axios.get(`${config.backend_URL}/admin/getSettings`)
        .then((responseJson) => {
            
            this.setState( {banner_title : responseJson.data.data.banner_title} );            
            
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
          <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={0} slidesPerView={1} autoplay={{ delay: 3000 }}>
            
          {this.state.data.length > 0  ? this.state.data.map((x,key) => {
            let bnnrImg = config.backend_URL+'/'+x.image;
              return(
            <SwiperSlide virtualIndex={key}>
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
                  <h1>{this.state.banner_title}</h1>
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