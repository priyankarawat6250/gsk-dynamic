import React from "react";
import { Link } from "react-router-dom";
import config from "../config.js";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header.js";
import Footer from "./Footer.js";
import $ from 'jquery';
 
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

  changedata=(e)=>{
    this.setState({[e.target.name]:e.target.value})   
  } 
  
mySubmit = e => {
  e.preventDefault();
  let error = 0;
  let arry = "";
  if (this.state.name === "") {
    
    arry += 'Name can not be empty* ';
    toast('Name can not be empty* ') 
    error++;
  }  

  if (this.state.number === "") {
    
    arry += 'Number can not be empty* ';
    toast('Number can not be empty* ') 
    error++;
  }  
  if (this.state.email === "") {
    
    arry += 'Email can not be empty* ';
    toast('Email can not be empty* ') 
    error++;
  }  
  if (this.state.subject === "") {
    
    arry += 'Subject can not be empty* ';
    toast('Subject can not be empty* ') 
    error++;
  }  
  
  if (this.state.message === "") {
    
    arry += 'Message can not be empty* ';
    toast('Message can not be empty* ') 
    error++;
  } 
  console.log(error)

  //this.setState({ errors: arry }) 
  if (error > 0) {
      $('#error').html(arry)
      //toast(arry)          
    } else {
      $('#error').html('')
        
        let newObj = {
          'name':this.state.name,
          'number':this.state.number,
          'email':this.state.email,
          'subject':this.state.subject,
          'message':this.state.message
        }
       
        axios.post(`${config.backend_URL}/admin/addFeedbacks`, newObj)                
          .then(async data=>{   
            console.log(data);

            if(data.data.status === true){
              
              toast("Thank you for your feedback.")                
              
              await this.setState( this.initialState)
               

            }else{
              toast("Something wrong!");
            }
          })
          .catch(err=>{
            console.log("error",err)
          })        
   }      

}
  
  render(){
    return (
    <>
    <Header />
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

                  <form onSubmit={this.mySubmit} >
                    <div className="cntctBrdrTtl">CONTACT US</div>
                    <div className="form-group">
                      <label>Name *</label>
                      <i><img src="images/userIcon.png" /></i>
                      <input className="form-control" type="text" name="name" placeholder="Write Name" onChange={this.changedata} value={this.state.name}/>
                    </div>
                    <div className="form-group">
                      <label>Mobile Number *</label>
                      <i><img src="images/callIcon.png" /></i>
                      <input className="form-control number" type="text" name="number" placeholder="+1 _ _ _   _ _ _   _ _ _" onChange={this.changedata} value={this.state.number}/>
                    </div>
                    <div className="form-group">
                      <label>Email*</label>
                      <i><img src="images/mailIcon.png" /></i>
                      <input className="form-control" type="email" name="email" placeholder="feedback@gskproperties.ca" onChange={this.changedata} value={this.state.email}/>
                    </div>
                    <div className="form-group">
                      <label>Subject*</label>
                      <i><img src="images/subjectIcon.png" /></i>
                      <input className="form-control" type="text" name="subject" placeholder="Perfect Home" onChange={this.changedata} value={this.state.subject}/>
                    </div>
                    <div className="form-group formGroupTextarea">
                      <label>Message Me*</label>
                      <textarea className="form-control" type="text" name="message" placeholder="Hi, I’m happy with home." onChange={this.changedata} value={this.state.message}></textarea>
                    </div>
                    <div className="form-btn">
                      <button className="btn btnCommon w-100" type="Submit">Submit</button>
                    </div>
                  </form>

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
                        <p>101 10 St NW, Calgary, AB T2N 1V4, Canada</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="homeCntctInfoCol homeCntctCall">
                        <span>
                          <img src="images/conttCallIcon.png" />
                        </span>
                        <h4>Talk to us</h4>
                        <p><Link to="tel:+14034575502">+14034575502</Link></p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="homeCntctInfoCol">
                        <span>
                          <img src="images/conttMailIcon.png" />
                        </span>
                        <h4>Mail us @</h4>
                        <p><Link to="mailto:+14034575502">feedback@gskproperties.ca</Link></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="homeCntctMap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.046274393938!2d-114.08836808404027!3d51.05223335170088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716feed4244bb7%3A0xcf0a9deaba549030!2sGSK%20Properties%20Ltd!5e0!3m2!1sen!2sin!4v1641631682470!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
    
    <Footer />
    </>
  )
} };

export default Contact;