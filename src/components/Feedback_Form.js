import React from "react"; 
import config from "../config.js";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
import $ from 'jquery';
 
const axios = require("axios");

class Feedback_Form extends React.Component{

  state={
    flag:"contact",
      name:"",
      number:"",
      email:"",
      subject:"",
      message:"",
      errors: []
  }

  initialState = {
    flag:"contact",
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
          'flag':this.state.flag,
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
     
    <ToastContainer />
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
     
    </>
  )
} };

export default Feedback_Form;