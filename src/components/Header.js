import React from "react";
import { NavLink,withRouter,Link } from "react-router-dom";
import { Modal } from "react-bootstrap"; 
import config from "../config.js";
import { ToastContainer, toast} from 'react-toastify';
 
import $ from 'jquery';
const axios = require("axios");
class Header extends React.Component{
 
  state={
      flag:"property",
      name:"",
      number:"",
      email:"",
      property:"",
      bedroom:"",
      message:"",
      errors: [],
      data:[], 
      properties:[],
      allProperties:[],
  }

  initialState = {
    flag:"property",
    name:"",
    number:"",
    email:"",
    property:"",
    bedroom:"",
    message:"",
    errors: []
            
  };
   

  componentDidMount=()=>{
      this.getCities();   
      this.getProperties1();  
  }

  getCities = () => {  
    axios.get(`${config.backend_URL}/admin/getCities`)         
      .then((responseJson) => {
        
          this.setState({data: responseJson.data.data})
          
      })
      .catch((error) => {
          console.error(error);
      });        
  }

  getProperties =   (key) => {
       
      let newObj = {};
       
      newObj = { cityId: key} 
      this.setState({properties:[]})

      axios.post(`${config.backend_URL}/admin/getProperties`,newObj)         
      .then((responseJson) => {
      
        
        this.setState({properties: responseJson.data.data})
         
        
      })
      .catch((error) => {
        console.error(error);
      });        
  }

  getProperties1 =   () => {
   
    axios.post(`${config.backend_URL}/admin/getProperties`)         
    .then((responseJson) => {
    
      
      this.setState({allProperties: responseJson.data.data})
       
      
    })
    .catch((error) => {
      console.error(error);
    });        
}
  changedata=(e)=>{

    if(e.target.name == 'property'){      

      let key = e.target[e.target.selectedIndex].getAttribute("data-key");
      let propertyId = e.target[e.target.selectedIndex].getAttribute("data-id");
       

      let managerEmails = this.state.allProperties[key].manager_emails
       
      let manager_email = managerEmails.map(function(elem){
          return elem.manager_email;
      }).join(",");


        this.setState({manager_email:manager_email, propertyId: propertyId})   
    }

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

    if (this.state.property === "") {
       
      toast('Property can not be empty* ') 
      error++;
    }
    if (this.state.bedroom === "") {
       
      toast('Bedroom can not be empty* ') 
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
            
            'propertyId':this.state.propertyId,
            'property_name':this.state.property,
            'manager_email':this.state.manager_email,
            'flag':this.state.flag, 
            'name':this.state.name,
            'number':this.state.number,
            'email':this.state.email,
            'bedroom': Number(this.state.bedroom),
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

  handleClose = () => this.setState({show:false})
  handleShow = () => this.setState({show:true}) 

  render(){

        return (  
    <>
    <link href="css/font-awesome.css" rel="stylesheet" />
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    
    <link rel="stylesheet" href="css/swiper-bundle.min.css" />
    
    <link href="css/style.css" rel="stylesheet" crossorigin="anonymous" />
    
    <link href="css/responsive.css" rel="stylesheet" crossorigin="anonymous" />

    <header className="mainHeader wrapper">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-auto">
          <div className="hdrLogo">
            <NavLink to="/">
              <img src={config.backend_URL+'/'+this.props.logo} />
            </NavLink>
          </div>
        </div>
        <div className="col">
          <div className="hdrMenu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/why-choose-us">Why Choose Us</NavLink>
              </li>
              <li>
                <NavLink to="/properties">Properties</NavLink>
                <ul>

                {this.state.data.length > 0  ? this.state.data.map((x,key) => {
                    return(

                      x.propertyCount > 0 ?
                      <li onMouseEnter={() => this.getProperties(x._id)} key={x.slug}>
                          <Link to={`properties?slug=${x.slug}`}>{x.city}</Link>
                          <ul>
                            
                             {this.state.properties.length > 0  ? this.state.properties.map((y,key1) => {
                                return(

                                  <li key={y.slug}>
                                    <NavLink to={`${y.slug}`}>{y.property_name}</NavLink>
                                  </li>

                                )
                              } ): <></>
                                                                          
                              }  
                          
                          </ul>
                      </li> :''
                    )
                  }): <>''</>
                                                               
                }

                   
                </ul>
              </li>

              <li>
                <NavLink to="/testimonials">Testimonials</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us">Contact Us</NavLink>
              </li>

              <li className="menuBtn">
               
                  <a href="#!" className="btnCommon" onClick={this.handleShow}>Book An Appointment</a>
              </li>

            </ul>
          </div>
        </div>
        <div className="col-auto">
          <div className="hdrScl">
          <a href={`https://${this.props.fblink}`}  target="_blank">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>



  <Modal show={this.state.show} onHide={this.handleClose} dialogClassName="homeCntctDiv fedBackPopDialog">
        <Modal.Header closeButton>
          <Modal.Title className="mdlHeading">Book an Appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="feedBackPopup">
            <div className="homeCntctForm">
              <div className="mainHeading m-0">
                <p className="m-0">Select the property you are inquiring about.</p>
              </div>

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
                    <label>Property*</label>
                    
                    <select className="form-control" name="property" onChange={this.changedata} value={this.state.property} required>
                    <option value=''>Select</option>
                        {this.state.allProperties.map((y,key1) => {
                                return(
                                  <option value={y.property_name} data-key={key1}  data-id={y._id}>{y.property_name}</option>
                                )
                            }) 
                          }
                    </select>
                  </div>


                  <div className="form-group">
                    <label>Bedroom*</label>
                    <i><img src="images/subjectIcon.png" /></i>
                    <select className="form-control" name="bedroom" onChange={this.changedata} value={this.state.bedroom} required>
                    <option value=''>Select</option>
                        <option value={1}>1 Bedroom</option>
                        <option value={2}>2 Bedroom</option>
                    </select>
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
        </Modal.Body>
      </Modal>


  </>
        );
    }
}
export default withRouter(Header);