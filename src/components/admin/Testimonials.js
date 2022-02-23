import React from "react";
import { Link, withRouter } from "react-router-dom";
import config from "../../config.js";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';

import Header from "./includes/Header.js";
import Sidebar from "./includes/Sidebar.js";
import Footer from "./includes/Footer.js";
import Modal from "react-modal"; 
const axios = require("axios");

class Testimonials extends React.Component{

  state={
    modalIsOpen:false,
      data:[], 
      id:"",
      name:"",
      desc:"",
      errors: []
  }

  initialState = {
    modalIsOpen:false,
      data:[], 
      id:"",
      name:"",
      desc:"",
      errors: []
            
  };

  
  

openModal = (e)=>{
e.preventDefault()
this.setState({modalIsOpen:true})
}

closeModal=async (e)=> {
this.setState({modalIsOpen:false})
}

changedata=(e)=>{
  this.setState({[e.target.name]:e.target.value}) 
  //this.setState({ formdata: { ...this.state.formdata, [e.target.name]:e.target.value} });        
} 


componentDidMount=()=>{
  this.getTestimonials();
   
}

getTestimonials =   () => {
  
axios.get(`${config.backend_URL}/admin/getTestimonials`)         
  .then((responseJson) => {
      
      console.log(responseJson.data.data);
      // return
      this.setState({data: responseJson.data.data})
      console.log(this.state.data);
       
  })
  .catch((error) => {
      console.error(error);
  });        
}

mySubmit = e => {
  e.preventDefault();
  let error = 0;
  let arry = "";
  if (this.state.name === "") {
    
    arry += 'Name can not be empty* <br/>';
    error++;
  }  

  if (this.state.desc === "") {
    
    arry += 'Description can not be empty* <br/>';
    error++;
  }  
  console.log(error)

  //this.setState({ errors: arry }) 
  if (error > 0) {
      $('#error').html(arry)
    } else {
      $('#error').html('')
        
        let newObj = {
          'image':this.state.imageName,
          'name':this.state.name,
          'desc':this.state.desc,
        }
       
        axios.post(`${config.backend_URL}/admin/addTestimonials`, newObj)                
          .then(async data=>{   
            console.log(data);

            if(data.data.status === true){
              
              toast(data.data.message)                
              
              await this.setState( this.initialState)
              
              this.getTestimonials();
              document.getElementById("testi_form").reset();

            }else{
              toast("Something wrong!");
            }
          })
          .catch(err=>{
            console.log("error",err)
          })        
   }      

}

onFileChange = (e) => {
this.setState({ selectedFile: e.target.files[0] });


        let newObj = new FormData()
        newObj.append('file', e.target.files[0])

        axios.post(`${config.backend_URL}/admin/upload_single_image`,newObj)                
        .then(data=>{                
            console.log(data.data);
            this.setState({ imageName:data.data.data });    
        })
        .catch(err=>{
          console.log("error",err)
        }) 

};

delTestimonials = (id) => { 
  
  if(window.confirm("Are you sure")){
      let options={
            method:"POST",
            headers:{
            Accept:"application/json",
              "Content-Type":"application/json"
            },
            body:JSON.stringify({'id':id})
          }
          fetch(`${config.backend_URL}/admin/delTestimonials`,options)
          .then(res=>{
            //console.log("response",res)
            return res.json();
          })
          .then(data=>{                
            if(data.status === true){
              this.getTestimonials();

              toast("Testimonial deleted successfully!!");                  
              //this.setState(this)
            }
            else{
              toast("Something wrong!");
            }
          })
          .catch(err=>{
            console.log("error",err)
          }) 
    }  
}



render(){


const customStyles = {
  content: {
    width:'50%',
    top: '50%',
    left: '55%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
        return (
            <>
            <div class="wrapper">

            <Header />            
            <Sidebar />             
             
             <ToastContainer />
            <div class="content-wrapper">
                    <section class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                <h1> Testimonials </h1>
                                </div>
                                <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right"> 
                                    <button onClick={this.openModal} class="pull-right btn btn-success">Add Testimonial</button>
                                </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">Testimonials List</h3>
                                    </div>
                                    <div class="card-body">
                                        <table id="exampl e1" class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th width="8%">Sr No.</th>
                                                <th>Image</th>
                                                <th width="16%">Name</th>
                                                <th>Message</th>
                                                <th width="5%">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            {this.state.data.length > 0  ? this.state.data.map((x,key) => {
                                                return(
                                                    <tr key={key}>
                                                        <td>{++key}</td>
                                                        <td><img src={`${config.backend_URL}/${x.image}`} height={100} /></td>
                                                        <td>{x.name}</td>
                                                        <td>{x.desc}</td>
                                                        <td>
                                                            <a class="btn btn-danger btn-sm" href="javascript:void(0)" onClick={() => { this.delTestimonials(x._id) }}><i class="fas fa-trash"></i></a>
                                                        </td>
                                                    </tr>
                                                )
                                              }):
                                                   
                                                  <tr>
                                                      <td colSpan={5} style={{color:'red'}}><center> Result Not Found </center></td> 
                                                  </tr>
                                                                                           
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </div>
  
                       
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        // onAfterOpen={afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Add Amenities"
                        ariaHideApp={false}
                    >
                        {/* modal */}
                        <div class="modal-header">
                            <h2>Add Testimonial</h2>
                            <button type="button" class="btn-close" onClick={this.closeModal}>x</button> 
                        </div>
                        <div class="modal-body">

                        <p id="error"></p>
                          <form onSubmit={this.mySubmit} encType="multipart/form-data" id="testi_form">
                          <div class="row">
                            <div class="col-md-6">
                              <input type="file" name='image' id='image' defaultValue={this.state.image} class="form-control" accept="image/*" onChange={this.onFileChange} required/>
                              <br/>
                              </div>
                              <div class="col-md-6">
                              <input class="form-control" placeholder="Name" onChange={this.changedata} value={this.state.name} name="name" type="text" required/>
                              <br/>
                              </div>
                          </div>
                          <div class="row">
                          <div class="col-md-12">
                          <textarea class="form-control" placeholder="Description" onChange={this.changedata} name="desc" type="text" required>{this.state.desc}</textarea>
                          <br/>
                          </div>
                          </div>
 

                          <button type="submit" class="btn btn-success">Submit</button>
                          </form>
                        </div>
                         

                    </Modal>

            <Footer />
            </div> 
            </>
        );
    }
}
export default withRouter(Testimonials);