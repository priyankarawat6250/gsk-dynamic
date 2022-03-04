import React from "react";
import { Link, withRouter } from "react-router-dom";
import config from "../../config.js";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
 
const axios = require("axios");

class Properties_list extends React.Component{

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

   
changedata=(e)=>{
  this.setState({[e.target.name]:e.target.value})         
} 


componentDidMount=()=>{
  this.getProperties();
   
}

getProperties =   () => {
  
axios.post(`${config.backend_URL}/admin/getProperties`)         
  .then((responseJson) => {       
      this.setState({data: responseJson.data.data})     
       
  })
  .catch((error) => {
      console.error(error);
  });        
}



delProperty = (id) => { 
  
  if(window.confirm("Are you sure")){
      let options={
            method:"POST",
            headers:{
            Accept:"application/json",
              "Content-Type":"application/json"
            },
            body:JSON.stringify({'id':id})
          }
          fetch(`${config.backend_URL}/admin/delProperty`,options)
          .then(res=>{
            //console.log("response",res)
            return res.json();
          })
          .then(data=>{                
            if(data.status === true){
              this.getProperties();

              toast("Property deleted successfully!!");                  
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

  getManagrEmail = (manager_emails) => { 
    let manager_email =  manager_emails.map((elem) =>{
          return elem.manager_email;
        }).join("\n")

       

    return manager_email;
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
             <ToastContainer />
            <div class="content-wrapper">
                    <section class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                <h1> Properties </h1>
                                </div>
                                <div class="col-sm-6">

                                <ol class="breadcrumb float-sm-right"> 
                                    <Link to="/admin/properties"><button class="pull-right btn btn-success">Add Property</button></Link>
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
                                        <h3 class="card-title">Properties List</h3>
                                    </div>
                                    <div class="card-body">
                                        <table id="exampl e1" class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th width="8%">Sr No.</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Address</th>
                                                <th>Manager Number</th>
                                                <th>Manager email</th>
                                                <th width="10%">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            {this.state.data.length > 0  ? this.state.data.map((x,key) => {
                                                return(
                                                    <tr key={key}>
                                                        <td>{++key}</td>
                                                        <td><img src={`${config.backend_URL}/${x.property_image}`} height={100} /></td>
                                                        <td>{x.property_name}</td>
                                                        <td>{x.address}</td>
                                                        <td>{x.manager_number}</td>
                                                        <td>{'manager_emails' in x ? this.getManagrEmail(x.manager_emails) :''}</td>
                                                        <td>
                                                            <a class="btn btn-danger btn-sm" href="javascript:void(0)" onClick={() => { this.delProperty(x._id) }}><i class="fas fa-trash"></i></a>
                                                        </td>
                                                    </tr>
                                                )
                                              }):
                                                   
                                                  <tr>
                                                      <td colSpan={7} style={{color:'red'}}><center> Result Not Found </center></td> 
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
  
                       
                    
            </>
        );
    }
}
export default withRouter(Properties_list);