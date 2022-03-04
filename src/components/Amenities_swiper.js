import React from "react";
import { Link } from "react-router-dom";
import config from "../config.js";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';


const axios = require("axios");
class Amenities_swiper extends React.Component{
    state={
        data:[],
      }
    componentDidMount(){
        this.getAmeneties();  
    }
    getAmeneties =   () => {
  
        axios.get(`${config.backend_URL}/admin/getAmeneties`)         
          .then((responseJson) => {
               
              this.setState({data: responseJson.data.data})
    
               
          })
          .catch((error) => {
              console.error(error);
          });        
      }
    render(){
        return (
        <>
         
         <div className="row">
              <div className="col-md-12">
                <div className="gskAmenContent">
                  <div className="ametiesSldrOuter crslCntrls">
                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={30} slidesPerView={4}>
                        
                    {this.state.data.length > 0  ? this.state.data.map((x,key) => { 
                        let imgPath = config.backend_URL+'/'+x.image;
                        return(
                        <SwiperSlide>
                          <div className="prprtyItem">
                            <Link to="/">
                              <div className="prprtyImg" style={{backgroundImage: `url(${imgPath})`}}>
                                <div className="prprtyOverlay"></div>
                              </div>
                              <div className="prprtyInfo">
                                <h4>{x.title}</h4>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                        )}):''
                        }     
                        
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
     
    </>
  )
} 
};

export default Amenities_swiper;