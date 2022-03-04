import React, { useEffect, useState } from "react";
 
import { Button, Modal } from "react-bootstrap"; 
 
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
 
import Banner from "./Banner.js";
import Amenities from "./Amenities.js";
import Testimonials from "./Testimonials_home.js";
import WhyChooseUs from "./WhyChooseUs_home.js";
import Properties_Img from "./Properties_img.js";
import Search_Fields from "./Search_Fields.js";
import Feedback_Form from "./Feedback_Form.js";
 
class Home extends React.Component{

  state={
    show:false
  }
 
  handleClose = () => this.setState({show:false})
  handleShow = () => this.setState({show:true}) 

  render(){
    return (
      <>
     

    <section>

        {/* Banner Section Component*/}
        < Banner/>


        {/* Search Form Component*/}
        <Search_Fields />
      

        {/* Amenities Section Component*/}
        <Amenities />     
 
        {/* Property Images Swiper Component*/}
        <Properties_Img />   

        {/* Testimonials Section Component*/}
        <Testimonials /> 

        {/* WhyChooseUs Section Component*/}
        <WhyChooseUs />     

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


              <Feedback_Form />


            </div>
          </div>
        </Modal.Body>
      </Modal>

    </section>

   
  </>
  
  ) } }

export default Home;