import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../config.js";
import { Button, Modal } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Header from "./Header.js";
import Footer from "./Footer.js";
import Banner from "./Banner.js";
import Amenities from "./Amenities.js";
import Testimonials from "./Testimonials_home.js";

const axios = require("axios");

class Home extends React.Component{

  state={
    show:false
  }
 
  handleClose = () => this.setState({show:false})
  handleShow = () => this.setState({show:true})


  render(){
    return (
      <>
    <Header />

    <section>

      
      < Banner/>


      <article className="homeCallActBlock searchAdvanceBlk wrapper py-40">
        <div className="container">		
          <form className="advncSearchForm">
            <div className="row d-flex align-items-center ">
              <div className="col-md-3">
                <div className="form-group">
                  <label>City</label>
                  <input type="text" className="form-control" placeholder="City" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Budget</label>
                    <select className="form-select" aria-label="Default select example" name="type">
                      <option value="0" selected="">Budget</option>
                      <option value="1">250 $</option>
                      <option value="2">400 $</option>
                      <option value="3">700 $</option>														
                  </select>
                </div>
              </div>
              <div className="col-md-1">
                <div className="form-group">
                  <label>Room</label>
                  <select className="form-select" aria-label="Default select example" name="type">
                    <option value="0" selected="">1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>															
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Category</label>
                  <select className="form-select" aria-label="Default select example" name="type">
                    <option value="0" selected="">Category</option>
                    <option value="1">Villas</option>
                    <option value="2">Office</option>
                    <option value="3">Town</option>															
                  </select>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btnCommon mt-4">Search</button>
              </div>
            </div>		
          </form>		
        </div>
      </article>


      <Amenities />
      


      <article className="cityBlock wrapper">
        <div className="citySldrRow py-80">
          <div className="citySldrMainDiv">
            <div className="container">
              <div className="row">
                <div className="col-sm-9"></div>
                <div className="col-sm-3">
                  <div className="citySldrContnt">
                    <div className="mainHeading">
                      <h2>Introducing <span>Edmonton</span> Houses</h2>
                      <div className="hdngBrdrs">
                        <span className="hdngBrdr1"></span>
                        <span className="hdngBrdr2"></span>
                        <span className="hdngBrdr3"></span>
                      </div>
                    </div>
                    <div className="exploreBtn">
                      <Link to="javascript:void(0)" className="btnCommon">Explore More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="citySliderOuter crslCntrls">
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={30} slidesPerView={2.2} centeredSlides={true} loop={true}>
              <SwiperSlide>
                <div className="citySlide" style={{backgroundImage: `url("images/edmontonImg1.jpg")`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="citySlide" style={{backgroundImage: `url("images/edmontonImg2.jpg")`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="citySlide" style={{backgroundImage: `url("images/edmontonImg3.jpg")`}}></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="citySldrRow py-80">
          <div className="citySldrMainDiv">
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <div className="citySldrContnt">
                    <div className="mainHeading">
                      <h2>Introducing <span>Spruce Grove</span> Houses</h2>
                      <div className="hdngBrdrs">
                        <span className="hdngBrdr1"></span>
                        <span className="hdngBrdr2"></span>
                        <span className="hdngBrdr3"></span>
                      </div>
                    </div>
                    <div className="exploreBtn">
                      <Link to="javascript:void(0)" className="btnCommon">Explore More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-9"></div>
              </div>
            </div>
          </div>
          <div className="citySliderOuter crslCntrls">
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={30} slidesPerView={2.2} centeredSlides={true} loop={true}>
              <SwiperSlide>
                <div className="citySlide" style={{backgroundImage: `url("images/spruceGroveImg1.jpg")`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="citySlide" style={{backgroundImage: `url("images/spruceGroveImg2.jpg")`}}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="citySlide" style={{backgroundImage: `url("images/spruceGroveImg3.jpg")`}}></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </article>
      <article className="homePropertyBlock wrapper py-80">
        <div className="ltstPrprtyRow">
          <div className="prprtyMainDiv">
            <div className="container">
              <div className="row">
                <div className="col-sm-9"></div>
                <div className="col-sm-3">
                  <div className="ltstPrprtyCntnt">
                    <div className="mainHeading headingWhite">
                      <h2>GSK<br/> Properties</h2>
                      <div className="hdngBrdrs">
                        <span className="hdngBrdr1"></span>
                        <span className="hdngBrdr2"></span>
                        <span className="hdngBrdr3"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="prprtySldrOuter crslCntrls">
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={30} slidesPerView={3.4} centeredSlides={true} loop={true}>
              <SwiperSlide>
                <div className="prprtyItem">
                  <Link to="/property-detail">
                    <div className="prprtyBadge">For Rent</div>
                    <div className="prprtyImg" style={{backgroundImage: `url("images/silverstoneTerrace.jpg")`}}>
                      <div className="prprtyOverlay"></div>
                    </div>
                    <div className="prprtyInfo">
                      <h4>Silverstone Terrace</h4>
                      <p><i><img src="images/locIcon.png" /></i> 2910 141 Street SW, Edmonton, T6W 3M2</p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="prprtyItem">
                  <Link to="/property-detail">
                    <div className="prprtyBadge">For Rent</div>
                    <div className="prprtyImg" style={{backgroundImage: `url("images/chappelleGarden.jpg")`}}>
                      <div className="prprtyOverlay"></div>
                    </div>
                    <div className="prprtyInfo">
                      <h4>Chappelle Garden</h4>
                      <p><i><img src="images/locIcon.png" /></i> 1071 Chappelle Blvd SW, Edmonton, T6W3M1</p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="prprtyItem">
                  <Link to="/property-detail">
                    <div className="prprtyBadge">For Rent</div>
                    <div className="prprtyImg" style={{backgroundImage: `url("images/prescottPlace.jpg")`}}>
                      <div className="prprtyOverlay"></div>
                    </div>
                    <div className="prprtyInfo">
                      <h4>Prescott Place</h4>
                      <p><i><img src="images/locIcon.png" /></i> 320 Pioneer Road, Spruce Grove T7X0Y2</p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="prprtyItem">
                  <Link to="/property-detail">
                    <div className="prprtyBadge">For Rent</div>
                    <div className="prprtyImg" style={{backgroundImage: `url("images/novaVilla.jpg")`}}>
                      <div className="prprtyOverlay"></div>
                    </div>
                    <div className="prprtyInfo">
                      <h4>Nova Villa</h4>
                      <p><i><img src="images/locIcon.png" /></i> 12615 152 Ave NW, Edmonton, T5X6E9</p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="prprtyItem">
                  <Link to="/property-detail">
                    <div className="prprtyBadge">For Rent</div>
                    <div className="prprtyImg" style={{backgroundImage: `url("images/oxfordCampus.jpg")`}}>
                      <div className="prprtyOverlay"></div>
                    </div>
                    <div className="prprtyInfo">
                      <h4>Oxford Campus</h4>
                      <p><i><img src="images/locIcon.png" /></i> 16504 130 Street NW, Edmonton, T6V0E9</p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="prprtyItem">
                  <Link to="/property-detail">
                    <div className="prprtyBadge">For Rent</div>
                    <div className="prprtyImg" style={{backgroundImage: `url("images/spruceHeight.jpg")`}}>
                      <div className="prprtyOverlay"></div>
                    </div>
                    <div className="prprtyInfo">
                      <h4>Spruce Height</h4>
                      <p><i><img src="images/locIcon.png" /></i> 111 Mclaughlin DR, Spruce Grove T7X0T5</p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="prprtyItem">
                  <Link to="/property-detail">
                    <div className="prprtyBadge">For Rent</div>
                    <div className="prprtyImg" style={{backgroundImage: `url("images/chappelleGardenVillas.jpg")`}}>
                      <div className="prprtyOverlay"></div>
                    </div>
                    <div className="prprtyInfo">
                      <h4>Chappelle Garden Villas</h4>
                      <p><i><img src="images/locIcon.png" /></i> 1210 Chappelle BLVD, Edmonton, T6W3L5</p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="prprtyItem">
                  <Link to="/property-detail">
                    <div className="prprtyBadge">For Rent</div>
                    <div className="prprtyImg" style={{backgroundImage: `url("images/oakTower.jpg")`}}>
                      <div className="prprtyOverlay"></div>
                    </div>
                    <div className="prprtyInfo">
                      <h4>Oak Tower</h4>
                      <p><i><img src="images/locIcon.png" /></i> 11635 102 Avenue, Edmonton, Alberta, T5K0R4</p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="prprtyItem">
                  <Link to="/property-detail">
                    <div className="prprtyBadge">For Rent</div>
                    <div className="prprtyImg" style={{backgroundImage: `url("images/riversideVillas.jpg")`}}>
                      <div className="prprtyOverlay"></div>
                    </div>
                    <div className="prprtyInfo">
                      <h4>Riverside Villas</h4>
                      <p><i><img src="images/locIcon.png" /></i>  5 Redspur Drive, St. Albert, Alberta T8N7Y</p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </article>

      <Testimonials />

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
                <div className="col-md-3">
                  <div className="whyChooseInfoCol">
                    <span>
                      <img src="images/chooseIcon1.png" />
                    </span>
                    <h4>Find your future home</h4>
                    <p>We help you find a new home by offering a smart GSK Properties experience.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="whyChooseInfoCol">
                    <span>
                      <img src="images/chooseIcon2.png" />
                    </span>
                    <h4>Experienced agents</h4>
                    <p>Find an agent who knows your market the best.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="whyChooseInfoCol">
                    <span>
                      <img src="images/chooseIcon3.png" />
                    </span>
                    <h4>Rent homes</h4>
                    <p>Millions of houses and apartments in your favourite cities.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="whyChooseInfoCol">
                    <span>
                      <img src="images/chooseIcon4.png" />
                    </span>
                    <h4>Maximum Choices</h4>
                    <p>A plethora of property options to choose from.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="homeCallActBlock wrapper pb-80">
        <div className="container">
          <div className="row align-items-center justify-space-between">
            <div className="col">
              <div className="callActContent">
                <div className="mainHeading m-0">
                  <h2>Provide Us Your Feedback</h2>
                  <div className="hdngBrdrs">
                    <span className="hdngBrdr1"></span>
                    <span className="hdngBrdr2"></span>
                    <span className="hdngBrdr3"></span>
                  </div>
                  <p>Please fill out the form and our Community Leader will get in contact with you.</p>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="callActBtn">
                <Button variant="primary" className="btn btnCommon" onClick={this.handleShow}>Provide feedback</Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Modal show={this.state.show} onHide={this.handleClose} dialogClassName="homeCntctDiv fedBackPopDialog">
        <Modal.Header closeButton>
          <Modal.Title className="mdlHeading">Provide Us Your Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="feedBackPopup">
            <div className="homeCntctForm">
              <div className="mainHeading m-0">
                <p className="m-0">Please fill out the form and our Community Leader will get in contact with you.</p>
              </div>
              <form>
                <div className="cntctBrdrTtl">CONTACT US</div>
                <div className="form-group">
                  <label>Name *</label>
                  <i><img src="images/userIcon.png" /></i>
                  <input className="form-control" type="text" id="" name="" placeholder="Write Name" />
                </div>
                <div className="form-group">
                  <label>Mobile Number *</label>
                  <i><img src="images/callIcon.png" /></i>
                  <input className="form-control" type="text" id="" name="" placeholder="+1 _ _ _   _ _ _   _ _ _" />
                </div>
                <div className="form-group">
                  <label>Email*</label>
                  <i><img src="images/mailIcon.png" /></i>
                  <input className="form-control" type="email" id="" name="" placeholder="feedback@gskproperties.ca" />
                </div>
                <div className="form-group">
                  <label>Subject*</label>
                  <i><img src="images/subjectIcon.png" /></i>
                  <input className="form-control" type="text" id="" name="" placeholder="Perfect Home" />
                </div>
                <div className="form-group formGroupTextarea">
                  <label>Message Me*</label>
                  <textarea className="form-control" type="text" id="" name="" placeholder="Hi, I’m happy with home."></textarea>
                </div>
                <div className="form-btn">
                  <button className="btn btnCommon w-100" type="Submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>

  <Footer />
  </>
  
  ) } }

export default Home;