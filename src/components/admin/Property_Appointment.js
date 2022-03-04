import React from "react";
import { Link, withRouter } from "react-router-dom";
import config from "../../config.js";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
  
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

 
const axios = require("axios");

class Property_Appointment extends React.Component{

    state={   
        status:'', 
        data:[],
        errors: []
    }

    initialState = {
        status:'',
      data:[],
      errors: []
        
    }

    componentDidMount(){
        this.getFeedbacks();  
    }

getFeedbacks = async () => {
      
    await axios.get(`${config.backend_URL}/admin/getPropertyFeedbacks`)         
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
    
    changedata = (e) => {

    const id = e.target.getAttribute('data-id')  
        axios.post(`${config.backend_URL}/admin/updateFeedbacks`,{id:id, status:e.target.value})         
        .then((responseJson) => {
                console.log('iiiiiiiiiiii',responseJson);
            
        })
        .catch((error) => {
            console.error(error);
        });     
    }
  

    render(){
        return (
            <>
            <div class="content-wrapper">
                    <section class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                <h1>Property Feedback </h1>
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
                                        <h3 class="card-title">Property Feedback List</h3>
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
                                                <th>Property</th>
                                                <th>Bedroom</th>
                                                <th>Message</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                 
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
                                                        <td>{x.property_name}</td>
                                                        <td>{x.bedroom}</td>
                                                        <td>{x.message}</td>
                                                        <td>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(x.timestamp)}</td>
                                                        <td>

                                                            <select class="form-control" value={x.status} name="status" onChange={this.changedata}  data-id={x._id}>

                                                                <option value="">Choose Priority</option>
                                                                <option value="pending">Pending</option>
                                                                <option value="on_hold">On Hold</option>
                                                                <option value="process"> Process</option>
                                                                <option value="success"> Success</option>
                                                                
                                                            </select>

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
export default withRouter(Property_Appointment);