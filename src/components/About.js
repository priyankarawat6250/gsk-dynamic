import React from "react";
import { Link } from "react-router-dom"; 
import config from "../config.js";

import Amenities_swiper from "./Amenities_swiper.js";
const axios = require("axios");

class About extends React.Component{

  state={
    data:[],
    bkg_image:'',
    main_title:'',
    main_heading:'',
    sub_heading:'',
    sub_description:'',
    phone:''
  }

  componentDidMount(){
      this.getAboutUs();  
      this.getSettingsData();  
  }

  getSettingsData = () => {
     axios.get(`${config.backend_URL}/admin/getSettings`)
      .then((responseJson) => {
         
        this.setState({ 
            phone: responseJson.data.data.phone
        })
         
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getAboutUs =   () => {

      axios.get(`${config.backend_URL}/admin/getAboutUs`)         
        .then((responseJson) => {
            
            this.setState(responseJson.data.data);
            
            console.log('hsdfsdf', this.state);
        })
        .catch((error) => {
            console.error(error);
        });        
    }

  render(){
    let bkgImage = config.backend_URL+'/'+this.state.bkg_image;
    return (
    <>
     
    <section>
      <article className="pageHdrBlock wrapper py-80" style={{backgroundImage: `url(${bkgImage})`}}>
        <div className="pageHdrOverlay"></div>
        <div className="container">
          <div className="pageHdrText">
            <p>{this.state.main_title}</p>
            <h3>{this.state.main_heading}</h3>
            <div className="callNowBtn">
              <Link to={`tel:${this.state.phone}`} className="btnCommon">Call Us</Link>
            </div>
          </div>
        </div>
      </article>
      <article className="gskCatAmenBlock wrapper py-80">
        <div className="gskAmenBlock">
          <div className="abtKeyPatt">
            <img src="images/keyIcon1.png" />
          </div>
          <div className="container">
            <div className="row">
              <div className="mainHeading amentiesHdng text-center col-md-8 offset-md-2">

                <h2> Edmonton Based <span>Property Management</span> </h2>

                <div className="hdngBrdrs">
                  <span className="hdngBrdr1"></span>
                  <span className="hdngBrdr2"></span>
                  <span className="hdngBrdr3"></span>
                </div>
                <p>{this.state.sub_description}</p>
              </div>
            </div>

            <Amenities_swiper />


          </div>
        </div>
      </article>

      <article className="aboutInfoBlock wrapper pt-80">
        <div className="container">
          <div className="row">

          {this.state.data.map((x,key) => { 
              let imgPath = config.backend_URL+'/'+x.image;
                  return(
                  (key%2==0) ?
                  
                      <div className="col-md-4">
                        <div className="aboutInfoCol">
                          <div className="aboutInfoImg" style={{backgroundImage: `url(${imgPath})`}}></div>
                          <div className="aboutInfoDes">
                            <h4>{x.title}</h4>
                            <p>{x.description}</p>
                          </div>
                        </div>
                      </div>
                :
                      <div className="col-md-4">
                        <div className="aboutInfoCol">
                          <div className="aboutInfoDes">
                          <h4>{x.title}</h4>
                          <p>{x.description}</p>
                          </div>
                          <div className="aboutInfoImg" style={{backgroundImage:  `url(${imgPath})`}}></div>
                        </div>
                      </div>
                  )
              }
            ) 
          }  

          </div>
        </div>
      </article>
    </section>
     
    </>
    ) } }

export default About;