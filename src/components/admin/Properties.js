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

class Properties extends React.Component{

    constructor(props){
        super(props);
        this.state={    
            data:[],        
            loginflag:false,
            hostel:[],
            formdata: {
            id:"",
            name:"",
            hostel_id: this.props.match.params.id,
            block_id: 0          
            },
            errors: []
        }

        this.initialState = {
            id:"",
            name:"",
            hostel_id: this.props.match.params.id,
            block_id: 0
        };
    }
    
    openModal = async (id = 0,f = 0) => { 
        this.setState({ open: true })
        this.setState({formdata: this.initialState});
        console.log(id)
        if(id>0){
          await this.getBlock(id)
        }else {
          this.setState({formdata: this.initialState});
        }
  
        if(f>0){
          this.setState({ formdata: { ...this.state.formdata, name:"" } }); 
          this.setState({ formdata: { ...this.state.formdata, id:"" } }); 
          this.setState({ formdata: { ...this.state.formdata, block_id:id } }); 
        }
        
        console.log(this.state.formdata)       
  
        setTimeout(() => { $('.modal').css({'display':'block'}); }, 500)
    }
    
    closeModal = () => {
        this.setState({ open: false })
        this.setState({ formdata: this.initialState });        
    }

    changedata=(e)=>{
        //this.setState({[e.target.name]:e.target.value.toLowerCase()}) 
        this.setState({ formdata: { ...this.state.formdata, [e.target.name]:e.target.value} });        
    } 


    componentDidMount(){
        this.getCities();
         
    }

    getCities = async () => {
        
      await fetch(`${config.backend_URL}/admin/getCities`)
          .then((response) => response.json())
          .then((responseJson) => {
              alert('fsdf');
              console.log(responseJson.data);
              this.setState({ data : responseJson.data })
          
          })
          .catch((error) => {
            console.error(error);
          });        
  }

    mySubmit = e => {
        e.preventDefault();
        let error = 0;
        let arry = "";
        if (this.state.formdata.name === "") {
          //this.setState({ loginpassValid: 'Password is required*' })
          arry += 'Title can not be empty* <br/>';
          error++;
        }         
        console.log(error)

        //this.setState({ errors: arry }) 
        if (error > 0) {
            $('#error').html(arry)
          } else {
            $('#error').html('')
              let options={
                  method:"POST",
                  headers:{
                  Accept:"application/json",
                    "Content-Type":"application/json"
                  },
                  body:JSON.stringify(this.state.formdata)
                }
                fetch(`${config.googleAuth.backURL}admin/addblock`,options)
                .then(res=>{
                  //console.log("response",res)
                  return res.json();
                })
                .then(data=>{                
                  if(data.status === true){
                    this.getBlocks();
                    (data.code === 500)?toast("Block updated successfully!!"):toast("Block added successfully!!");                  
                    this.setState({formdata: this.initialState})
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

    delhost = (id) => {    
        let options={
              method:"POST",
              headers:{
              Accept:"application/json",
                "Content-Type":"application/json"
              },
              body:JSON.stringify({'id':id})
            }
            fetch(`${config.googleAuth.backURL}admin/delblock`,options)
            .then(res=>{
              //console.log("response",res)
              return res.json();
            })
            .then(data=>{                
              if(data.status === true){
                this.getBlocks();
                toast("Block deleted successfully!!");                  
                this.setState(this)
              }
              else{
                toast("Something wrong!");
              }
            })
            .catch(err=>{
              console.log("error",err)
            })   
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
                                <h1> Properties </h1>
                                </div>
                                <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right"> 
                                    <button onClick={this.openModal} class="pull-right btn btn-success">Add Properties</button>
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
                                                <th width="16%">Sr No.</th>
                                                <th>City</th>
                                                <th width="20%">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>gfdgfdg</td>
                                                <td>ffsdfsdfs</td>
                                                <td>
                                                    <a class="btn btn-danger btn-sm" href="welcome/deleteSettingModule/unit/" ><i class="fas fa-trash"></i></a>
                                                </td>
                                            </tr>
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
export default withRouter(Properties);