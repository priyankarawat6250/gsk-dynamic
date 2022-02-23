import React from "react";
import { Link, withRouter } from "react-router-dom";
import config from "../../config.js";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
 
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css


import Header from "./includes/Header.js";
import Sidebar from "./includes/Sidebar.js";
import Footer from "./includes/Footer.js";
const axios = require("axios");

class Feedback extends React.Component{

    state={    
        data:[],
        errors: []
    }

    initialState = {
      data:[],
      errors: []
        
    }

    componentDidMount(){
        this.getFeedbacks();  
    }

    getFeedbacks = async () => {
      
    await axios.get(`${config.backend_URL}/admin/getFeedbacks`)         
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
    
  

    render(){
        return (
            <>
            <div class="wrapper">
            <Header />            
            <Sidebar />             
             
             
            <div class="content-wrapper">
                    <section class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                <h1> Feedback </h1>
                                </div>
                                <div class="col-sm-6">
                                
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
                                        <h3 class="card-title">Feedback List</h3>
                                    </div>
                                    <div class="card-body">
                                        <table id="exampl e1" class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th width="8%">Sr No.</th>
                                                <th>Name</th>
                                                <th>Mobile</th>
                                                <th>Email</th>
                                                <th>Subject</th>
                                                <th>Message</th>
                                                 
                                            </tr>
                                            </thead>
                                            <tbody>
                                             

                                            {this.state.data.length > 0  ? this.state.data.map((x,key) => {
                                                return(
                                                    <tr key={key}>
                                                        <td>{++key}</td>
                                                        <td>{x.name}</td>
                                                        <td>{x.number}</td>
                                                        <td>{x.email}</td>
                                                        <td>{x.subject}</td>
                                                        <td>{x.message}</td>
                                                         
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
  

            <Footer />
            </div> 
            </>
        );
    }
}
export default withRouter(Feedback);