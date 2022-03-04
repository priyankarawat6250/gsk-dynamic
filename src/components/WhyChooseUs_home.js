import React from "react";
import { Link } from "react-router-dom";
import config from "../config.js";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';

const axios = require("axios");
class WhyChooseUs_home extends React.Component{
    state={
        data:[],
    }

    componentDidMount(){
        this.getWhyChooseUs();  
    }

    getWhyChooseUs = () => {
        axios.get(`${config.backend_URL}/admin/getWhyChooseUs`)      
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
         
         <article className="homeWhyChooseBlock wrapper py-80">
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

                {this.state.data.length > 0  ? this.state.data.map((x,key) => { 
                    let imgPath = config.backend_URL+'/'+x.image;
                    return(

                        <div className="col-md-3">
                            <div className="whyChooseInfoCol">
                                <span>
                                <img src={imgPath} />
                                </span>
                                <h4>{x.title}</h4>
                                <p>{x.description}</p>
                            </div>
                        </div>

                        )}):''
                    }                 
                 
                
              </div>
            </div>
          </div>
        </div>
      </article>
     
    </>
  )
} 
};

export default WhyChooseUs_home;