import React from "react";
import { Link } from "react-router-dom";
import config from "../config.js";
import  SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
SwiperCore.use([Autoplay])
const axios = require("axios");

class Properties_img extends React.Component{
    state={
        Properties:[]
    }

    componentDidMount(){
        this.getProperties();  
    }

    getProperties =   (key) => {
        
        let newObj = {};
        if(key!='all'){
            newObj = { cityId: key} 
        }

        axios.post(`${config.backend_URL}/admin/getProperties`,newObj)         
        .then((responseJson) => {        
            
          this.setState({Properties: responseJson.data.data, cityId: key})           
           
        })
        .catch((error) => {
          console.error(error);
        });        
    }

    render(){
        return (
        <>
          <article className="homePropertyBlock wrapper py-80">
        <div className="ltstPrprtyRow">
           
        <div className="prprtySldrOuter crslCntrls">
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={30} slidesPerView={5}  loop={true} autoplay={{ delay: 3000 }}>
              
              {this.state.Properties.length > 0  ? this.state.Properties.map((x,key) => {
                  let proImg = `${config.backend_URL}/${x.property_image}`;
                return(
              <SwiperSlide>
                <div className="prprtyItem">
                  <Link to={x.slug}>
                    <div className="prprtyBadge">For Rent</div>
                    <div className="prprtyImg" style={{backgroundImage: `url(${proImg})`}}>
                      <div className="prprtyOverlay"></div>
                    </div>
                    <div className="prprtyInfo">
                      <h4>{x.property_name}</h4>
                      <p><i><img src="images/locIcon.png" /></i> {x.address}</p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              )
            }):''}
            
            </Swiper>
        </div>

        
        </div>
      </article>
     
    </>
  )
} 
};

export default Properties_img;