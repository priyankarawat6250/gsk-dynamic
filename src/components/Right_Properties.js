import React from "react";
import { Link } from "react-router-dom";
import config from "../config.js";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';

const axios = require("axios");

class Right_Properties extends React.Component {
  state = {
    Images: [],
  }

  componentDidMount = () => {
    let cityId = this.props.cityId;
    this.getCities();
    this.getProperties(cityId);
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

  getProperties = (key) => {
    let newObj = {};
    newObj = { cityId: key }
    axios.post(`${config.backend_URL}/admin/getProperties`, newObj)
      .then((responseJson) => {
        this.setState({ Images: responseJson.data.data })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>

        <div className="citySldrRow py-80">
          <div className="citySldrMainDiv">
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <div className="citySldrContnt">
                    <div className="mainHeading">
                      <h2>Introducing <span> {this.props.cityName} </span> Houses</h2>
                      <div className="hdngBrdrs">
                        <span className="hdngBrdr1"></span>
                        <span className="hdngBrdr2"></span>
                        <span className="hdngBrdr3"></span>
                      </div>
                    </div>
                    <div className="exploreBtn">
                      <Link to="properties" className="btnCommon">Explore More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-9"></div>
              </div>
            </div>
          </div>
          <div className="citySliderOuter crslCntrls">
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={30} slidesPerView={2.2} centeredSlides={true} loop={true}>

              {this.state.Images.length > 0 ? this.state.Images.map((x, key) => {
                let proImg = `${config.backend_URL}/${x.property_image}`;
                return (
                  <SwiperSlide>
                    <div className="citySlide" style={{ backgroundImage: `url(${proImg})` }}></div>
                  </SwiperSlide>
                )
              }) : <></>
              }
            </Swiper>
          </div>
        </div>


      </>
    )
  }
};

export default Right_Properties;