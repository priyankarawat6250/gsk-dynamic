import React from "react";
import { Link, withRouter } from "react-router-dom";
import config from "../../config.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
 
const axios = require("axios");
class ChangePassword extends React.Component {

    state = {
        password: "",
        old_password:"",
        new_password:"",
        confirm_password:""
    }   
    
    changedata = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }
  
    componentDidMount = () => {
      this.getAdminData();  
    }
  
    getAdminData = () => {
      axios.post(`${config.backend_URL}/admin/getAdminData`)
        .then((responseJson) => {

          this.setState({ password: responseJson.data.data.password});
        })
        .catch((error) => {
          console.error(error);
        });
    }
  
    mySubmit = e => {
      e.preventDefault();

      console.log(this.state);

        if (this.state.password === this.state.old_password){
            if (this.state.new_password == this.state.confirm_password) {
        
                axios.post(`${config.backend_URL}/admin/updateAdminData`, { password:this.state.new_password})
                .then(async data => { 

                    if (data.data.status === true) {
                        toast("Password Updated Successfully");
                    
                    } else {
                        toast("Something wrong!");
                    }
                })
          .catch(err => {
            console.log("error", err)
          }) 
        }else{
            toast('New password or confirm password not matched!');
            }
        }else{
          toast('Old password not matched!');
        }     
  
    }
 

  render() {
    const fallbackSrc = `${config.backend_URL}/user1.png`;
    const imageSrc = `${config.backend_URL}/`+this.state.logo;

    return (
      <>
          <ToastContainer />

          <div class="content-wrapper">
            <section class="content-header">
              <div class="container-fluid">
                <div class="row mb-2">
                  <div class="col-sm-6">
                    <h1> Change Password </h1>
                  </div>
                  <div class="col-sm-6">

                  </div>
                </div>
              </div>
            </section>

            <section class="content">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-6">
                    <div class="card card-primary">
                      <div class="card-header">
                        <h3 class="card-title"> Change Password </h3>
                      </div>

                      <form onSubmit={this.mySubmit} encType="multipart/form-data" id="testi_form">
                        <div class="card-body">


                          <div class="row">

                            <div class="form-group col-md-12">
                              <label>Old Password</label>
                              <input type="password" class="form-control" name="old_password" placeholder="" required value={this.state.old_password} onChange={this.changedata} />
                            </div>

                            <div class="form-group col-md-12">
                              <label>New Password</label>
                              <input type="password" class="form-control" name="new_password" placeholder="" required value={this.state.new_password}  onChange={this.changedata} />
                            </div>

                            <div class="form-group col-md-12">
                              <label>Confirm Password</label>
                              <input type="password" class="form-control" name="confirm_password" placeholder="" required value={this.state.confirm_password} onChange={this.changedata} />
                            </div>

                            <div class="form-group col-md-2">
                              <label>&nbsp;&nbsp;&nbsp;</label>
                              <button type="submit" class="btn btn-primary"> Update</button>
                            </div>

                          </div>

                          </div>
                      </form>

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

export default withRouter(ChangePassword);