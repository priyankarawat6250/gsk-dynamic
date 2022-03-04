import React from "react";
import { Link } from "react-router-dom";
import config from "../config.js";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';

import Left_Properties from "./Left_Properties.js";
import Right_Properties from "./Right_Properties.js";

const axios = require("axios");

class Properties_City extends React.Component {
  state = {
    Properties: [],
    cities: []
  }

  componentDidMount = () => {

    this.getCities();
  }

  getCities = () => {

    axios.get(`${config.backend_URL}/admin/getCities`)
      .then((responseJson) => {

        this.setState({ cities: responseJson.data.data });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    var num = 0
    return (
      <>

        <article className="cityBlock wrapper">
           
          {this.state.cities.length > 0 ? this.state.cities.map((x, key) => {

            return (

              (x.propertyCount > 0) ?
                 
                ( 
                 

                  ((num++) % 2 == 0) ?
                    <Left_Properties cityId={x._id} cityName={x.city} />

                    :

                    <Right_Properties cityId={x._id} cityName={x.city} />
              

                )
                :
            ''
          )
          
          }) : <></>
        }



        </article>

      </>
    )
  }
};

export default Properties_City;