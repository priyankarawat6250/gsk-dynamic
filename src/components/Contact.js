import React from "react";
import { Link } from "react-router-dom";
import config from "../config.js";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Feedback_Form from "./Feedback_Form.js"; 
 
const axios = require("axios");

class Contact extends React.Component{

  state={
      name:"",
      number:"",
      email:"",
      subject:"",
      message:"",
      errors: []
  }

  initialState = {
    name:"",
    number:"",
    email:"",
    subject:"",
    message:"",
    errors: []
            
  };
  
  componentDidMount(){
      this.getSettings();  
  }

  getSettings = () => {

    axios.get(`${config.backend_URL}/admin/getSettings`) 
      .then((responseJson) => {
          
          this.setState(responseJson.data.data);
        
      })
      .catch((error) => {
          console.error(error);
      });        
  }
 
   
  
  render(){
    return (
    <>
     
    <ToastContainer />

    <section>
      <article className="pageHdrBlock wrapper py-80" style={{backgroundImage: `url("images/subpageBg.jpg")`}}>
        <div className="pageHdrOverlay"></div>
        <div className="container">
          <div className="row align-items-center justify-space-beetween">
            <div className="col-sm">
              <h3>Get In Touch</h3>
            </div>
            <div className="col-sm-auto">
              <div className="pagebrdcrmbs">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="homeCntctBlock wrapper pt-80">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="homeCntctDiv">
                <div className="homeCntctForm">
                  <div className="mainHeading headingCenter">
                    <h2>Provide Us Your Feedback</h2>
                    <div className="hdngBrdrs">
                      <span className="hdngBrdr1"></span>
                      <span className="hdngBrdr2"></span>
                      <span className="hdngBrdr3"></span>
                    </div>
                    <p>Please fill out the form and our Community Leader will get in contact with you.</p>
                  </div>

                  <Feedback_Form />

                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="homeCntctMainDiv">
                <div className="homeCntctInfoRow">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="homeCntctInfoCol">
                        <span>
                          <img src="images/conttLocIcon.png" />
                        </span>
                        <h4>GSK Properties Ltd</h4>
                        <p>{this.state.address}</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="homeCntctInfoCol homeCntctCall">
                        <span>
                          <img src="images/conttCallIcon.png" />
                        </span>
                        <h4>Talk to us</h4>
                        <p><Link to={`tel:${this.state.phone}`}>{this.state.phone}</Link></p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="homeCntctInfoCol">
                        <span>
                          <img src="images/conttMailIcon.png" />
                        </span>
                        <h4>Mail us @</h4>
                        <p><Link to={`mailto:${this.state.email}`}>{this.state.email}</Link></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="homeCntctMap">
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.046274393938!2d-114.08836808404027!3d51.05223335170088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716feed4244bb7%3A0xcf0a9deaba549030!2sGSK%20Properties%20Ltd!5e0!3m2!1sen!2sin!4v1641631682470!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe> */}

                <iframe src={`https://maps.google.com/maps?q=${this.state.lat},${this.state.long}&z=15&output=embed`} allowfullscreen="" loading="lazy"></iframe>

                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
     
    </>
  )
} };

export default Contact;