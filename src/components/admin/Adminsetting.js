import React from "react";
import { withRouter } from "react-router-dom";
import config from "../../config.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
 
const axios = require("axios");
class Adminsetting extends React.Component {

    state = {
      profile_image: "",
        name: "",
        username: "",
        email: ""
    }

    initialState = {
      profile_image: "",
        name: "",
        username: "",
        email: ""
    };
    
    changedata = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount = () => {
      this.getAdminData();
    }
  
    getAdminData = () => {
        axios.post(`${config.backend_URL}/admin/getAdminData`)
        .then((responseJson) => {
              this.setState(responseJson.data.data)
              console.log(responseJson.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  
    mySubmit = e => {

        e.preventDefault();
        
        let newObj = {
            'profile_image': this.state.profile_image,
            'name': this.state.name,
            'username': this.state.username,
            'email': this.state.email
        }

        axios.post(`${config.backend_URL}/admin/updateAdminData`, newObj)
          .then(async data => { 

            if(data.data.status === true) {
                toast(data.data.message)  
            }else{
                toast("Something wrong!");
            }

          })
          .catch(err => {
            console.log("error", err)
          })      
  
    }

  onFileChange = (e) => {

    this.setState({ selectedFile: e.target.files[0] });
    let newObj = new FormData()
    newObj.append('file', e.target.files[0])

    axios.post(`${config.backend_URL}/admin/upload_single_image`, newObj)
      .then(data => {
        
        this.setState({ profile_image: data.data.data });
      })
      .catch(err => {
        console.log("error", err)
      })
  };


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
                    <h1> Admin Settings </h1>
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
                        <h3 class="card-title">Admin Settings</h3>
                      </div>

                      <form onSubmit={this.mySubmit} encType="multipart/form-data" id="testi_form">
                        <div class="card-body">


                          <div class="row">

                            <div class="form-group col-md-3">
                              <label>Admin Image</label>
                              <input type="file" name='image' id='image' class="form-control" accept="image/*" onChange={this.onFileChange}  />
                            </div>

                            <div class="form-group col-md-3">
                              <label>Name</label>
                              <input type="text" class="form-control" name="name" placeholder="" required value={this.state.name} onChange={this.changedata} />
                            </div>

                            <div class="form-group col-md-3">
                              <label>Username</label>
                              <input type="text" class="form-control" name="username" placeholder="" required value={this.state.username}  onChange={this.changedata} />
                            </div>

                            <div class="form-group col-md-3">
                              <label>Email</label>
                              <input type="email" class="form-control" name="email" placeholder="" required value={this.state.email} onChange={this.changedata} />
                            </div>
 
                             

                            <div class="form-group col-md-2">
                              <label>&nbsp;&nbsp;&nbsp;</label>
                              <button type="submit" class="btn btn-primary"> Update</button>
                            </div>

                          </div>

                          <div class="form-group col-md-2" style={{backgroundColor:'#a1a2a4'}}>
                            <center><img src={`${config.backend_URL}/`+this.state.profile_image} height='100px' width='110px' /></center>
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

export default withRouter(Adminsetting);