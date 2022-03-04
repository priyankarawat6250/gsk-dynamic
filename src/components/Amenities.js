import React from "react"; 
import config from "../config.js";
import Amenities_swiper from "./Amenities_swiper.js";

const axios = require("axios");
class Amenities extends React.Component{
    state={
      amenity_heading:"",
      amenity_desc:"",
    }

    componentDidMount(){
        this.getSettings();  
    }

    getSettings =   () => {

      axios.get(`${config.backend_URL}/admin/getSettings`)         
        .then((responseJson) => {
            
          this.setState({
            amenity_heading: responseJson.data.data.amenity_heading,
            amenity_desc: responseJson.data.data.amenity_desc
          })
          
        })
        .catch((error) => {
            console.error(error);
        });        
    }
    render(){
        return (
        <>
         
         <article className="gskCatAmenBlock wrapper py-80">
        <div className="gskAmenBlock">
          <div className="abtKeyPatt">
            <img src="images/keyIcon1.png" />
          </div>
          <div className="container">
            <div className="row">
              <div className="mainHeading amentiesHdng text-center col-md-8 offset-md-2">
                <h2>{this.state.amenity_heading}</h2>
                <div className="hdngBrdrs">
                  <span className="hdngBrdr1"></span>
                  <span className="hdngBrdr2"></span>
                  <span className="hdngBrdr3"></span>
                </div>
                <p>{this.state.amenity_desc}</p>
              </div>
            </div>

              <Amenities_swiper />


          </div>
        </div>
      </article>
     
    </>
  )
} 
};

export default Amenities;