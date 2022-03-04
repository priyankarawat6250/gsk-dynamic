import React from "react";
import { withRouter } from "react-router-dom";
import config from "../../config.js";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
import Modal from "react-modal"; 
const axios = require("axios");

class City extends React.Component{

  state={
    modalIsOpen:false,
      data:[], 
      id:"",
      city:"",
      slug:"",
      errors: []
  }

  initialState = {
    modalIsOpen:false,
      data:[], 
      id:"",
      city:"",
      slug:"",
      errors: []
            
  };

  
  

openModal = (id='', city='')=>{
  let newString = city.replace(/[^A-Z0-9]/ig, "-");
  this.setState({ id: id, city: city, slug:newString.toLowerCase(), modalIsOpen: true });
}

closeModal=async (e)=> {
  this.setState({modalIsOpen:false})
}

changedata=(e)=>{
  let str = e.target.value;
  let newString = str.replace(/[^A-Z0-9]/ig, "-");

  this.setState({city:e.target.value,slug:newString.toLowerCase()})   
} 


componentDidMount=()=>{
  this.getCities();
   
}

getCities =   () => {
  
  axios.get(`${config.backend_URL}/admin/getCities`)         
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
  
      if(this.state.city === "") {
          toast('City can not be empty');
      }  
  

      let newObj = {
        'city':this.state.city,
        'slug':this.state.slug
      }
      
      if(this.state.id == ''){
        //Insert Data
        axios.post(`${config.backend_URL}/admin/addCity`, newObj)                
          .then(async data=>{   
            console.log(data);

            if(data.data.status === true){
              
              toast(data.data.message)                
              
              await this.setState( this.initialState)
              
              this.getCities();
              // document.getElementById("testi_form").reset();

            }else{
              toast("Something wrong!");
            }
          })
          .catch(err=>{
            console.log("error",err)
          })        
      }else{
      
          newObj['id'] =  this.state.id;
          //Update Data
          axios.post(`${config.backend_URL}/admin/updateCity`, newObj)
              .then(async data => {
    
                if (data.data.status === true) {
    
                    toast(data.data.message)
                    await this.setState(this.initialState)
                    this.getCities();
    
                }else{
                    toast("Something wrong!");
                }
              })
              .catch(err => {
                console.log("error", err)
              })
      }

}
 

delCity = (id) => { 
  if(window.confirm("Are you sure")){
      let options={
            method:"POST",
            headers:{
            Accept:"application/json",
              "Content-Type":"application/json"
            },
            body:JSON.stringify({'id':id})
          }
          fetch(`${config.backend_URL}/admin/delCity`,options)
          .then(res=>{
            return res.json();
          })
          .then(data=>{                
            if(data.status === true){
              this.getCities();
              toast(data.message);                  
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
    width:'30%',
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
             <ToastContainer />
            <div class="content-wrapper">
                    <section class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                <h1> City </h1>
                                </div>
                                <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right"> 
                                    <button onClick={this.openModal} class="pull-right btn btn-success">Add City</button>
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
                                        <h3 class="card-title">City List</h3>
                                    </div>
                                    <div class="card-body">
                                        <table id="exampl e1" class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th width="16%">Sr No.</th>
                                                <th>City</th>
                                                 
                                                <th width="20%">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            {this.state.data.length > 0  ? this.state.data.map((x,key) => {
                                                return(
                                                  <tr key={key}>
                                                      <td>{++key}</td>
                                                      <td>{x.city}</td>
                                                       
                                                      <td>
                                                      <a href="javascript:void(0)" onClick={() => { this.openModal( x._id, x.city ) }} class="btn btn-success btn-sm"><i class="fa fa-edit"></i></a> &nbsp;&nbsp;
                                                          <a class="btn btn-danger btn-sm" href="javascript:void(0)" onClick={() => { this.delCity(x._id) }}><i class="fas fa-trash"></i></a>
                                                      </td>
                                                  </tr>
                                              )
                                            } ):
                                                 
                                                  <tr>
                                                    
                                                      <td colSpan={3} style={{color:'red'}}><center> Result Not Found </center></td> 
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
                        contentLabel="Add City  "
                        ariaHideApp={false}
                    >
                        {/* modal */}
                        <div class="modal-header">
                            <h2>City</h2>
                            <button type="button" class="btn-close" onClick={this.closeModal}>x</button> 
                        </div>
                        <div class="modal-body">

                        <p id="error"></p>
                          <form onSubmit={this.mySubmit} encType="multipart/form-data" id="testi_form">
                              <div class="row">
                                
                                  <div class="col-md-12">
                                  <input class="form-control" placeholder="City" onChange={this.changedata} value={this.state.city} name="city" type="text" required/>
                                  <br/>
                                  </div>
                              </div>

                              <button type="submit" class="btn btn-success">Submit</button>
                          </form>
                        </div>
                         

                    </Modal>
            </>
        );
    }
}
export default withRouter(City);