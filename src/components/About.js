import React from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Header from "./Header.js";
import Footer from "./Footer.js";

class About extends React.Component{
  render(){
    return (
    <>
    <Header />
    <section>
      <article className="pageHdrBlock wrapper py-80" style={{backgroundImage: `url("images/aboutPageBg.jpg")`}}>
        <div className="pageHdrOverlay"></div>
        <div className="container">
          <div className="pageHdrText">
            <p>Property Management in Edmonton and Spruce Grove</p>
            <h3>High-End Apartments, Townhomes and Fully Furnished Suites for Rent.</h3>
            <div className="callNowBtn">
              <Link to="tel:+5875984020" className="btnCommon">Call Us</Link>
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
                <h2>Edmonton Based <span>Property Management</span></h2>
                <div className="hdngBrdrs">
                  <span className="hdngBrdr1"></span>
                  <span className="hdngBrdr2"></span>
                  <span className="hdngBrdr3"></span>
                </div>
                <p>GSK Properties owns and manages high-end quality apartment buildings. in Edmonton and Spruce Grove We are superior to our competition because we provide our residents with a living environment that focuses on maintaining high standards for our buildings, suites, and our staff.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="gskAmenContent">
                  <div className="ametiesSldrOuter crslCntrls">
                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={30} slidesPerView={4}>
                        <SwiperSlide>
                          <div className="prprtyItem">
                            <Link to="/">
                              <div className="prprtyImg" style={{backgroundImage: `url("images/amenities1.jpg")`}}>
                                <div className="prprtyOverlay"></div>
                              </div>
                              <div className="prprtyInfo">
                                <h4>Andalusian Resort Pool</h4>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="prprtyItem">
                            <Link to="/">
                              <div className="prprtyImg" style={{backgroundImage: `url("images/amenities2.jpg")`}}>
                                <div className="prprtyOverlay"></div>
                              </div>
                              <div className="prprtyInfo">
                                <h4>Professional Billiards</h4>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="prprtyItem">
                            <Link to="/">
                              <div className="prprtyImg" style={{backgroundImage: `url("images/amenities3.jpg")`}}>
                                <div className="prprtyOverlay"></div>
                              </div>
                              <div className="prprtyInfo">
                                <h4>Sky Lounge</h4>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="prprtyItem">
                            <Link to="/">
                              <div className="prprtyImg" style={{backgroundImage: `url("images/amenities4.jpg")`}}>
                                <div className="prprtyOverlay"></div>
                              </div>
                              <div className="prprtyInfo">
                                <h4>Guest Suites</h4>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="prprtyItem">
                            <Link to="/">
                              <div className="prprtyImg" style={{backgroundImage: `url("images/amenities5.jpg")`}}>
                                <div className="prprtyOverlay"></div>
                              </div>
                              <div className="prprtyInfo">
                                <h4>Starbucks Bistro</h4>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="prprtyItem">
                            <Link to="/">
                              <div className="prprtyImg" style={{backgroundImage: `url("images/amenities1.jpg")`}}>
                                <div className="prprtyOverlay"></div>
                              </div>
                              <div className="prprtyInfo">
                                <h4>Valet Trash Pick-up</h4>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="prprtyItem">
                            <Link to="/">
                              <div className="prprtyImg" style={{backgroundImage: `url("images/amenities2.jpg")`}}>
                                <div className="prprtyOverlay"></div>
                              </div>
                              <div className="prprtyInfo">
                                <h4>Yoga/Aerobics Studio</h4>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="prprtyItem">
                            <Link to="/">
                              <div className="prprtyImg" style={{backgroundImage: `url("images/amenities3.jpg")`}}>
                                <div className="prprtyOverlay"></div>
                              </div>
                              <div className="prprtyInfo">
                                <h4>Oak Tower</h4>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="aboutInfoBlock wrapper pt-80">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="aboutInfoCol">
                <div className="aboutInfoImg" style={{backgroundImage: `url("images/aboutImg1.jpg")`}}></div>
                <div className="aboutInfoDes">
                  <h4>Brand New or Completely Renovated Buildings</h4>
                  <p>Our buildings are either newer or completely renovated both suites and common areas. The pictures you see on this site are real – you don’t get disappointed when you show up for viewing. We would love to have a tour with us and show you more.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="aboutInfoCol">
                <div className="aboutInfoDes">
                  <h4>On-Site Community Leaders</h4>
                  <p>On-site Community Leaders live in the building to handle resident concerns on a timely basis. Just let us know about your problem and it will be solved.</p>
                </div>
                <div className="aboutInfoImg" style={{backgroundImage: `url("images/aboutImg2.jpg")`}}></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="aboutInfoCol">
                <div className="aboutInfoImg" style={{backgroundImage: `url("images/aboutImg3.jpg")`}}></div>
                <div className="aboutInfoDes">
                  <h4>In House Maintenance Team</h4>
                  <p>Dedicated community specialist to attend to repair requests in a professional manner. NO toll-free numbers to call when you have an issue. We respect your time, so we don’t want you to sit on the phone for hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
    <Footer />
    </>
    ) } }

export default About;