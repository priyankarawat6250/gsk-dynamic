import React from "react";
import { Link, withRouter } from "react-router-dom";
import config from "../../config.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css


import Header from "./includes/Header.js";
import Sidebar from "./includes/Sidebar.js";
import Footer from "./includes/Footer.js";
const axios = require("axios");
class Websetting extends React.Component {

   state = {
      
      loginflag: false,
      logo: "",
      name: "",
      email: "",
      phone: "",
      facebook_link: "",
      address: "",
      errors: []
    }

    initialState = {
      loginflag: false,
      logo: "",
      name: "",
      email: "",
      phone: "",
      facebook_link: "",
      address: "",
      errors: []
    };
   
    openModal = (e) => {
      e.preventDefault()
      this.setState({ modalIsOpen: true })
    }
  
    closeModal = async (e) => {
      this.setState({ modalIsOpen: false })
    }
  
    changedata = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }
  
  
    componentDidMount = () => {
      this.getSettingsData();
  
    }
  
    getSettingsData = () => {
      axios.get(`${config.backend_URL}/admin/getSettings`)
        .then((responseJson) => {
          console.log("sdsds",responseJson.data.data);
          this.setState({
            logo: responseJson.data.data.logo,
            name: responseJson.data.data.name,
            email: responseJson.data.data.email,
            phone: responseJson.data.data.phone,
            facebook_link: responseJson.data.data.facebook_link,
            address:responseJson.data.data.address
          })
          // console.log(this.state.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  
    mySubmit = e => {
      e.preventDefault();
        let newObj = {
          logo: this.state.logo,
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          facebook_link: this.state.facebook_link,
          address:this.state.address
        }
        console.log("newObj",newObj)
         
        axios.post(`${config.backend_URL}/admin/updateSettings`, newObj)
          .then(async data => {

            

            if (data.data.status === true) {
              toast(data.data.message)
               
              this.getSettingsData();
            } else {
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
        console.log(data.data);
        this.setState({ logo: data.data.data });
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
        <div class="wrapper">
          <Header />
          <Sidebar />
          <ToastContainer />

          <div class="content-wrapper">
            <section class="content-header">
              <div class="container-fluid">
                <div class="row mb-2">
                  <div class="col-sm-6">
                    <h1> Website Settings </h1>
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
                        <h3 class="card-title">Website Settings</h3>
                      </div>

                      <form onSubmit={this.mySubmit} encType="multipart/form-data" id="testi_form">
                        <div class="card-body">


                          <div class="row">

                            <div class="form-group col-md-3">
                              <label>Logo</label>
                              <input type="file" name='image' id='image' defaultValue={this.state.image} class="form-control" accept="image/*" onChange={this.onFileChange}  />
                            </div>

                            <div class="form-group col-md-3">
                              <label>Name</label>
                              <input type="text" class="form-control" name="name" placeholder="eg GSK Properties" required value={this.state.name} onChange={this.changedata} />
                            </div>

                            <div class="form-group col-md-3">
                              <label>Email</label>
                              <input type="email" class="form-control" name="email" placeholder="eg feedback@gskproperties.ca" required value={this.state.email} onChange={this.changedata} />
                            </div>

                            <div class="form-group col-md-3">
                              <label>Phone</label>

                              <input type="text" class="form-control number" name="phone" placeholder="eg +14034575502" required value={this.state.phone} onChange={this.changedata} />
                            </div>

                            <div class="form-group col-md-4">
                              <label>Facebook Link</label>
                              <input type="text" class="form-control" name="facebook_link" placeholder="eg www.facebook.com/gskproperties" required value={this.state.facebook_link}  onChange={this.changedata} />
                            </div>
 

                            <div class="form-group col-md-8">
                              <label>Address</label>
                              <input type="text" class="form-control" name="address" placeholder="Enter Address" value={this.state.address} onChange={this.changedata} />
                            </div>                            

                            <div class="form-group col-md-2">
                              <label>&nbsp;&nbsp;&nbsp;</label>
                              <button type="submit" class="btn btn-primary"> Update</button>
                            </div>

                          </div>

                          <div class="form-group col-md-2" style={{backgroundColor:'#a1a2a4'}}>
                            <center><img src={`${config.backend_URL}/`+this.state.logo} height='100px' width='110px' /></center>
                            </div>


                          </div>
                      </form>

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

export default withRouter(Websetting);